const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container")
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `<strong p style="font-size:30px"> Thank you !!! </strong>
        <br><br>
        <strong p style="font-size:25px">Feedback : ${selectedRating} </strong>
        <p style="font-size:25px">We'll use your feedback to improve our customer support.</p>
        
        `;
    }
})

function removeActive() {
    ratingEls.forEach((ratingE1) => {
        ratingE1.classList.remove("active");
    })
}