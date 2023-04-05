import React, { useState, useEffect } from "react";
import "./styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // get all form elements
    const formElements = document.querySelectorAll(
      '.form-group input, .form-group textarea, button[type="submit"]'
    );

    // define function to check if element is in viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // define function to add animation class to visible form elements
    function animateFormElements() {
      formElements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("animated");
        }
      });
    }

    // add event listener to window to check for visible form elements on load and scroll
    window.addEventListener("load", animateFormElements);
    window.addEventListener("scroll", animateFormElements);
  }, []);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.subject) {
      errors.subject = "Subject is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    if (errors) {
      setErrors(errors);
      return;
    }

    // construct mailto URL with form data
    const url = `mailto:youremail@example.com?subject=${formData.subject}&body=${formData.message}`;

    // open email client with mailto URL
    window.location.href = url;
  };

  return (
    <form class="contact-form">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label class="animated" for="name">
          Name
        </label>
        <input class="animated" type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label class="animated" for="email">
          Email
        </label>
        <input class="animated" type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label class="animated" for="message">
          Message
        </label>
        <textarea
          class="animated"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <button class="animated" type="submit">
        Send Message
      </button>
      <div class="error"></div>
    </form>
  );
}
