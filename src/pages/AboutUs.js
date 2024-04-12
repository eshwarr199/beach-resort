import React from 'react';
import backgroundImage from '../images/about.jpeg';  
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '200vh', backgroundSize:"cover", backgroundPosition: 'center' }}>
      <div className="about-content">
        <h2 className="my-text">About Us</h2>
        <div className="highlighted-text">
          <p className="my-text">
            Welcome to Beach Resort! We've been serving our guests with warm hospitality since before 2000. 
            Our resort is nestled along the stunning coastline, offering breathtaking views and unforgettable experiences.
            Whether you're seeking relaxation on the beach or adventure in the waves, our resort has something for everyone.
            Join us and create memories that will last a lifetime.
          </p>
        </div>
        <div className="highlighted-text">
          <p className="my-text">
            At Beach Resort, we pride ourselves on our luxurious accommodations, world-class amenities, and exceptional service.
            From spacious rooms with ocean views to gourmet dining options and rejuvenating spa treatments, we ensure that every
            aspect of your stay exceeds your expectations.
          </p>
        </div>
        <div className="highlighted-text">
          <p className="my-text">
            Our dedicated staff is committed to providing personalized attention to each guest, ensuring a memorable and enjoyable experience.
            Whether you're planning a romantic getaway, a family vacation, or a corporate retreat, Beach Resort offers the perfect setting
            for relaxation, adventure, and unforgettable moments.
          </p>
        </div>
        <div className="highlighted-text">
          <p className="my-text">
            Come and discover the beauty and tranquility of Beach Resort. Book your stay with us today and embark on a journey of relaxation,
            rejuvenation, and unforgettable memories.
          </p>
          <p className="my-text">
To create an "About Us" page for a beach resort website, you'll want to include information that highlights the unique features, history, and offerings of the resort. Here's a template you can use to fill in the content:

About Us
Welcome to [Beach Resort Name], your ultimate destination for a perfect beach getaway. Nestled along the pristine shores of [Location], our resort offers a blend of luxury, relaxation, and adventure, making it the ideal choice for your next vacation.

Our Story
[Beach Resort Name] has been a beacon of hospitality since [Year Established]. With a rich history of providing exceptional service and unforgettable experiences, we have become a beloved destination for travelers from around the world.

Our Mission
At [Beach Resort Name], our mission is to create lasting memories for our guests. Whether you're seeking relaxation by the sea, exciting water sports, or delicious dining options, we strive to exceed your expectations at every turn.

Accommodations
Our resort features a range of accommodation options to suit every traveler. From cozy beachfront cottages to luxurious suites with panoramic ocean views, each room is designed to provide comfort and tranquility.

Amenities
Indulge in our array of resort amenities, including:

Infinity pool overlooking the ocean
Spa and wellness center for ultimate relaxation
Beachfront dining with fresh, locally sourced ingredients
Exciting water sports activities for the adventurous
Kids' club to keep the little ones entertained
Local Attractions
Explore the beauty of [Location] with ease, as our resort is conveniently located near a variety of attractions and activities. Whether you're interested in exploring the local culture, shopping, or simply soaking up the sun on the beach, there's something for everyone.

Sustainability
At [Beach Resort Name], we are committed to sustainability and preserving the natural beauty of our surroundings. We take pride in our eco-friendly practices and work diligently to minimize our environmental impact.

Contact Us
Ready to experience the magic of [Beach Resort Name]? Contact our friendly team today to book your stay or inquire about our special offers.

Follow Us
Stay connected with us on social media for the latest updates and promotions:

Instagram
Facebook
Twitter
Come discover the beauty of [Beach Resort Name] and create memories that will last a lifetime.





</p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
