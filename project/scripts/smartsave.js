document.addEventListener("DOMContentLoaded", () => {
    // DAILY TIP SECTION
    const tips = [
        "Pay yourself first. Treat saving like a bill.",
        "Start budgeting monthly to avoid overspending.",
        "Use the 50/30/20 rule to manage your money.",
        "Start investing early to benefit from compounding.",
        "Avoid high-interest debt like credit card balances.",
    ];
    const dailyTip = document.getElementById("daily-tip");
    if (dailyTip) {
        const tipOfDay = tips[new Date().getDate() % tips.length];
        dailyTip.textContent = tipOfDay;
    }

    // CALCULATOR SECTION
    const form = document.getElementById("calc-form");
    const resultDiv = document.getElementById("calc-result");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const principal = parseFloat(document.getElementById("principal").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const years = parseInt(document.getElementById("years").value);

            if (principal <= 0 || rate <= 0 || years <= 0 || isNaN(principal) || isNaN(rate) || isNaN(years)) {
                resultDiv.innerHTML = "<p style='color:red'>Please enter only positive numbers in all fields.</p>";
                return;
            }

            const finalAmount = principal * Math.pow(1 + rate / 100, years);
            const formatted = finalAmount.toFixed(2);

            const resultHTML = `
          <p>After <strong>${years}</strong> years, your investment will be worth: <strong>$${formatted}</strong></p>
        `;
            resultDiv.innerHTML = resultHTML;

            // Save to localStorage
            const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
            history.push({
                date: new Date().toLocaleString(),
                principal,
                rate,
                years,
                result: formatted
            });
            localStorage.setItem("calcHistory", JSON.stringify(history));
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const modifiedSpan = document.getElementById("last-modified");
    if (modifiedSpan) {
        modifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
    }
});
