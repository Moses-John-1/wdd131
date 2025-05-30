const aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            section: "01",
            enrolled: 25,
            instructor: "Jane Doe"
        },
        {
            section: "02",
            enrolled: 20,
            instructor: "John Smith"
        }
    ]
};

function setCourseInformation(course) {
    const courseNameElement = document.getElementById("courseName");
    courseNameElement.textContent = `${course.code} - ${course.title} (${course.credits} credits)`;
}

function sectionTemplate(section) {
    return `
        <tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>
    `;
}

function renderSections(sections) {
    const tbody = document.querySelector("#sections tbody");
    tbody.innerHTML = sections.map(sectionTemplate).join("");
}

// Initialize the display
setCourseInformation(aCourse);
renderSections(aCourse.sections);