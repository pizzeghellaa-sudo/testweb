// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var links  = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}());

// Update footer year
(function () {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}());

// Contact form — mailto submit
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name    = (form.querySelector('[name="full-name"]').value   || '').trim();
    var company = (form.querySelector('[name="company"]').value     || '').trim();
    var email   = (form.querySelector('[name="email"]').value       || '').trim();
    var phone   = (form.querySelector('[name="phone"]').value       || '').trim();
    var subject = (form.querySelector('[name="subject"]').value     || '').trim();
    var message = (form.querySelector('[name="message"]').value     || '').trim();

    var subjectLine = subject || 'General Enquiry';
    var bodyLines = [
      'Name: '    + name,
      'Company: ' + company,
      'Email: '   + email
    ];
    if (phone) bodyLines.push('Phone: ' + phone);
    bodyLines.push('', message);

    var mailtoUrl = 'mailto:pizzeghella.a@gmail.com'
      + '?subject=' + encodeURIComponent(subjectLine)
      + '&body='    + encodeURIComponent(bodyLines.join('\n'));

    window.location.href = mailtoUrl;

    // Show inline confirmation
    var confirm = document.getElementById('form-confirm');
    if (confirm) {
      confirm.classList.add('is-visible');
      confirm.focus();
    }
  });
}());
