const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;

        // Capitalize product name
        const capitalized = product.name.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        option.textContent = capitalized;
        select.appendChild(option);
    });

    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const lastModified = new Date();
        const options = {
            timeZone: 'Africa/Lagos',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        lastModifiedElement.textContent = `${lastModified.toLocaleString('en-US', options)} WAT`;
    } else {
        console.error('Element with ID "last-modified" not found.');
    }    

});
