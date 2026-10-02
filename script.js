function openInvitation() {
    document.querySelector(".cover").style.display = "none";

    document.getElementById("invitation").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showLocation() {
    alert("Wedding Venue: Grand Wedding Hall, Andhra Pradesh, India");
}
