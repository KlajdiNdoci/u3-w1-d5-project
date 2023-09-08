import React from "react";
import { Card, Col } from "react-bootstrap";

function MyCard(movie) {
  return (
    <Col xs={6} md={4} lg={3} xl={2} className="g-1 col-xxl ">
      <Card className="card-animation border-0 bg-transparent">
        <Card.Img className="rounded-1" src={movie.movie} alt="" />
      </Card>
    </Col>
  );
}

export default MyCard;
