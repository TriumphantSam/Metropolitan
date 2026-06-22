const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const appointmentForm = document.querySelector("#appointment-form");
const formNote = document.querySelector("#form-note");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(appointmentForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const department = formData.get("department");
    const date = formData.get("date");
    const message = formData.get("message") || "No additional message provided.";

    const subject = encodeURIComponent(`Appointment Request - ${name}`);
    const body = encodeURIComponent(
      [
        "Hello Metropolitan Family Hospital,",
        "",
        "I would like to book an appointment.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Preferred Department: ${department}`,
        `Preferred Date: ${date}`,
        `Message: ${message}`,
        "",
        "Thank you.",
      ].join("\n"),
    );

    formNote.textContent = "Opening your email app with the appointment details...";
    window.location.href = `mailto:metrofamilyhospital@gmail.com?subject=${subject}&body=${body}`;
  });
}
