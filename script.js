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
    const medicalRecord = formData.get("medical_record") || "N/A";
    const date = formData.get("date");
    const time = formData.get("time");
    const reason = formData.get("reason");
    const department = formData.get("department");

    const subject = encodeURIComponent(`Appointment Request - ${name}`);
    const body = encodeURIComponent(
      [
        "Hello Metropolitan Family Hospital,",
        "",
        "I would like to book an appointment with the following details:",
        "",
        `Name: ${name}`,
        `Phone Number: ${phone}`,
        `Medical Record Number: ${medicalRecord}`,
        `Preferred Date: ${date}`,
        `Preferred Time: ${time}`,
        `Reason for Visit: ${reason}`,
        `Preferred Department: ${department}`,
        "",
        "Thank you.",
      ].join("\n"),
    );

    formNote.textContent = "Opening your email app with the appointment details...";
    window.location.href = `mailto:metrofamilyhospital@gmail.com?subject=${subject}&body=${body}`;
  });
}
