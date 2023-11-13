"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  Tab,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import Link from "next/link";

const Story = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0] || null;
    setSelectedFile(file);
    console.log(file);
  };
  const data = [
    {
      id: 1,
      image: "assets/images/story-1.jpg",
      title: "Traveling to US",

      updatedAt: {
        date: "6 September",
        duration: "8 min",
      },

      createdAt: {
        date: "4 Aug",
        duration: "10 min",
      },
    },
    {
      id: 2,
      image: "assets/images/story-2.jpg",
      title: "Mistakes To Avoid",

      updatedAt: {
        date: "17 June",
        duration: "9 min",
      },

      createdAt: {
        date: "16 July",
        duration: "18 min",
      },
    },
    {
      id: 3,
      image: "assets/images/story-3.jpg",
      title: "Where, What, Why...?",

      updatedAt: {
        date: "6 May",
        duration: "20 min",
      },

      createdAt: {
        date: "15 June",
        duration: "45 min",
      },
    },
    {
      id: 4,
      image: "assets/images/story-4.jpg",
      title: "Stop Doing This",

      updatedAt: {
        date: "25 june",
        duration: "16 min",
      },

      createdAt: {
        date: "18 may",
        duration: "23 min",
      },
    },
    {
      id: 5,
      image: "assets/images/story-5.jpg",
      title: "No One Will Tell You",

      updatedAt: {
        date: "15 September",
        duration: "24 min",
      },

      createdAt: {
        date: "18 Aug",
        duration: "1 hour",
      },
    },
  ];
  return (
    <>
      <div className="stories-sec d-flex align-items-center justify-content-center mt-5 container mb-5">
        <div className="story-info-in mb-5">
          <Tab.Container id="pills-tab" defaultActiveKey="pills-stories">
            <Nav variant="pills" className="mb-lg-5 mb-md-4 mb-3  storynav">
              <NavItem>
                <Nav.Link eventKey="pills-stories">
                  <i className="fa fa-plus-circle"></i> Stories
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey="pills-seo">
                  <i className="fa fa-search"></i> SEO
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey="pills-account">
                  <i className="fa fa-user"></i> My Account
                </Nav.Link>
              </NavItem>
              {/* <NavItem>
                <Nav.Link eventKey="pills-setting">
                  <i className="fa fa-cog"></i> Settings
                </Nav.Link>
              </NavItem> */}
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="pills-stories">
                <div className="tab-pane fade show active">
                  <Row>
                    <Col md={8} col={7}>
                      <h4 className="story-title">Stories</h4>
                    </Col>
                    <Col md={4} col={5} className="story-btn">
                      {/* <Button
                          href="#login"
                          className="btn btn-style"
                          target="_blank"
                        >
                          <i className="fa fa-plus-circle"></i> New Story
                        </Button> */}
                      <Link href="/newstory">
                        <Button className="connectwallet">
                          <i className="fa fa-plus-circle"></i> New Story
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="w3l-homeblock1">
                    {data.map((item) => (
                      <Col key={item.id} lg={12} className="mb-5">
                        <div className="list-view list-view1 text-left">
                          <Card className="mt-4 grids5-info">
                            <Card.Img
                              src={item.image}
                              alt=""
                              className="img-fluid radius-image news-image "
                            />

                            <div className="blog-info align-self">
                              <a href="#blog-single" className="blog-desc1">
                                {item.title}
                              </a>
                              <ul className="blog-meta story-sub-t">
                                <li className="meta-item blog-lesson">
                                  <span className="meta-value">Updated:</span>
                                </li>
                                <li className="meta-item blog-lesson">
                                  <span className="meta-value">
                                    {item.updatedAt.date}{" "}
                                  </span>
                                </li>
                                <li className="meta-item blog-students">
                                  <span className="meta-value">
                                    {" "}
                                    {item.updatedAt.duration} read
                                  </span>
                                </li>
                              </ul>

                              <ul className="blog-meta">
                                <li className="meta-item blog-lesson">
                                  <span className="meta-value">Created: </span>
                                </li>
                                <li className="meta-item blog-lesson">
                                  <span className="meta-value">
                                    {item.createdAt.date}{" "}
                                  </span>
                                </li>
                                <li className="meta-item blog-students">
                                  <span className="meta-value">
                                    {item.createdAt.duration} read
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </Card>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Tab.Pane>
            </Tab.Content>

            <Tab.Content>
              <Tab.Pane eventKey="pills-seo" className="seo-width">
                <Row>
                  <Col lg={12}>
                    <div className="tab-pane fade show active mb-3">
                      <span>
                        <div className="form-check seo-check">
                          <input className="form-check-input" type="checkbox" />
                          <h6 className="story-title">
                            Block search engine indexing
                          </h6>
                        </div>
                      </span>

                      <div className="mt-3">
                        <h6 className="seo-page-tile">Page Title</h6>
                        <input
                          type="text"
                          className="form-control seo-input"
                          placeholder="add your page title here"
                        />
                      </div>
                      <div className="mt-3">
                        <h6 className="seo-page-tile">Meta Description</h6>
                        <input
                          type="text"
                          className="form-control seo-input"
                          placeholder="add a mete description to rank better on search"
                        />
                      </div>
                      <div className="mt-3">
                        <h6 className="seo-page-tile">Meta Keywords</h6>
                        <input
                          type="text"
                          className="form-control seo-input"
                          placeholder="add keywords seperate by coma"
                        />
                      </div>
                      <div className="mt-3 ">
                        <h6 className="seo-page-tile mb-3">Opengraph Image</h6>
                        <div className="file-input">
                          <input
                            type="file"
                            id="file"
                            className="file-input__input"
                            onChange={handleFileChange}
                          />
                          <label htmlFor="file" className="file-input__label">
                            Choose File
                          </label>
                          <span>
                            {selectedFile
                              ? selectedFile.name
                              : "No file chosen"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <button className="btn seo-btn">Update</button>
                      </div>
                    </div>

                    {/* <div className="tab-pane fade show active mb-3">
                      <Form.Group>
                        <Form.Check
                          type="checkbox"
                          label="Block search engine indexing"
                        />
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Page Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="add your page title here"
                        />
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Meta Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="add a meta description to rank better on search"
                        />
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Meta Keywords</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="add keywords separated by a comma"
                        />
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Opengraph Image</Form.Label>
                        <InputGroup>
                          <Form.Control type="file" />
                          <Form.Label
                            htmlFor="file"
                            className="file-input__label"
                          >
                            Choose File
                          </Form.Label>
                          <span>No file chosen</span>
                        </InputGroup>
                      </Form.Group>

                      <Button className="mt-3 seo-btn">Update</Button>
                    </div> */}
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default Story;
