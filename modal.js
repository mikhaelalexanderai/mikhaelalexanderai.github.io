document.addEventListener("DOMContentLoaded", () => {
  // Modal 1 (myModal)
  const modal1 = document.getElementById("myModal");
  const btn1 = document.getElementById("myBtn");
  const span1 = document.getElementsByClassName("close")[0];

  if (btn1 && modal1 && span1) {
    btn1.onclick = () => {
      modal1.style.display = "block";
    };

    span1.onclick = () => {
      modal1.style.display = "none";
    };
  }

  // Modal 2 (modal-certification)
  const btnsCertifications = document.querySelectorAll(".btn-certification");
  const modalsCertifications = document.querySelectorAll(".modal-certification");
  const closeCertBtns = document.querySelectorAll(".close-certification");

  btnsCertifications.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCertifications[i].style.display = "block";
    });
  });

  closeCertBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCertifications[i].style.display = "none";
    });
  });

  // Modal 3 (modal-certificate)
  const btnsCertificates = document.querySelectorAll(".btn-certificate");
  const modalsCertificates = document.querySelectorAll(".modal-certificate");
  const closeCertBtns2 = document.querySelectorAll(".close-certificate");

  btnsCertificates.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCertificates[i].style.display = "block";
    });
  });

  closeCertBtns2.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCertificates[i].style.display = "none";
    });
  });

  // Modal 4 (modal-cv)
  const btnsCv = document.querySelectorAll(".btn-cv");
  const modalsCv = document.querySelectorAll(".modal-cv");
  const closeCvBtns = document.querySelectorAll(".close-cv");

  btnsCv.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCv[i].style.display = "block";
    });
  });

  closeCvBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modalsCv[i].style.display = "none";
    });
  });


  // Close modal when clicking outside modal content for all modals
  window.addEventListener("click", (event) => {
    // Modal 1
    if (modal1 && event.target === modal1) {
      modal1.style.display = "none";
    }

    // Modal 2
    modalsCertifications.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Modal 3
    modalsCertificates.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Modal 4
    modalsCv.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
