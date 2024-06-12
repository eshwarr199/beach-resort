import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  const sections = {
    single: "Single Section",
    double: "Double Section",
    family: "Family Section",
    presidential: "Presidential Section"
  };

  const categorizeRooms = (rooms) => {
    return rooms.reduce((acc, room) => {
      const section = room.type; // Assuming room type corresponds to the section
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(room);
      return acc;
    }, {});
  };

  const categorizedRooms = categorizeRooms(rooms);

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {Object.keys(categorizedRooms).map((section) => (
          <div key={section}>
            <h2>{sections[section]}</h2>
            <div className="room-rows">
              {categorizedRooms[section].map((room, index) => (
                <Room key={room.id} room={room} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
