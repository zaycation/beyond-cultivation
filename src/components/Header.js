import React from "react";
import Flip from "react-reveal/Flip";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/Homepage.css";

const Header = () => {

  return (
    <>
      <Container fluid={true}>
        <Row>
          <div className="hdr-img">
            <Col>
              <Flip bottom>
                <div className="hdr-text">
                  <p className="text-white text-center">
                    Where you can be yourself
                  </p>
                  <h4 className="text-white text-center">
                    Cannabis Growing Guides, Tips, and Help
                  </h4>
                  <hr className="divider my-4" />
                  <div className="text-center">
                    <HashLink to="/blog">
                      <Button
                        className="hdr-btns"
                        variant="outline-light"
                      >
                        Visit the Blog
                      </Button>{" "}
                    </HashLink>
                  </div>
                </div>
              </Flip>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
