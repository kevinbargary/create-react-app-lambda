import React, { Component } from "react";
import logo from "./Logo.png";
import bookkeeping from "./bookkeeping.jpg";
import vat from "./vat.jpg";
import creditcontrol from "./creditcontrol.jpg";
import payroll from "./payroll.jpg";
import tax from "./tax.jpg";

import "./App.css";

class App extends Component {
  render() {
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
          <section class="section1">
            <div class="content">
              <p>Keeping your books balanced and stress-free.</p>
            </div>
          </section>
          <section class="section2">
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
          </section>
          <section class="section3">
            <div class="content">
              <p>
                <form id="contact-form" method="post" action="submit-form.php">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required />

                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required />

                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />

                  <label for="message">Message</label>
                  <textarea id="message" name="message" required></textarea>

                  <button type="submit">Send</button>
                </form>
              </p>
            </div>
          </section>
        </main>
        <footer>
          <p>Copyright NB Bookkeeping © 2023</p>
        </footer>
      </>
    );
  }
}

export default App;
