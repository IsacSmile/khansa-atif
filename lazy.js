const lazyVideos = document.querySelectorAll(".lazy-video-top");

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const video = entry.target;

      // load video source
      video.src = video.dataset.src;

      // autoplay when loaded
      video.play();

      // stop observing this video
      observer.unobserve(video);
    }
  });
}, { threshold: 0.25 });

lazyVideos.forEach(video => videoObserver.observe(video));





















// PROGRAM MODAL 




  const fitplanEnquireBtn = document.getElementById("fitplanEnquireBtn");
  const fitplanModal = document.getElementById("fitplanModal");
  const fitplanModalClose = document.getElementById("fitplanModalClose");
  const fitplanEnquiryForm = document.getElementById("fitplanEnquiryForm");

  fitplanEnquireBtn.addEventListener("click", () => {
    fitplanModal.classList.add("fitplan-modal-active");
  });

  fitplanModalClose.addEventListener("click", () => {
    fitplanModal.classList.remove("fitplan-modal-active");
  });

  fitplanModal.addEventListener("click", (event) => {
    if (event.target === fitplanModal) {
      fitplanModal.classList.remove("fitplan-modal-active");
    }
  });

  fitplanEnquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("fitplanName").value.trim();
    const age = document.getElementById("fitplanAge").value.trim();
    const gender = document.getElementById("fitplanGender").value;
    const address = document.getElementById("fitplanAddress").value.trim();
    const mobile = document.getElementById("fitplanMobile").value.trim();

    const message =
      `New Fitness Plan Enquiry%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Age: ${encodeURIComponent(age)}%0A` +
      `Gender: ${encodeURIComponent(gender)}%0A` +
      `Address: ${encodeURIComponent(address)}%0A` +
      `Mobile No: ${encodeURIComponent(mobile)}%0A%0A` +
      `Plan: Premium Fitness & Nutrition Plan%0A` +
      `Price: 1900 PKR`;

    const whatsappNumber = "923208748438";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  });
