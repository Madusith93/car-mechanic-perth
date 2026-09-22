<?php
/**
 * POST /cms/api/upload.php  (multipart/form-data, field name "image")
 * Admin-only. Saves an uploaded image into cms/uploads/ and returns its
 * public URL. Used by the admin dashboard's image fields (hero background,
 * services image, why-us image).
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';

cms_apply_cors();
header('Content-Type: application/json');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

cms_require_login();

if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    $err = $_FILES['image']['error'] ?? UPLOAD_ERR_NO_FILE;
    $messages = [
        UPLOAD_ERR_INI_SIZE   => 'File is larger than the server allows.',
        UPLOAD_ERR_FORM_SIZE  => 'File is larger than allowed.',
        UPLOAD_ERR_PARTIAL    => 'Upload was interrupted. Please try again.',
        UPLOAD_ERR_NO_FILE    => 'No file was uploaded.',
        UPLOAD_ERR_NO_TMP_DIR => 'Server misconfiguration (no temp dir).',
        UPLOAD_ERR_CANT_WRITE => 'Server could not write the file.',
        UPLOAD_ERR_EXTENSION  => 'Upload blocked by a server extension.',
    ];
    http_response_code(400);
    echo json_encode(['error' => $messages[$err] ?? 'Upload failed.']);
    exit;
}

$file = $_FILES['image'];

// 5 MB limit
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
if ($file['size'] > MAX_UPLOAD_BYTES) {
    http_response_code(400);
    echo json_encode(['error' => 'Image must be under 5 MB.']);
    exit;
}

// Verify actual file content, not just the client-sent name/type.
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

$allowed = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
    'image/gif'  => 'gif',
];

if (!isset($allowed[$mime])) {
    http_response_code(400);
    echo json_encode(['error' => 'Only JPG, PNG, WEBP or GIF images are allowed.']);
    exit;
}

$uploadsDir = CMS_ROOT . '/uploads';
if (!is_dir($uploadsDir)) {
    mkdir($uploadsDir, 0755, true);
}

$ext = $allowed[$mime];
$filename = bin2hex(random_bytes(12)) . '.' . $ext;
$destination = $uploadsDir . '/' . $filename;

if (!move_uploaded_file($file['tmp_name'], $destination)) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not save the uploaded file. Check that cms/uploads/ is writable.']);
    exit;
}

// Build an absolute URL from the actual request, so it works the same in
// local dev (php -S) and on the live domain without any config.
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'])); // .../cms/api
$cmsDir = dirname($scriptDir); // .../cms
$url = $scheme . '://' . $host . $cmsDir . '/uploads/' . $filename;

echo json_encode(['success' => true, 'url' => $url, 'filename' => $filename]);