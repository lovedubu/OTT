

function scrollLeftBox(btn) {
    const container = btn.parentElement.querySelector(".top10-scroll");
    container.scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

function scrollRightBox(btn) {
    const container = btn.parentElement.querySelector(".top10-scroll");
    container.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}