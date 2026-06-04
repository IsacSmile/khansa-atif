//For Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("active");
});


// VIDEO ELEMENT
const video = document.querySelector(".video-ctrl");

// PLAY TRIGGERS
const playWrapper = document.querySelector(".play-icon-wrapper");
const playIcon = document.querySelector(".play-icon");

// BACKDROP + CLOSE ELEMENTS (created dynamically)
let videoOverlay = null;
let closeBtn = null;

// FUNCTION: SHOW VIDEO
function showVideo() {
  if (!videoOverlay) {
    videoOverlay = document.createElement("div");
    videoOverlay.classList.add("video-overlay");

    closeBtn = document.createElement("div");
    closeBtn.classList.add("video-close-btn");
    closeBtn.innerHTML = "×";

    document.body.appendChild(videoOverlay);
    document.body.appendChild(closeBtn);

    // close event
    closeBtn.addEventListener("click", hideVideo);
    videoOverlay.addEventListener("click", hideVideo);
  }

  video.style.display = "block";
  videoOverlay.style.display = "block";
  closeBtn.style.display = "block";

  video.currentTime = 0; // start fresh
  video.play();
}

// FUNCTION: HIDE VIDEO
function hideVideo() {
  video.pause();
  video.style.display = "none";
  videoOverlay.style.display = "none";
  closeBtn.style.display = "none";
}

// CLICK EVENTS
playWrapper.addEventListener("click", showVideo);
playIcon.addEventListener("click", showVideo);

function integerr() {
  let int = 5;
  console.log(int * int);
}

integerr();

function square(number) {
  return number * number;
}
square();







// Faqs Section starts here
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close others
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle selected
    item.classList.toggle("active");
  });
});



 


// ------------------------------------------------
// LAZY LOADING FOR IMAGES
// ------------------------------------------------
const lazyImages = document.querySelectorAll(".lazy-img");

const imageObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // load image
      img.classList.remove("lazy-img");
      obs.unobserve(img);
    }
  });
}, { threshold: 0.2 });

lazyImages.forEach(img => imageObserver.observe(img));






// ========== Contact Form Section Start ==========
// ========== Contact Form Section Start ==========

const form = document.getElementById("yogaFormm");

//  Your WhatsApp number (with country code, no + or spaces)
const whatsappNumber = "923208748438";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;
  const diet = document.getElementById("diet").value;
  const message = document.getElementById("message").value;

const whatsappMessage = 
`New Fitness Inquiry

Name: ${name}
Phone: ${phone}
Weight: ${weight} kg
Goal: ${goal}
Diet: ${diet}
Message: ${message || "N/A"}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");
  form.reset();
  
});

// ========== Contact Form Section End ==========
// ========== Contact Form Section End ==========











/* ======================================
   OPEN/CLOSE MODAL
====================================== */

const orderModal =
document.getElementById("orderModal");

const openOrderModal =
document.getElementById("openOrderModal");

const closeOrderModal =
document.getElementById("closeOrderModal");

openOrderModal.addEventListener("click", (e) => {

    e.preventDefault();

    orderModal.classList.add("active");

});

closeOrderModal.addEventListener("click", () => {

    orderModal.classList.remove("active");

});

orderModal.addEventListener("click", (e) => {

    if (e.target === orderModal) {

        orderModal.classList.remove("active");

    }

});


/* ======================================
   FORM SUBMIT
====================================== */

const orderForm = document.getElementById("orderForm");

const successMessage = document.getElementById("orderSuccessMessage");

orderForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(orderForm);

    try {

        const response = await fetch(
            "https://formspree.io/f/xqeoaekk",
            {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if (response.ok) {

            /* CLOSE ORDER MODAL */
            orderModal.classList.remove("active");

            /* RESET FORM */
            orderForm.reset();

            /* SHOW SUCCESS POPUP */
            setTimeout(() => {

                successMessage.classList.add("active");

            }, 400);

        } else {

            alert("Failed to submit order.");

        }

    } catch (error) {

        alert("Something went wrong!");

    }

});


/* ======================================
   CLOSE SUCCESS POPUP
====================================== */

const successCloseBtn =
document.getElementById("successCloseBtn");

successCloseBtn.addEventListener("click", () => {

    successMessage.classList.remove("active");

});


/* ======================================
   CLOSE SUCCESS POPUP ON OUTSIDE CLICK
====================================== */

successMessage.addEventListener("click", (e) => {

    if (e.target === successMessage) {

        successMessage.classList.remove("active");

    }

});



