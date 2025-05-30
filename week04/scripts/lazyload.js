const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}