import React, { Component } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MyCard from "./MyCard";

class VideoSection extends Component {
  state = {
    movieData: [],
    isLoading: true,
    isError: false,
  };

  fetchMovieData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=d51e7065&s=${this.props.filmTitle}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.setState({ movieData: data.Search, isLoading: false });
    } catch (error) {
      console.log("Error fetching movie data:", error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidMount() {
    this.fetchMovieData();
  }

  render() {
    return (
      <section className="mb-5 overflow-hidden">
        <Container>
          <h4 className="mb-3">{this.props.sectionTitle}</h4>
          {this.state.isLoading || this.state.isError ? (
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          ) : (
            <Row className="mb-5 flex-nowrap">
              {this.state.movieData.map(movie => (
                <MyCard key={movie.imdbID} movie={movie.Poster} />
              ))}
            </Row>
          )}
        </Container>
      </section>
    );
  }
}

export default VideoSection;
