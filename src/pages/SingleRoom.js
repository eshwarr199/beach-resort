import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
      isBooked: false, // State to track if the room is booked
    };
  }
  static contextType = RoomContext;

  // Function to handle booking
  handleBookRoom = () => {
    // Redirect to the booking page when booking button is clicked
    this.props.history.push("/book");
  };

  // Function to handle cancelling booking
  handleCancelBooking = () => {
    this.setState({ isBooked: false });
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [ ...defaultImages] = images;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <div className="banner">
            <h1>{`${name} room`}</h1>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </div>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
              {!this.state.isBooked ? (
                <button onClick={this.handleBookRoom} className="btn-primary">
                  Book Room
                </button>
              ) : (
                <button
                  onClick={this.handleCancelBooking}
                  className="btn-primary"
                >
                  Cancel Booking
                </button>
              )}
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
