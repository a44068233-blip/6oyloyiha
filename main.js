
var elSpinnerWrap = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
    elSpinnerWrap.style.opacity = "1";

    setTimeout(() => {
        elSpinnerWrap.style.display = "none";
    }, 1800)
});


