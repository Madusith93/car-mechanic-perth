<?php
/**
 * Small helper around the flat-file JSON content store in cms/data/.
 * Every section (hero, services, reviews, ...) is one file; this enforces
 * a whitelist so the API can never read/write outside that folder.
 */

const CMS_SECTIONS = ['site', 'hero', 'services', 'services-page', 'why-us', 'areas', 'reviews', 'footer', 'booking'];

function cms_section_path(string $section): ?string {
    if (!in_array($section, CMS_SECTIONS, true)) {
        return null;
    }
    return CMS_DATA_DIR . '/' . $section . '.json';
}

function cms_read_section(string $section) {
    $path = cms_section_path($section);
    if ($path === null || !file_exists($path)) {
        return null;
    }
    $raw = file_get_contents($path);
    $data = json_decode($raw, true);
    return $data === null && json_last_error() !== JSON_ERROR_NONE ? null : $data;
}

function cms_read_all_sections(): array {
    $out = [];
    foreach (CMS_SECTIONS as $section) {
        $out[cms_camel($section)] = cms_read_section($section);
    }
    return $out;
}

function cms_write_section(string $section, $data): bool {
    $path = cms_section_path($section);
    if ($path === null) {
        return false;
    }
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        return false;
    }
    $fh = fopen($path, 'c+');
    if (!$fh) {
        return false;
    }
    $ok = false;
    if (flock($fh, LOCK_EX)) {
        ftruncate($fh, 0);
        rewind($fh);
        $ok = fwrite($fh, $json) !== false;
        fflush($fh);
        flock($fh, LOCK_UN);
    }
    fclose($fh);
    return $ok;
}

/** site -> site, why-us -> whyUs, services-page -> servicesPage */
function cms_camel(string $section): string {
    $parts = explode('-', $section);
    $first = array_shift($parts);
    foreach ($parts as $p) {
        $first .= ucfirst($p);
    }
    return $first;
}

/** Read a generic JSON file outside the section whitelist (e.g. bookings.json). */
function cms_read_json_file(string $path, $default = []) {
    if (!file_exists($path)) {
        return $default;
    }
    $data = json_decode(file_get_contents($path), true);
    return $data ?? $default;
}

function cms_write_json_file(string $path, $data): bool {
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        return false;
    }
    $fh = fopen($path, 'c+');
    if (!$fh) {
        return false;
    }
    $ok = false;
    if (flock($fh, LOCK_EX)) {
        ftruncate($fh, 0);
        rewind($fh);
        $ok = fwrite($fh, $json) !== false;
        fflush($fh);
        flock($fh, LOCK_UN);
    }
    fclose($fh);
    return $ok;
}