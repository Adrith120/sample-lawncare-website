// The script is shared by all pages. Each feature checks for its elements first.
document.addEventListener("DOMContentLoaded", function () {
  setupMobileNavigation();
  setupPhoneCopy();
  setupContactForm();
});

function setupMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName !== "A") {
      return;
    }

    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  });
}

function setupPhoneCopy() {
  const copyButton = document.querySelector("#copy-phone");
  const phoneNumber = document.querySelector("#phone-number");
  const copyMessage = document.querySelector("#copy-message");

  if (!copyButton || !phoneNumber || !copyMessage) {
    return;
  }

  copyButton.addEventListener("click", async function () {
    const phoneText = phoneNumber.textContent.trim();

    try {
      await copyTextToClipboard(phoneText);
      showTemporaryMessage(copyMessage, "Phone number copied!");
    } catch (error) {
      showTemporaryMessage(copyMessage, "Copy failed. Please select the phone number manually.");
    }
  });
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Fallback keeps the copy button useful when opening the HTML file directly.
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function showTemporaryMessage(element, message) {
  element.textContent = message;

  window.clearTimeout(element.messageTimer);
  element.messageTimer = window.setTimeout(function () {
    element.textContent = "";
  }, 3000);
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const formMessage = document.querySelector("#form-message");

  if (!form || !formMessage) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const requiredFields = form.querySelectorAll("[required]");
    let formIsValid = true;

    requiredFields.forEach(function (field) {
      const hasValue = field.value.trim() !== "";
      field.classList.toggle("input-error", !hasValue);

      if (!hasValue) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      formMessage.textContent = "Please fill out all required fields.";
      formMessage.classList.add("error");
      return;
    }

    formMessage.textContent = "Thanks. This sample form is ready to connect to an email service later.";
    formMessage.classList.remove("error");
    form.reset();
  });

  form.addEventListener("input", function (event) {
    if (!event.target.matches("[required]")) {
      return;
    }

    if (event.target.value.trim() !== "") {
      event.target.classList.remove("input-error");
    }
  });
}
