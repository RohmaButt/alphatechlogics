//https://codepen.io/amal84/pen/vYPNqbO
"use client";
import Image from "next/image";
import img0 from "@/public/Images/logos/qonsult_1.jpeg";
import { usePathname } from "next/navigation";

import "./style.css";

export default function Navbar() {
  const route = usePathname();

  return (
    <nav className="nav">
      <div className="d-flex flex-row container">
        <a href="/" className="title-name">
          &alpha;Tech<sub className="subscript">Logics</sub>
        </a>
        {/* <Image src={img0} alt="logo" width={60} height={60} /> */}
        <ul>
          <li>
            <a href="/services">SERVICES</a>
            <ul className="submenu">
              <li>
                <a href="/software-development">Software Development</a>
              </li>
              <li>
                <a href="/devops">Cloud DevOps</a>
              </li>
              <li>
                <a href="/data-analytics">Data Analytics</a>
              </li>
              <li>
                <a href="/consulting-and-advisory">Consultancy & Advisory</a>
              </li>
              <li>
                <a href="/artificial-intelligence">Artificial Intelligence</a>
              </li>
              <li>
                <a href="/robotics-automation">Robotics Automation</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/careers">CAREERS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
