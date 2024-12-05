function startRotators() {
    const rotators = document.querySelectorAll(".rotator");

    rotators.forEach((rotator) => {
        const cases = rotator.querySelectorAll(".rotator__case");
        let currentElement = rotator.querySelector(".rotator__case_active");

        setInterval(() => {
            currentElement.classList.remove("rotator__case_active");
            currentElement = currentElement.nextElementSibling || rotator.firstElementChild;
            currentElement.classList.add("rotator__case_active");
        }, 1000);
    });
}

startRotators();
