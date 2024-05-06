//https:codepen.io/animationbro/pen/OJQEVEj
"use client";

import LocationsBox from "../LocationsBox";
import { usePathname } from "next/navigation";

import "./style.css";
export default function Footer() {
  const route = usePathname();

  return (
    <>
      {route === "/contact" ? (
        <div className="footer-row">
          <LocationsBox />
        </div>
      ) : null}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/about">about us</a>
                </li>
                <li>
                  <a href="/services">our services</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>quick links</h4>
              <ul>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>our Offices</h4>
              <ul>
                <li>
                  <a href="#">Lahore</a>
                </li>
                <li>
                  <a href="#">Islamabad</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-h4">© 2023 AlphaTech Logics</div>
          </div>
        </div>
      </footer>
    </>
  );
}
