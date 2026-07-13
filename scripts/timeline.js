/* ================================================= */
/* TIMELINE */
/* ================================================= */

const timelineWrapper = document.querySelector(".timeline-wrapper");
const years = document.querySelectorAll(".timeline-year");
const items = document.querySelectorAll(".timeline-item");
const nextButton = document.getElementById("next-year-btn");

let currentIndex = -1;

/* ================================================= */
/* YEAR CLICK */
/* ================================================= */

years.forEach((year, index) => {

    year.addEventListener("click", () => {

        const selectedYear = year.dataset.year;

        /* Remove active states */

        years.forEach(btn => {
            btn.classList.remove("active");
        });

        items.forEach(item => {
            item.classList.remove("active");
        });

        /* Activate selected year */

        year.classList.add("active");

        /* Activate corresponding content */

        const selectedItem =
            document.getElementById(`year-${selectedYear}`);

        if (selectedItem) {
            selectedItem.classList.add("active");
        }

        currentIndex = index;

        /* Update Next button */

        let nextIndex = index + 1;

        if (nextIndex >= years.length) {
            nextIndex = 0;
        }

        nextButton.textContent =
            "Continue to " +
            years[nextIndex].textContent.trim() +
            " →";

    });

});

/* ================================================= */
/* NEXT YEAR BUTTON */
/* ================================================= */

nextButton.addEventListener("click", () => {

    if (currentIndex === -1)
        return;

    let nextIndex = currentIndex + 1;

    if (nextIndex >= years.length)
        nextIndex = 0;

    years[nextIndex].click();

    document
        .getElementById("timeline")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

});

/* ================================================= */
/* DEFAULT YEAR */
/* ================================================= */

/* 0 = 1984
   1 = 1993
   2 = 2017
*/

years[1].click();

/* ================================================= */
/* DRAG TO SCROLL */
/* ================================================= */

let isDown = false;
let startX;
let scrollLeft;
let moved = false;

timelineWrapper.addEventListener("mousedown", (e) => {

    isDown = true;
    moved = false;

    timelineWrapper.classList.add("dragging");

    startX = e.pageX - timelineWrapper.offsetLeft;
    scrollLeft = timelineWrapper.scrollLeft;

});

timelineWrapper.addEventListener("mouseleave", () => {

    isDown = false;
    timelineWrapper.classList.remove("dragging");

});

timelineWrapper.addEventListener("mouseup", () => {

    isDown = false;
    timelineWrapper.classList.remove("dragging");

});

timelineWrapper.addEventListener("mousemove", (e) => {

    if (!isDown)
        return;

    e.preventDefault();

    moved = true;

    const x = e.pageX - timelineWrapper.offsetLeft;

    const walk = (x - startX) * 1.5;

    timelineWrapper.scrollLeft = scrollLeft - walk;

});

/* ================================================= */
/* PREVENT ACCIDENTAL CLICK AFTER DRAGGING */
/* ================================================= */

years.forEach(year => {

    year.addEventListener("click", (e) => {

        if (moved) {

            e.preventDefault();
            e.stopImmediatePropagation();

            moved = false;

        }

    });

});