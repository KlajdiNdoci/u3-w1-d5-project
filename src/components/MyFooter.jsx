import { Container, Nav, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="p-5">
      <Container>
        <div className="d-flex mb-3">
          <Nav.Link className="me-4" href="#">
            <span className="fs-3 text-secondary">
              <i className="bi bi-facebook"></i>
            </span>
          </Nav.Link>
          <Nav.Link className="me-4" href="#">
            <span className="fs-3 text-secondary">
              <i className="bi bi-instagram"></i>
            </span>
          </Nav.Link>
          <Nav.Link className="me-4" href="#">
            <span className="fs-3 text-secondary">
              <i className="bi bi-twitter"></i>
            </span>
          </Nav.Link>
          <Nav.Link className="me-4" href="#">
            <span className="fs-3 text-secondary">
              <i className="bi bi-youtube"></i>
            </span>
          </Nav.Link>
        </div>
        <Row className="d-flex mb-4 p-3">
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Audio and Subtitles</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Audio Description</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Help Center</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Gift Cards</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Media Center</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Investor Relations</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Jobs</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Terms of Use</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Privacy</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Legal Notices</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Cookie Preferences</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Corporate Information</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none link-secondary col-6 col-md-4 col-lg-3" href="#">
            <p className="fs-6">Contact Us</p>
          </Nav.Link>
        </Row>
        <button className="btn btn-outline-secondary bg-transparent rounded-0 py-1 px3 fs-6 mb-4">Service Code</button>
        <p className="text-secondary fs-6">{"© 1997-2019 Netflix, Inc. {i-0d00fcda2fdf9c0de}"}</p>
      </Container>
    </footer>
  );
}

export default MyFooter;
