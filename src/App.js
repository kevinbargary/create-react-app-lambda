import React, { useEffect } from "react";
import logo from "./images/Logo.png";
import bookkeeping from "./images/bookkeeping.jpg";
import vat from "./images/vat.jpg";
import creditcontrol from "./images/creditcontrol.jpg";
import payroll from "./images/payroll.jpg";
import tax from "./images/tax.jpg";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/App.css";

function LoadEvents() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function App() {
  useEffect(() => LoadEvents(), []);
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="" />

        <nav>
          <ul>
            <li>
              <a href="#home" class="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="section1" id="home">
          <div class="content">
            <p>Keeping your books balanced and stress-free.</p>
          </div>
        </section>
        <section class="about">
          <div class="container">
            <h2>About</h2>
            <p>
              NB Bookkeeping was founded in Tipperary in 2023, and is run by
              Nicola Bargary, a professionally qualified Bookkeeper, proficient
              in multiple accounting softwares such as Sage, Surf Accounts,
              Quickbooks and Xero. With 10+ years experience working both in the
              UK and Ireland in an accounts department, I have had experience
              working in all aspects of Accounting, from AP/AR to the
              preparation of Management Accounts, working across a variety of
              sectors including Healthcare, E-Commerce, Haulage, Construction,
              and Manufacturing. As a small operation, I can provide a
              personalised service, tailored to your business needs. I am quick,
              efficient and accurate, allowing you to have an up to date
              snapshot on the financial health of your business. By providing
              you with a virtual accounts department, I can take the stress out
              of paperwork, giving you peace of mind, and enabling you to focus
              on growing your business.
            </p>
            <div class="infographics">
              <div class="infographic">
                <img src="graphic-1.png" alt="Graphic 1" />
                <h3>Stat 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  euismod, tortor non convallis eleifend, eros ante mattis
                  augue, non porta neque massa ut lorem.
                </p>
              </div>
              <div class="infographic">
                <img src="graphic-2.png" alt="Graphic 2" />
                <h3>Stat 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  euismod, tortor non convallis eleifend, eros ante mattis
                  augue, non porta neque massa ut lorem.
                </p>
              </div>
              <div class="infographic">
                <img src="graphic-3.png" alt="Graphic 3" />
                <h3>Stat 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  euismod, tortor non convallis eleifend, eros ante mattis
                  augue, non porta neque massa ut lorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section2" id="services">
          <div class="container">
            <h2>Services Provided</h2>
            <div class="content">
              <div class="card-grid">
                <div class="card">
                  <img src={bookkeeping} alt="" />
                  <div class="card-content">
                    <h3>Bookkeeping</h3>
                    <p>
                      Bookkeeping is the process of recording and organizing
                      financial transactions for a business. It's important for
                      accurate financial reporting, informed decision-making,
                      and compliance. Many businesses use professional
                      bookkeeping services for efficient management of their
                      financial records..{" "}
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img src={payroll} alt="" />
                  <div class="card-content">
                    <h3>Payroll</h3>
                    <p>
                      Payroll is the management of employee compensation and
                      involves accurately tracking and recording all related
                      financial transactions. Effective payroll management is
                      important for maintaining compliance and minimizing
                      financial risks. Bookkeeping and payroll often work
                      together to support business operations..{" "}
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img src={vat} alt="" />
                  <div class="card-content">
                    <h3>VAT Administration</h3>
                    <p>
                      VAT administration involves managing and reporting VAT
                      transactions, including calculating and recording VAT owed
                      or paid, and submitting regular VAT returns to tax
                      authorities. Effective VAT administration is important for
                      compliance, avoiding penalties, and maximizing cash flow.
                      Bookkeeping plays a critical role in VAT administration,
                      and professional services can help businesses manage their
                      VAT obligations more efficiently..{" "}
                    </p>
                  </div>
                </div>

                <div class="card">
                  <img src={creditcontrol} alt="" />
                  <div class="card-content">
                    <h3>Credit Control</h3>
                    <p>
                      Credit control manages accounts receivable by monitoring
                      and collecting outstanding customer payments. Bookkeeping
                      accurately tracks invoices, payments, and balances. Credit
                      control helps maintain positive cash flow, reduce bad
                      debt, and improve financial performance. Effective
                      management requires organized financial records. A
                      professional bookkeeping service can assist with credit
                      control, helping businesses manage accounts receivable
                      more effectively.{" "}
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img src={tax} alt="" />
                  <div class="card-content">
                    <h3>RCT (Relevant Contract Tax)</h3>
                    <p>
                      RCT is a tax withholding system for certain construction
                      industry payments in Ireland. Bookkeeping involves
                      tracking payments, deducting tax, and submitting RCT
                      returns to Revenue. Effective management ensures
                      compliance and avoids penalties. Professional bookkeeping
                      services can help construction businesses manage their RCT
                      obligations and minimize risks.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" class="section3">
          <ContactForm />
        </section>
      </main>
      <footer>
        <p>Copyright NB Bookkeeping © 2023</p>

        <div className="social-media">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
