import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "When it comes to resorts,our resort is the one of the biggest perks for many travelers is the inclusion of free cocktails with required specific brands suitable to travellers"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "This is another amazing nature resort that offers an endless amount of activities. Guests here enjoy archery, cycling, wine tasting, fly fishing, hiking and more."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Staying at our hotel comes with more than just a relaxing getaway. Our resort benefits makes perfect vacation destination for your family and friends."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Definately you enjoy an environment which is interactive and retains sensitivity to the community of consumers.Our resort helps provide the same."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}