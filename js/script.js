document.addEventListener("DOMContentLoaded", () => {
    const collapsing_skill_elements = document.getElementsByClassName("collapsable");

    if (collapsing_skill_elements !== null && collapsing_skill_elements.length > 0) {
        for (let i = 0; i < collapsing_skill_elements.length; i++) {
            const element = collapsing_skill_elements[i];
            element.addEventListener("click", () => {
                const collapsing = element.querySelector(".collapsing-section");
                if (collapsing !== null && collapsing.classList.contains("active") === true) {
                    element.querySelector(".collapse-btn").classList.remove("active");
                    collapsing.classList.remove("active");
                    return;
                }
                if (collapsing !== null && collapsing.classList.contains("active") === false) {
                    element.querySelector(".collapse-btn").classList.add("active");
                    collapsing.classList.add("active");
                }

            })

        }
    }
})