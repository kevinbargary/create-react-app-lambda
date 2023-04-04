import React, { Component } from "react";
import logo from "./Logo.png";
import "./App.css";
// import Sample from "./Sample";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#section2">Section 2</a>
              </li>
              <li>
                <a href="#section3">Services</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="home" class="home-blurb">
            <div class="container">
              <h2>Welcome to Our Website</h2>
              <p>
                At NB Bookkeeping, we understand that bookkeeping can be
                overwhelming for small business owners. That's why we offer
                personalized bookkeeping services to fit your specific needs.
                From data entry to financial reporting, we've got you covered.
                Let us help you get back to doing what you love - running your
                business.
              </p>
              <a href="#services" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </section>
          <section id="services">
            <div class="card-grid">
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt="Card Image"
                />
                <div class="card-content">
                  <h3>Card Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis bibendum nulla sed leo pulvinar ullamcorper. Donec in
                    euismod leo.{" "}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt="Card Image"
                />
                <div class="card-content">
                  <h3>Card Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis bibendum nulla sed leo pulvinar ullamcorper. Donec in
                    euismod leo.{" "}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt="Card Image"
                />
                <div class="card-content">
                  <h3>Card Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis bibendum nulla sed leo pulvinar ullamcorper. Donec in
                    euismod leo.{" "}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt="Card Image"
                />
                <div class="card-content">
                  <h3>Card Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis bibendum nulla sed leo pulvinar ullamcorper. Donec in
                    euismod leo.{" "}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <p>Bookkeeping Payroll VAT Administration Credit Control RCT</p>
          </section>

          <section id="section3">
            <form class="contact-form" action="submit-form.php" method="post">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                required
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
                required
              />

              <label for="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject.."
                required
              />

              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here.."
                style={{ height: 200 }}
                required
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </section>
        </main>
      </>
    );
  }
}

export default App;
