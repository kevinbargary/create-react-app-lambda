import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import logo from "./images/Logo.png";
import stress from "./images/stress-icon.svg";
import cloud from "./images/data-cloud-icon.svg";
import idea from "./images/idea-icon.svg";
import bookkeeping from "./images/bookkeeping.jpg";
import vat from "./images/vat.jpg";
import creditcontrol from "./images/creditcontrol.jpg";
import payroll from "./images/payroll.jpg";
import tax from "./images/tax.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

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
  const businessAddress = "Bansha, Co. Tipperary, Ireland";

  const googleMapsEmbedLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9726.822094071476!2d-8.07459562060569!3d52.448248980698864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485cb35e4935eae9%3A0xa00c7a9973196a0!2sBallinlough%20East%2C%20Bansha%2C%20Co.%20Tipperary!5e0!3m2!1sen!2sie!4v1684435445541!5m2!1sen!2sie";

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
        <section class="about" id="about">
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
                <img
                  src={idea}
                  alt="Graphic 1"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <h3>Problem</h3>
                <p>
                  Bookkeeping services in Ireland are in high demand,
                  particularly among small and medium-sized businesses who may
                  not have the resources or expertise to manage their own
                  financial records. Outsourcing these services to a
                  professional provider can save businesses time and money,
                  while ensuring compliance with Irish tax and accounting
                  regulations.
                </p>
              </div>
              <div class="infographic">
                <img
                  src={stress}
                  alt="Graphic 2"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <h3>Outsource stress</h3>
                <p>
                  Bookkeeping services in Ireland are often tailored to meet the
                  specific needs of individual businesses, We offer a range of
                  services including payroll management, tax filing, financial
                  reporting, and more. This flexibility allows businesses to
                  choose the level of support they require, based on their size,
                  industry, and budget.
                </p>
              </div>
              <div class="infographic">
                <img
                  src={cloud}
                  alt="Graphic 3"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <h3>Future proofing</h3>
                <p>
                  With the growth of cloud-based bookkeeping software and online
                  services, bookkeeping services in Ireland are becoming more
                  accessible and affordable than ever before. We can offer
                  real-time access to financial data, automated reporting, and
                  other features that can help businesses to streamline their
                  financial operations and make better-informed decisions.
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
                  <LazyLoad>
                    <img src={bookkeeping} alt="" />
                  </LazyLoad>
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
                  <LazyLoad>
                    <img src={payroll} alt="" />
                  </LazyLoad>
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
                  <LazyLoad>
                    <img src={vat} alt="" />
                  </LazyLoad>
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
                  <LazyLoad>
                    <img src={creditcontrol} alt="" />
                  </LazyLoad>
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
                  <LazyLoad>
                    <img src={tax} alt="" />
                  </LazyLoad>
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
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:nbbookkeepingco@gmail.com?subject=Bookkeeping Service Enquiry ">
                nbbookkeepingco@gmail.com{" "}
              </a>
            </p>
            <p>
              Social Media:{" "}
              <span className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100090037899468">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </span>
            </p>
            <p>Phone: 087 112 8358</p>
            <p>Address: {businessAddress}</p>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={googleMapsEmbedLink}
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <p>Copyright NB Bookkeeping © 2023</p>
        </div>
      </footer>
    </>
  );
}

export default App;
