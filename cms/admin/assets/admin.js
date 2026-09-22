(function () {
  var API = '../api';
  var state = { content: null, activeTab: 'site' };

  var SCHEMAS = {
    site: {
      title: 'Business Info',
      fields: [
        { type: 'text', key: 'business_name', label: 'Business Name' },
        { type: 'text', key: 'phone_display', label: 'Phone (display)' },
        { type: 'text', key: 'phone_tel', label: 'Phone (tel link — digits only)' },
        { type: 'text', key: 'email', label: 'Email' },
        { type: 'text', key: 'address', label: 'Address' },
        { type: 'text', key: 'google_maps_url', label: 'Google Maps URL' },
        { type: 'textarea', key: 'map_embed_url', label: 'Map Embed URL (from Google Maps "Embed a map")' },
        { type: 'text', key: 'hours.weekdays', label: 'Hours — Weekdays' },
        { type: 'text', key: 'hours.saturday', label: 'Hours — Saturday' },
        { type: 'text', key: 'hours.sunday', label: 'Hours — Sunday' },
        { type: 'textarea', key: 'tagline', label: 'Tagline' },
      ],
    },
    hero: {
      title: 'Hero',
      fields: [
        { type: 'text', key: 'location_badge', label: 'Location Badge' },
        { type: 'text', key: 'heading_line1', label: 'Heading — Line 1' },
        { type: 'text', key: 'heading_highlight', label: 'Heading — Highlighted Word(s)' },
        { type: 'textarea', key: 'description', label: 'Description' },
        { type: 'text', key: 'cta_text', label: 'Button Text' },
        { type: 'image', key: 'background_image', label: 'Background Image' },
        { type: 'list', key: 'features', label: 'Feature', itemLabel: 'Feature' },
      ],
    },
    services: {
      title: 'Services ("What We Do")',
      fields: [
        { type: 'text', key: 'badge', label: 'Badge Text' },
        { type: 'text', key: 'heading_line1', label: 'Heading — Line 1' },
        { type: 'text', key: 'heading_highlight', label: 'Heading — Highlighted Word(s)' },
        { type: 'image', key: 'image', label: 'Section Image' },
        { type: 'items', key: 'items', label: 'Service', subfields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ] },
      ],
    },
    'why-us': {
      title: 'Why Choose Us',
      fields: [
        { type: 'text', key: 'badge', label: 'Badge Text' },
        { type: 'text', key: 'heading_line1', label: 'Heading — Line 1' },
        { type: 'text', key: 'heading_highlight', label: 'Heading — Highlighted Word(s)' },
        { type: 'image', key: 'image', label: 'Section Image' },
        { type: 'text', key: 'cta_text', label: 'Button Text' },
        { type: 'items', key: 'items', label: 'Reason', max: 4, subfields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ] },
      ],
    },
    areas: {
      title: 'Service Areas',
      fields: [
        { type: 'text', key: 'badge', label: 'Badge Text' },
        { type: 'text', key: 'heading_line1', label: 'Heading — Line 1' },
        { type: 'text', key: 'heading_highlight', label: 'Heading — Highlighted Word(s)' },
        { type: 'textarea', key: 'description', label: 'Description' },
        { type: 'list', key: 'suburbs', label: 'Suburb', itemLabel: 'Suburb' },
      ],
    },
    reviews: {
      title: 'Reviews',
      fields: [
        { type: 'text', key: 'badge', label: 'Badge Text' },
        { type: 'text', key: 'heading_line1', label: 'Heading — Line 1' },
        { type: 'text', key: 'heading_highlight', label: 'Heading — Highlighted Word(s)' },
        { type: 'textarea', key: 'description', label: 'Description' },
        { type: 'items', key: 'items', label: 'Review', subfields: [
          { key: 'quote', label: 'Quote', type: 'textarea' },
          { key: 'author', label: 'Author', type: 'text' },
          { key: 'location', label: 'Location', type: 'text' },
          { key: 'rating', label: 'Rating (1–5)', type: 'number' },
        ] },
      ],
    },
    footer: {
      title: 'Footer',
      fields: [
        { type: 'textarea', key: 'tagline', label: 'Tagline' },
        { type: 'items', key: 'services', label: 'Footer Link', subfields: [
          { key: 'title', label: 'Label', type: 'text' },
          { key: 'href', label: 'Link (e.g. #services)', type: 'text' },
        ] },
        { type: 'text', key: 'copyright_suffix', label: 'Copyright line (after the year)' },
      ],
    },
    booking: {
      title: 'Booking Form — Service Options',
      fields: [
        { type: 'list', key: 'services', label: 'Service option', itemLabel: 'Service option' },
      ],
    },
  };

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panelContent = document.getElementById('panel-content');
  var statusBox = document.getElementById('status');

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.activeTab = btn.dataset.tab;
      renderActiveTab();
    });
  });

  document.getElementById('logout-btn').addEventListener('click', function () {
    fetch(API + '/logout.php', { method: 'POST', credentials: 'include' }).then(function () {
      window.location.href = 'login.php';
    });
  });

  function showStatus(message, ok) {
    statusBox.textContent = message;
    statusBox.className = 'status ' + (ok ? 'ok' : 'err');
    statusBox.hidden = false;
    window.clearTimeout(showStatus._t);
    showStatus._t = window.setTimeout(function () { statusBox.hidden = true; }, 4000);
  }

  function getPath(obj, path) {
    return path.split('.').reduce(function (o, k) { return (o || {})[k]; }, obj);
  }
  function setPath(obj, path, value) {
    var parts = path.split('.');
    var last = parts.pop();
    var target = parts.reduce(function (o, k) { o[k] = o[k] || {}; return o[k]; }, obj);
    target[last] = value;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function renderActiveTab() {
    var tab = state.activeTab;
    if (tab === 'bookings') {
      renderBookingsTab();
      return;
    }
    var schema = SCHEMAS[tab];
    var data = state.content[camel(tab)] || {};
    panelContent.innerHTML = '';

    var form = el('form', {});
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      saveSection(tab, data);
    });

    var group = el('div', { class: 'field-group' }, [el('h3', { text: schema.title })]);

    schema.fields.forEach(function (field) {
      group.appendChild(renderField(field, data));
    });

    form.appendChild(group);
    var saveBar = el('div', { class: 'save-bar' });
    saveBar.appendChild(el('button', { type: 'submit', class: 'primary-btn', text: 'Save Changes' }));
    form.appendChild(saveBar);
    panelContent.appendChild(form);
  }

  function uploadImage(file, onDone) {
    var formData = new FormData();
    formData.append('image', file);

    fetch(API + '/upload.php', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then(function (res) { return res.json().then(function (b) { return { ok: res.ok, body: b }; }); })
      .then(function (r) {
        if (!r.ok) throw new Error(r.body.error || 'Upload failed.');
        onDone(r.body.url);
        showStatus('Image uploaded.', true);
      })
      .catch(function (err) { showStatus(err.message, false); });
  }

  function renderField(field, data) {
    if (field.type === 'text' || field.type === 'textarea' || field.type === 'number') {
      var row = el('div', { class: 'field-row' });
      var label = el('label', { text: field.label });
      var input = field.type === 'textarea' ? el('textarea', { rows: 3 }) : el('input', { type: field.type === 'number' ? 'number' : 'text' });
      input.value = getPath(data, field.key) || '';
      input.addEventListener('input', function () { setPath(data, field.key, input.value); });
      row.appendChild(label);
      row.appendChild(input);
      return row;
    }

    if (field.type === 'image') {
      var irow = el('div', { class: 'field-row' });
      irow.appendChild(el('label', { text: field.label }));

      var preview = el('img', {
        src: getPath(data, field.key) || '',
        alt: '',
        style: 'max-width:100%;max-height:160px;border-radius:8px;border:1px solid var(--border);margin-bottom:0.5rem;display:' + (getPath(data, field.key) ? 'block' : 'none'),
      });

      var urlInput = el('input', { type: 'text', placeholder: 'https:// or upload below' });
      urlInput.value = getPath(data, field.key) || '';
      urlInput.addEventListener('input', function () {
        setPath(data, field.key, urlInput.value);
        preview.src = urlInput.value;
        preview.style.display = urlInput.value ? 'block' : 'none';
      });

      var fileInput = el('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp,image/gif', style: 'display:none' });
      var uploadBtn = el('button', { type: 'button', class: 'add-btn', text: 'Upload Image From Computer' });
      uploadBtn.addEventListener('click', function () { fileInput.click(); });
      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        uploadBtn.textContent = 'Uploading…';
        uploadBtn.disabled = true;
        uploadImage(file, function (url) {
          urlInput.value = url;
          setPath(data, field.key, url);
          preview.src = url;
          preview.style.display = 'block';
          uploadBtn.textContent = 'Upload Image From Computer';
          uploadBtn.disabled = false;
        });
      });

      irow.appendChild(preview);
      irow.appendChild(urlInput);
      irow.appendChild(fileInput);
      irow.appendChild(uploadBtn);
      return irow;
    }

    if (field.type === 'list') {
      var wrap = el('div', { class: 'field-row' });
      wrap.appendChild(el('label', { text: field.label + ' list' }));
      var arr = getPath(data, field.key) || (setPath(data, field.key, []) || getPath(data, field.key));
      var listWrap = el('div', {});
      function redrawList() {
        listWrap.innerHTML = '';
        arr.forEach(function (val, idx) {
          var item = el('div', { class: 'list-item' });
          var input = el('input', { type: 'text' });
          input.value = val;
          input.addEventListener('input', function () { arr[idx] = input.value; });
          var removeBtn = el('button', { type: 'button', class: 'remove-btn', text: 'Remove' });
          removeBtn.addEventListener('click', function () { arr.splice(idx, 1); redrawList(); });
          item.appendChild(input);
          item.appendChild(removeBtn);
          listWrap.appendChild(item);
        });
      }
      redrawList();
      var addBtn = el('button', { type: 'button', class: 'add-btn', text: '+ Add ' + (field.itemLabel || 'item') });
      addBtn.addEventListener('click', function () { arr.push(''); redrawList(); });
      wrap.appendChild(listWrap);
      wrap.appendChild(addBtn);
      return wrap;
    }

    if (field.type === 'items') {
      var iwrap = el('div', { class: 'field-row' });
      iwrap.appendChild(el('label', { text: field.label + ' list' }));
      var items = getPath(data, field.key) || (setPath(data, field.key, []) || getPath(data, field.key));
      var iListWrap = el('div', {});
      function redrawItems() {
        iListWrap.innerHTML = '';
        items.forEach(function (obj, idx) {
          var card = el('div', { class: 'list-item' });
          field.subfields.forEach(function (sf) {
            var srow = el('div', { class: 'field-row' });
            srow.appendChild(el('label', { text: sf.label }));
            var sinput = sf.type === 'textarea' ? el('textarea', { rows: 2 }) : el('input', { type: sf.type === 'number' ? 'number' : 'text' });
            sinput.value = obj[sf.key] != null ? obj[sf.key] : '';
            sinput.addEventListener('input', function () {
              obj[sf.key] = sf.type === 'number' ? Number(sinput.value) : sinput.value;
            });
            srow.appendChild(sinput);
            card.appendChild(srow);
          });
          var removeBtn = el('button', { type: 'button', class: 'remove-btn', text: 'Remove' });
          removeBtn.addEventListener('click', function () { items.splice(idx, 1); redrawItems(); });
          card.appendChild(removeBtn);
          iListWrap.appendChild(card);
        });
      }
      redrawItems();
      iwrap.appendChild(iListWrap);
      if (!field.max || items.length < field.max) {
        var iAddBtn = el('button', { type: 'button', class: 'add-btn', text: '+ Add ' + (field.label || 'item') });
        iAddBtn.addEventListener('click', function () {
          if (field.max && items.length >= field.max) return;
          var blank = {};
          field.subfields.forEach(function (sf) { blank[sf.key] = sf.type === 'number' ? 0 : ''; });
          items.push(blank);
          redrawItems();
        });
        iwrap.appendChild(iAddBtn);
      }
      return iwrap;
    }

    return el('div', {});
  }

  function camel(section) {
    return section.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  }

  function saveSection(section, data) {
    fetch(API + '/update.php', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: section, data: data }),
    })
      .then(function (res) { return res.json().then(function (b) { return { ok: res.ok, body: b }; }); })
      .then(function (r) {
        if (!r.ok) throw new Error(r.body.error || 'Save failed.');
        state.content[camel(section)] = r.body.data;
        showStatus('Saved. Changes are live on the site immediately.', true);
      })
      .catch(function (err) { showStatus(err.message, false); });
  }

  function renderBookingsTab() {
    panelContent.innerHTML = 'Loading bookings…';
    fetch(API + '/booking.php', { credentials: 'include' })
      .then(function (res) {
        if (res.status === 401) { window.location.href = 'login.php'; throw new Error('Not logged in'); }
        return res.json();
      })
      .then(function (body) {
        var bookings = body.bookings || [];
        panelContent.innerHTML = '';
        panelContent.appendChild(el('div', { class: 'field-group' }, [
          el('h3', { text: 'Bookings Inbox (' + bookings.length + ')' }),
        ]));
        if (bookings.length === 0) {
          panelContent.appendChild(el('p', { text: 'No booking requests yet.' }));
          return;
        }
        var table = el('table', {});
        var thead = el('thead', {}, [el('tr', {}, [
          el('th', { text: 'Received' }), el('th', { text: 'Name' }), el('th', { text: 'Contact' }),
          el('th', { text: 'Vehicle' }), el('th', { text: 'Service' }), el('th', { text: 'Preferred Date' }),
          el('th', { text: 'Issue' }), el('th', { text: 'Status' }),
        ])]);
        var tbody = el('tbody', {});
        bookings.forEach(function (b) {
          var statusSelect = el('select', { class: 'status-select' });
          ['new', 'contacted', 'completed'].forEach(function (s) {
            var opt = el('option', { value: s, text: s.charAt(0).toUpperCase() + s.slice(1) });
            if (b.status === s) opt.setAttribute('selected', 'selected');
            statusSelect.appendChild(opt);
          });
          statusSelect.addEventListener('change', function () {
            fetch(API + '/booking.php', {
              method: 'PATCH',
              credentials: 'include',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: b.id, status: statusSelect.value }),
            })
              .then(function (res) { if (!res.ok) throw new Error('Update failed'); showStatus('Booking status updated.', true); })
              .catch(function (err) { showStatus(err.message, false); });
          });

          var tr = el('tr', {}, [
            el('td', { text: new Date(b.createdAt).toLocaleString(), 'data-label': 'Received' }),
            el('td', { text: b.fullName, 'data-label': 'Name' }),
            el('td', { text: [b.phone, b.email].filter(Boolean).join(' · '), 'data-label': 'Contact' }),
            el('td', { text: b.vehicle || '—', 'data-label': 'Vehicle' }),
            el('td', { text: b.service, 'data-label': 'Service' }),
            el('td', { text: b.preferredDate || '—', 'data-label': 'Preferred Date' }),
            el('td', { text: b.issue || '—', 'data-label': 'Issue' }),
          ]);
          var statusTd = el('td', { 'data-label': 'Status' });
          statusTd.appendChild(statusSelect);
          tr.appendChild(statusTd);
          tbody.appendChild(tr);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        panelContent.appendChild(table);
      })
      .catch(function () {});
  }

  function init() {
    fetch(API + '/session.php', { credentials: 'include' })
      .then(function (res) { return res.json(); })
      .then(function (body) {
        if (!body.loggedIn) { window.location.href = 'login.php'; return; }
        return fetch(API + '/content.php', { credentials: 'include' }).then(function (r) { return r.json(); });
      })
      .then(function (content) {
        if (!content) return;
        state.content = content;
        renderActiveTab();
      })
      .catch(function () {
        panelContent.textContent = 'Failed to load. Please refresh.';
      });
  }

  init();
})();