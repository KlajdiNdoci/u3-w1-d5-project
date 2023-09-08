import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

function MyHeader() {
  return (
    <header className="container text-white bg-netflix-dark mb-4 ">
      <MyNavbar />
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h2 className="fw-1 pe-5 text-white">TV Shows</h2>
          <div className="dropdown-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                className="text-white bg-black rounded-0"
                id="dropdown-basic"
              >
                <span className="pe-4">Genres</span>
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark" className="bg-black rounded-0 border border-white">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Romance</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="d-flex">
          <Button className="sort-btn-1 btn btn-outline-secondary bg-transparent rounded-0 py-1 px-3 fs-6 me-1">
            <i className="bi bi-text-left"></i>
          </Button>
          <Button className="sort-btn-2 btn btn-outline-secondary bg-transparent rounded-0 py-1 px-3 fs-6">
            <i className="bi bi-grid-fill"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default MyHeader;
