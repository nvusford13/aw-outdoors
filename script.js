document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav nav');
toggle?.addEventListener('click', () => {
  nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
});
const form = document.getElementById('quoteForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const msg = `Estimate Request:%0AName: ${encodeURIComponent(data.name||'')}%0APhone: ${encodeURIComponent(data.phone||'')}%0AAddress: ${encodeURIComponent(data.address||'')}%0AService: ${encodeURIComponent(data.service||'')}`;
  window.location.href = `sms:+17063938722?&body=${msg}`;
});
