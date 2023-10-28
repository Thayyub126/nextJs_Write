"use client";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        className={`fixed-top ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar expand="lg" variant="light">
            <Navbar.Brand href="/">
            <Image
  src="/assets/images/logo.png"
  alt=""
  width={36}
  height={36}
  className="d-inline-block align-top"
/>
              Write.link
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <Nav.Item>
                  <Nav.Link href="#home" className={`nav-link active scroll`}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#pricing" className="scroll nav-link">
                    Pricing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#faq" className="scroll nav-link">
                    FAQ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#blog" className="scroll nav-link">
                    Blog
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="login-btn">
                <Button 
                  className="btn btn-style btn-primary active"
                  target="_blank"
                >
                  <Link href="/auth">Get Started</Link>
                </Button>
              </div>
              {/* <Signin /> */}
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;