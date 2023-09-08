import { Button, Dropdown, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import NetflixLogo from "./NetflixLogo";
import ProfilePic from "./ProfilePic";

function MyNavbar() {
  return (
    <Navbar expand="xl" variant="dark" className="mb-3">
      <div className="container-fluid p-0">
        <div>
          <NetflixLogo />
          <Button
            variant="outline-secondary"
            className="d-xl-none btn btn-outline-secondary text-white border-0 bg-netflix-dark"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Browse</span>
          </Button>
        </div>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" active>
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <div className="d-flex d-none d-md-flex align-items-center">
            <Form id="nav-form" className="d-none d-md-flex text-white">
              <FormControl
                id="nav-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="form-control me-2 rounded-pill bg-black text-white"
              />
            </Form>
            <Button
              variant="fs-5 rounded-circle"
              onClick={() => document.getElementById("nav-search").classList.toggle("visible")}
            >
              <i className="bi bi-search text-white"></i>
            </Button>
            <div className="px-2">
              <p className="m-0 text-decoration-none link-light">KIDS</p>
            </div>
            <div className="fs-5 px-2 link-light">
              <i className="bi bi-bell-fill"></i>
            </div>
          </div>

          <Dropdown className="bg-dark rounded-0 border-0">
            <Dropdown.Toggle className=" rounded-0 border-0" style={{ backgroundColor: "#141414" }}>
              <ProfilePic />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end dropdown-menu-dark bg-black rounded-0 border border-white">
              <Dropdown.Item href="./profile.html">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
