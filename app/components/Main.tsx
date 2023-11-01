"use client"
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import Image from 'next/image';
import Link from "next/link";

// Your array of 10 images
const allImages = [
  " assets/images/blog-1.jpg",
  " assets/images/blog-2.jpg",
  " assets/images/blog-3.jpg",
  " assets/images/blog-4.jpg",
  " assets/images/blog-5.jpg",
  " assets/images/blog-6.jpg",
  " assets/images/blog-7.jpg",
  " assets/images/blog-8.jpg",
];

// tab navigation
const linkHeadings = [
  "Motivation",
  "Featured",
  "Productivity",
  "Development",
  "Culture",
  "Technology",
  "Politics",
  "Entertainment",
];

const titles = [
  "Decentralizing Trust, Empowering Digital Ownership.",
  "Virtual Reality, Big Cloud",
  "Share Khan Of The Jungle Book",
  "Trust Without Third-Party Validation",
  "Data Ownership, Privacy, And Freedom",
  "Web 3 Empowers Users, Not Intermediaries",
  "Virtual Reality, Big Cloud",
  "Data Ownership, Privacy, And Freedom",
];

const authors = [
  "Vitalik Buterin",
  "Gavin Wood",
  "Charles Hoskinson",
  "Joseph Lubin",
  "Balaji Srinivasan",
  "Brian Armstrong",
  "Meltem Demirors",
  "Dan Larimer",
];
const Main = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);



  const handleTabSelect = (tab: number) => {
    setActiveTab(tab);
  };

  const handleToggleSwitch = () => {
    setIsMonthly(!isMonthly);
  };

  useEffect(() => {
    if (activeTab !== null) {
      // Shuffle the array of images
      const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);
      // Take the first 6 images
      const selectedImages = shuffledImages.slice(0, 6);
      setRandomImages(selectedImages);


    }


  }, [activeTab]);


  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion(this:HTMLModElement) {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));

    return () => {
      items.forEach((item) =>
        item.removeEventListener("click", toggleAccordion)
      );
    };
  }, []);

  return (
    <>
      {/* Banner starts */}
      
      <section className="w3lbanner-top position-relative" id="home">
        <Container>
          <div className="w3lbanner-info">
            <h1>
              <span>Write Blogs</span> that{" "}
              <label className="fontitalicw3">Live Forever</label> on the
              decentralized web.
            </h1>
            <p className="banner-parav mb-4">
              Independent writers can now publish stories directly to the
              decentralized web, making the blogs live forever and be free of
              censorship.
            </p>
            <div className="banner-btns text-center">
              <Button
                href="https://app.1w3.io/"
                target="_blank"
                variant="primary"
                className="btn btn-style btn-primary active"
              >
                Start Writing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* List section starts */}
      <section className="list-content py-3 pt-0" id="lists">
        <Container>
          <div className="list-content-inf">
            <Row className="list-grid-inf">
              <Col lg={5} className="list-left-info">
                <h4 className="pe-xl-5 me-xl-5">
                  The 200 Year
                  <label className="fontitalicw3">data promise</label>
                </h4>
              </Col>
              <Col lg={7} className="list-right-info mt-lg-0 mt-2">
                <p>
                  With the 200-year promise, writers are guaranteed that their
                  content will live on, published on IPFS or Arweave based on
                  their choice. Especially with Arweave, the content stays live
                  indefinitely, irrespective of the existence of write.link.
                  This ensures that the writer legacy and thoughts are
                  preserved for generations.
                </p>
              </Col>
            </Row>

            <Row className="list-grid-inf mt-lg-4 mt-2">
              <Col lg={5} className="list-left-info">
                <h4>
                  Data Ownership{" "}
                  <label className="fontitalicw3">
                    Your Write it, You own it.
                  </label>
                </h4>
              </Col>
              <Col lg={7} className="list-right-info mt-lg-0  mt-2">
                <p>
                  You always own your intellectual property, mailing list, and
                  revenue. With full editorial control and no gatekeepers, you
                  can do the work you most believe in.
                </p>
              </Col>
            </Row>

            <Row className="list-grid-inf mt-lg-4 mt-2 ">
              <Col lg={5} className="list-left-info">
                <h4>
                  Content Monetization
                  <label className="fontitalicw3">Earn from your writing</label>
                </h4>
              </Col>
              <Col lg={7} className="list-right-info mt-lg-0  mt-2">
                <p>
                  Writers need to be rewarded for their efforts and creativity.
                  Centralized platforms often take a significant cut of earnings
                  or place restrictions on monetization methods. Write.link
                  provides you diverse monetization streams with maximum
                  transparency.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Blogs starts */}
      

      <Container id="blog">
        <div className="mb-lg-5 mb-md-3">
          <Row className="blog-header">
            <Col className="col-12 blog-title">
              <h3>
                Explore <span className="fontitalicw3">Blogs</span>
              </h3>
              <p className="pe-xl-5">
                {" "}
                Explore Blogs that are Written using Write.link.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <Row >
            <Col lg={3} md={3} className="mb-3" >
              <ul className="row resp-tabs-list">
                {linkHeadings.map((heading, index) => (
                  <Nav.Item key={index} className="nav-item">
                    <li
                      className={`resp-tabs-item ${
                        activeTab === index ? "resp-tab-active" : ""
                      }`}
                      data-eventkey={index}
                    //   active={activeTab === index}
                      onClick={() => handleTabSelect(index)}
                    >
                      {heading}
                    </li>
                  </Nav.Item>
                ))}
              </ul>
            </Col>

            <Col  md={9} sm={12}   className="resp-tabs-container">
              <Tab.Content className="blog-content-grids">
                {randomImages.map((pic, index) => (
                  <Tab.Pane
                    key={index}
                    // eventkey={activeTab}
                    active={activeTab === activeTab}
                  >
                    <div className="image-container">
                      <img
                        src={pic}
                        alt={(index + 1).toString()} 
                        style={{ width: "100%" }}
                      />
                      <div className="image-overlay">
                        <h5>{linkHeadings[activeTab]}</h5>
                        
                        <h3 className="content-title">{titles[activeTab]}</h3>
                        <h6>{authors[activeTab]}</h6>
                        <h5>Read Now</h5>
                        <span className="read-actionicon">
                          <i className="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>


            </Col>
          </Row>
        </div>
      </Container>

      {/* Pricing Plans */}

      <section
        className="pricing-columns pricing-section"
        id="pricing"
      >
        <Container className="pricing-style-w3ls">
          <h3>
            Pricing <span className="fontitalicw3">Plans</span>
          </h3>
          <div className="pricing-content">
            <label
              className={`toggler ${isMonthly ? "toggler--is-active" : ""}`}
              onClick={handleToggleSwitch}
            >
              Monthly
            </label>
            <div className="toggle">
              <input
                type="checkbox"
                id="switcher"
                className="check"
                checked={!isMonthly}
                onChange={handleToggleSwitch}
              />
              <b className="switch"></b>
            </div>
            <label
              className={`toggler ${!isMonthly ? "toggler--is-active" : ""}`}
              onClick={handleToggleSwitch}
            >
              Yearly
            </label>
          </div>
          <Row className="pricing-tableonew3 pricing-chart m-auto ">
            <Col lg={4} md={12} sm={12} mt={4} className="mb-3">
              <Card className="h-100 pricing-grid active">
                <div className="plan popular">
                  <h5 className="pop-plan">Basic</h5>
                  <p>Best for simple blog</p>
                  <div className="price">
                    <h4>{isMonthly ? "Free" : "Free"}</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-body">
                      <h6>Features</h6>
                      <li>
                        <span className="far fa-check-circle"></span>
                        Decentralized hosting on IPFS.
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Basic
                        blogging tools (editor and templates)
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Essential
                        SEO tools.
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Social
                        media sharing integration
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Comment
                        section for articles
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Community
                        support
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Connect
                        your Web3 Domains (.eth and .bnb)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <Link
                    href="https://app.1w3.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-style btn-primary active"
                  >
                    <i className="fas fa-pen"></i> Start Writing
                  </Link>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12} mt={4} className="mb-3">
              <Card className="h-100 pricing-grid active">
                <div className="plan popular">
                  <h5 className="pop-plan">Pro</h5>
                  <p>Best for simple blog</p>
                  <div className="price">
                    <h4>
                      <span className="dollar">$</span>

                      {isMonthly ? " 9.99" : " 99.99"}
                    </h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-body">
                      <h6>Features</h6>
                      <li>
                        <span className="far fa-check-circle"></span> Everything
                        in Basic, plus:
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Choice
                        between IPFS and Arweave for hosting.
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Essential
                        SEO tools.
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Access to
                        premium templates at 25% discount
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Advanced
                        analytics with insights
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Email
                        newsletter integration
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Content
                        gating (1% transaction fee).
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Custom
                        Web2 domain linking
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Continued
                        support for Web3 domains
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <Link
                    href="https://app.1w3.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-style btn-primary active"
                  >
                    <i className="fas fa-pen"></i> Start Writing
                  </Link>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12} mt={4} className="mb-3">
              <Card className="h-100 pricing-grid active">
                <div className="plan popular">
                  <h5 className="pop-plan">Elite</h5>
                  <p>Best for simple blog</p>
                  <div className="price">
                    <h4>
                      <span className="dollar">$</span>
                      {isMonthly ? " 19.99" : " 199.99"}
                    </h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-body">
                      <h6>Features</h6>
                      <li>
                        <span className="far fa-check-circle"></span> Everything
                        in Pro, plus:
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Zero
                        transaction fees on content gating
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Access to
                        premium templates at 50% discount
                      </li>
                      <li>
                        <span className="far fa-check-circle"></span> Early
                        access to new features and updates
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <Link
                    href="https://app.1w3.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-style btn-primary active"
                  >
                    <i className="fas fa-pen"></i> Start Writing
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ start */}

      <section className="w3l-products w3l-faq-block py-md-5 py-3" id="faq">
        <div className="container py-lg-5 py-md-4">
          <div className="faq-content-innf">
            <div className="row">
              <div className="col-lg-6 faq-left-content">
                <h3 className="title-faq mb-3 mw-100">
                  Frequently{" "}
                  <span className="fontitalicw3faq">asked questions</span>
                </h3>
                <p className="pe-xl-4">
                  Navigate through our most commonly asked questions to better
                  understand how write.link can empower your writing journey.
                </p>
                <div className="faq-img">
                  <img
                    src="assets/images/faq.png"
                    alt="faq"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 pr-lg-5 mt-lg-0 mt-sm-5 mt-4">
                <div className="accordion">
                  <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="true">
                      <span className="accordion-title">
                        What is a Write.link?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Write.link is a decentralized blogging platform designed
                        for modern writers. We empower authors with innovative
                        features like AI-enhanced editing, multiple monetization
                        options, and the promise of content longevity, all while
                        ensuring true data ownership.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false">
                      <span className="accordion-title">
                        How is write.link different from traditional blogging
                        platforms?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Unlike traditional platforms, write.link operates on a
                        decentralized web. This means your content is not bound
                        by centralized controls and has the promise to live for
                        at least 200 years. Coupled with our advanced AI
                        features and diverse monetization options, write.link
                        offers a unique and future-proof writing experience
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false">
                      <span className="accordion-title">
                        Is my content safe on write.link?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Absolutely. At write.link, your contents safety and
                        permanence are paramount. Our decentralized structure
                        ensures that your work is securely stored and remains
                        accessible. Plus, with our platform, you retain complete
                        ownership of your data.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-4" aria-expanded="false">
                      <span className="accordion-title">
                        Are there any fees associated with using write.link?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Write.link offers a freemium model. While we have a free
                        version with a rich set of features, there are premium
                        plans that provide additional functionalities, such as
                        custom domain integration, advanced AI tools, and more.
                        Details of our pricing can be found on our Pricing
                        page.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button id="accordion-button-4" aria-expanded="false">
                      <span className="accordion-title">
                        How do I connect my custom domain?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>
                        Connecting your custom domain is a breeze with
                        write.link. Head to the Settings page in your
                        dashboard, find the Domain section, and follow the
                        step-by-step instructions provided. If you encounter any
                        issues, our support team is always here to assist!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Main;
