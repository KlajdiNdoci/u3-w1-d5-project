import { Button, Card, Col, Container, Dropdown, Form, FormControl, Nav, Row } from "react-bootstrap";

function ProfileMain() {
  return (
    <Container className="pt-3" style={{ maxWidth: 750 }}>
      <h1 className="profile-h1 border-bottom border-secondary mb-4 fw-normal">Edit Profile</h1>
      <Row className=" border-bottom border-secondary mb-5">
        <Col className="col-3 me-2">
          <Card className=" border-0 bg-netflix-dark object-fit-cover rounded-4">
            <img
              src="data:image/png;base64,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"
              className="rounded-4"
              alt=""
            />
            <Nav.Link href="#" className="link-light">
              <span className="d-flex profile-pen bg-black position-absolute rounded-circle align-items-center justify-content-center">
                <i className="bi bi-pencil-fill"></i>
              </span>
            </Nav.Link>
          </Card>
        </Col>
        <Col sm={8}>
          <div className="border-bottom border-secondary mb-4">
            <Form className="d-flex mb-5">
              <FormControl
                type="text"
                placeholder="Your name"
                className="flex-fill me-2 py-1 ps-3 rounded-0 border-0 bg-secondary text-white fs-4"
              />
            </Form>
            <div className="mb-4">
              <p className="fs-4">Language:</p>
              <Dropdown className="dropdown-center">
                <Dropdown.Toggle
                  className="btn btn-outline-secondary border-white text-white bg-black rounded-0 dropdown-toggle py-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="pe-5"> English</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-dark bg-black rounded-0 border border-white">
                  <Dropdown.Item>
                    <Dropdown.Item href="#">Italian</Dropdown.Item>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.Item href="#">French</Dropdown.Item>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="mb-4 border-bottom border-secondary">
            <p className="fs-4">Maturity Settings:</p>
            <p className="fs-6 fw-bold py-1 px-3 rounded-1 bg-maturity-gray mb-3 d-inline-block">
              ALL MATURITY RATINGS
            </p>
            <p>Show titles of all maturity ratings for this profile.</p>
            <Button className="btn btn-outline-secondary bg-black rounded-0 py-1 px-4 mb-4">EDIT</Button>
          </div>
          <div className="mb-4">
            <p className="fs-4">Autoplay controls</p>
            <Form.Label className="checkbox mb-3">
              <Form.Check type="checkbox" className="d-none" checked="checked" />
              <span className="checkmark border border-secondary fs-6"></span>
              <span className="fs-6 ms-4">Autoplay next episode in a series on all devices.</span>
            </Form.Label>
            <Form.Label className="checkbox mb-3">
              <Form.Check type="checkbox" className="d-none" checked="checked" />
              <span className="checkmark border border-secondary fs-6"></span>
              <span className="fs-6 ms-4">
                <p className="d-inline-block">Autoplay previews while browsing on all devices.</p>
              </span>
            </Form.Label>
          </div>
        </Col>
      </Row>
      <div className="d-flex">
        <Button className="btn-light border-0 save-btn rounded-0 fs-4 py-2 fw-bold px-5 me-4">SAVE</Button>
        <Button className="btn-outline-secondary bg-black rounded-0 fs-4 py-2 px-5 me-4">CANCEL</Button>
        <Button className="btn-outline-secondary bg-black rounded-0 fs-4 py-2 px-5 me-4">DELETE PROFILE</Button>
      </div>
    </Container>
  );
}

export default ProfileMain;
