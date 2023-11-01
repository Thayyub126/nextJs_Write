"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w3l-footer-29-main"  id="contact">
        <div className="footer-29 py-5" style={{position:"sticky",bottom:"0",width:"100%"}}>
          <Container>
            <Row className="footer-top-29-grids">
              <Col lg={6} col={12} className="footer-grid">
                <div className="footer-grid-innv">
                  <h2>
                    <Link className="logo-icon" href="index.html">
                      <Image
                        src="/assets/images/logo.png" // Update the path to your image
                        alt=""
                        width={36}
                        height={36}
                        className="img-fluid"
                      />{" "}
                      <span>Write.link</span>
                    </Link>
                  </h2>
                  <p className="footer-p">
                    Write blogs that live forever on the decentralized web.
                    Giving power back to the Writers.
                  </p>
                  <div className="main-social-footer-29 mt-4">
                    <Link
                      href="https://www.instagram.com/onew3com/"
                      className="instagram"
                    >
                      <span className="fab fa-instagram"></span>
                    </Link>
                    <Link
                      href="https://www.facebook.com/1W3io/"
                      className="facebook"
                    >
                      <span className="fab fa-facebook-f"></span>
                    </Link>
                    <Link href="https://twitter.com/1w3io" className="twitter">
                      <span className="fab fa-twitter"></span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={2} col={6} className="footer-grid mt-lg-0 mt-4">
                <h4 className="footer-title-29">Storage</h4>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="#arweave" target="_blank">
                        Arweave
                      </Link>
                    </li>
                    <li>
                      <Link href="#ipfs" target="_blank">
                        IPFS
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} col={6} className="footer-grid mt-lg-0 mt-4">
                <h4 className="footer-title-29">Domains</h4>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="#ens" target="_blank">
                        ENS
                      </Link>
                    </li>
                    <li>
                      <Link href="#space" target="_blank">
                        Space ID
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} col={6} className="footer-grid mt-lg-0 mt-4">
                <h4 className="footer-title-29">Other</h4>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="#terms" target="_blank">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="#support" target="_blank">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link href="#blog" target="_blank">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Scroll to top button */}
        {showScrollButton && (
          <button onClick={scrollToTop} id="movetop" title="Go to top">
            <span className="fa fa-angle-up"></span>
          </button>
        )}
      </footer>
      
    </>
  );
};

export default Footer;
