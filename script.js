
/* =================================
   1. JAM DIGITAL
================================= */

function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const waktu = new Date();

        clock.textContent = waktu.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
}

// Jalankan jam
updateClock();
setInterval(updateClock, 1000);


/* =================================
   2. PENCARIAN GALERI
================================= */

const searchGallery = document.getElementById("searchGallery");

if (searchGallery) {
    searchGallery.addEventListener("input", function() {

        const keyword = this.value.toLowerCase();

        const galleryItems = document.querySelectorAll(".gallery-item");

        galleryItems.forEach(function(item) {

            const title = item.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });
    });
}


/* =================================
   3. TAHUN OTOMATIS
================================= */

const tahun = document.getElementById("footer-year");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}


