document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');
    const gallery = document.querySelector('.gallery');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
    });

    // Footer dates
    if (currentYear) currentYear.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = document.lastModified;

    // Temple data
    const temples = [
        { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
        { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
        { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
        { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
        { templeName: "Washington D.C.", location: "Kensington, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
        { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
        { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
        { templeName: "Adelaide Australia", location: "Adelaide Australia", dedicated: "2000, June, 15", area: 10700, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg" },
        { templeName: "Austin Texas", location: "Austin Texas, United State", dedicated: "2024, August, 17", area: 30000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-main.jpg" },
        { templeName: "Benin City Nigeria", location: "Benin City Nigeria", dedicated: "2025, May, 24", area: 30700, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg" }
    ];

    function displayTemples(list) {
        gallery.innerHTML = '';
        list.forEach(t => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const caption = document.createElement('figcaption');

            caption.innerHTML = `
                <strong>${t.templeName}</strong><br>
                Location: ${t.location}<br>
                Dedicated: ${t.dedicated}<br>
                Area: ${t.area.toLocaleString()} sq ft
            `;

            img.src = t.imageUrl;
            img.alt = `${t.templeName} Temple`;

            figure.appendChild(caption);  
            figure.appendChild(img);      
            gallery.appendChild(figure);
        });
    }

    function getYear(dedicatedString) {
        const match = dedicatedString.match(/(\d{4})/);
        return match ? parseInt(match[1]) : 0;
    }

    function filterTemples(criteria) {
        switch (criteria) {
            case 'Old':
                return temples.filter(t => getYear(t.dedicated) < 1900);
            case 'New':
                return temples.filter(t => getYear(t.dedicated) > 2000);
            case 'Large':
                return temples.filter(t => t.area > 90000);
            case 'Small':
                return temples.filter(t => t.area < 10000);
            default:
                return temples;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const filter = link.textContent.trim();
            const filteredTemples = filterTemples(filter);
            displayTemples(filteredTemples);
        });
    });

    // Initial display (Home)
    displayTemples(temples);
});
