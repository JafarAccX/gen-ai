import { useState } from "react";
import "./GenAIv2.css";
import { modules, ninjaCards, capstones, faqs, mentors } from "./GenAIv2Constants";
import { Header, Hero } from "./GenAIv2Part1";
import { ProgramArchitecture } from "./GenAIv2Part2";
import { Curriculum } from "./GenAIv2Part3";
import { BuildNinja, Capstone } from "./GenAIv2Part4";
import { Outcomes, Mentors, ToolStack, Pricing } from "./GenAIv2Part5";

export default function GenAIPageV2({ setActiveTrack: externalSetActiveTrack } = {}) {
  const [activeTrack, setLocalTrack] = useState("tech");
  const [openCurr, setOpenCurr] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  const handleTrackChange = (track) => {
    if (externalSetActiveTrack) {
      externalSetActiveTrack(track);
    } else {
      setLocalTrack(track);
    }
  };

  return (
    <div className="ax-root">
      {/* ═══ HEADER ═══ */}
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />

      {/* ═══ HERO & SOCIAL PROOF ═══ */}
      <Hero activeTrack={activeTrack} setActiveTrack={handleTrackChange} />

      {/* ═══ PROGRAM ARCHITECTURE ═══ */}
      <ProgramArchitecture />

      {/* ═══ CURRICULUM ═══ */}
      <Curriculum modules={modules} openCurr={openCurr} setOpenCurr={setOpenCurr} />

      {/* ═══ BUILD NINJA ═══ */}
      <BuildNinja ninjaCards={ninjaCards} />

      {/* ═══ CAPSTONE ═══ */}
      <Capstone capstones={capstones} />

      {/* ═══ OUTCOMES & HIRING ═══ */}
      <Outcomes />

      {/* ═══ MENTORS ═══ */}
      <Mentors mentors={mentors} />

      {/* ═══ TOOL STACK ═══ */}
      <ToolStack />

      {/* ═══ COMPARISON (commented out) ═══ */}
      {/* <Comparison /> */}

      {/* ═══ PRICING ═══ */}
      <Pricing />

      {/* ═══ FAQ ═══ */}
      <section className="faq-section">
        <div className="section-header">
          <span className="grad-label">Honest Answers</span>
          <h2 className="section-heading">The honest answers.</h2>

        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`} onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                <div className="faq-head">
                  <h3>{f.q}</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="faq-more">View more ↓</div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-bg-wrapper">
            <div className="cta-bg-grad" />
            <div className="cta-bg-circle" />
          </div>

          <div className="cta-content-v2">
            <h2 className="cta-title-v2">
              Ready to lead AI inside your company?
            </h2>
            <p className="cta-desc-v2">
              Next cohort: rolling admissions. 60 seats. Apply, talk to admissions, and decide on the call — no commitment until Day 14.
            </p>
            {/* Form Group — email + apply now */}
            <div className="cta-form-group">
              <div className="cta-email-input">
                <span>abc@gmail.com</span>
              </div>
              <div className="cta-apply-btn-wrap">
                <button className="cta-apply-btn">Apply Now</button>
              </div>
            </div>
            <p className="cta-fine-print">
              EMI from ₹11,500/mo · 14-day refund · LangChain Academy free certification included
            </p>
          </div>

          <div className="cta-image-v2">
            <img
              src="/assets/ctabanner/ctaperson.png"
              alt="Student Success"
              className="cta-person-img"
            />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer-inner">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="logo footer-logo">
              Accelerator<span className="footer-logo-x">X</span>
            </a>
            <p className="footer-tagline">Be a real AI version product by joining us.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/acceleratorxorg/" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip_li)">
                    <path d="M0 1.4325C0 .64125.6575 0 1.46875 0H18.5312C19.3425 0 20 .64125 20 1.4325v17.135C20 19.3587 19.3425 20 18.5312 20H1.46875C.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775v9.03125h3.00125ZM4.67875 6.4775c1.04625 0 1.6975-.6925 1.6975-1.56.01875-.88625-.63125-1.56-1.65875-1.56-1.02875 0-1.67875.675-1.67875 1.56C3 5.785 3.65125 6.4775 4.65875 6.4775h.02ZM10.8138 16.7425v-5.0437c0-.27-.01875-.54.08-.73.22-.44.715-1 1.545-1 1.0862 0 1.52.8275 1.52 2.0425v4.73125H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975c-1.5925 0-2.30625.875-2.70625 1.49125V9.02h-.02c.00625-.01.01875-.02875.02-.04875V7.71125H7.81375c.0375.84875 0 9.03125 0 9.03125h3.00005Z" fill="currentColor"/>
                  </g>
                  <defs><clipPath id="clip_li"><rect width="20" height="20" fill="white"/></clipPath></defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/acceleratorxorg" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5a.75.75 0 110 1.5.75.75 0 010-1.5ZM12 7a5 5 0 110 10A5 5 0 0112 7Zm0 2a3 3 0 100 6 3 3 0 000-6Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/acceleratorxorg/" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M9.077 14.503V10.536H7.742V8.99h1.335V7.85c0-1.323.808-2.043 1.988-2.043.556 0 1.042.041 1.184.06V7.25l-.818.001c-.643 0-.765.305-.765.752v.987h1.531l-.2 1.546H10.67v3.967H9.077Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-col">
            <h4><span className="footer-col-dash">—</span> COMPANY</h4>
            <ul>
              <li><a href="https://acceleratorx.org/">Home</a></li>
              <li><a href="https://acceleratorx.org/#products">Product</a></li>
              <li><a href="https://acceleratorx.org/blogs">Blogs</a></li>
              <li><a href="https://acceleratorx.org/#services">Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><span className="footer-col-dash">—</span> HELP</h4>
            <ul>
              <li><a href="https://acceleratorx.org/support">Customer Support</a></li>
              <li><a href="https://acceleratorx.org/terms-and-conditions">Terms &amp; Conditions</a></li>
              <li><a href="https://acceleratorx.org/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><span className="footer-col-dash">—</span> RESOURCES</h4>
            <ul>
              <li><a href="https://acceleratorx.org/#ebooks">Free eBooks</a></li>
              <li><a href="https://acceleratorx.org/#tutorials">Development Tutorial</a></li>
              <li><a href="https://acceleratorx.org/#playlist">Free course Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 AcceleratorX. All rights reserved. Registered trademark of A2M Technologies Pvt. Ltd.
          </p>
          <div className="footer-bottom-links">
            <a href="https://acceleratorx.org/privacy-policy">PRIVACY</a>
            <span>/</span>
            <a href="https://acceleratorx.org/terms-and-conditions">TERMS</a>
            <span>/</span>
            <span className="footer-tagline-badge">BUILT FOR THE FUTURE OF AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
