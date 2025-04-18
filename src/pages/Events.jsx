import Header from "../components/Header";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaRegClock,
} from "react-icons/fa";
import annualCharity from "../assets/images/annual-charity.jpg";
import healthFair from "../assets/images/health-fair.jpg";
import schoolDrive from "../assets/images/school-drive.jpg";
import summerCamp from "../assets/images/summer-camp.jpg";
import wellInauguration from "../assets/images/well-inauguration.jpg";
import nutritionWeek from "../assets/images/nutrition-week.png";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity",
      date: "2023-11-15",
      time: "6:00 PM",
      location: "Grand Ballroom, City Convention Center",
      description:
        "Join us for an evening of fine dining and fundraising to support our education programs.",
      image: annualCharity,
      attendees: 250,
    },
    {
      id: 2,
      title: "Community Health Fair",
      date: "2023-12-05",
      time: "9:00 AM - 3:00 PM",
      location: "Central Park Downtown",
      description:
        "Free health checkups, nutrition workshops, and food distribution for underprivileged families.",
      image: healthFair,
      attendees: 500,
    },
    {
      id: 3,
      title: "Back to School Drive",
      date: "2024-01-10",
      time: "10:00 AM - 2:00 PM",
      location: "BetterBlues Headquarters",
      description:
        "Help us collect school supplies for 1,000 underprivileged children starting the new school year.",
      image: schoolDrive,
      attendees: 150,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Summer Camp 2023",
      date: "2023-08-15",
      impact: "Provided educational activities for 200 children",
      image: summerCamp,
    },
    {
      id: 5,
      title: "Water Well Inauguration",
      date: "2023-07-20",
      impact: "Brought clean water to 3 villages (1,200 people)",
      image: wellInauguration,
    },
    {
      id: 6,
      title: "Nutrition Awareness Week",
      date: "2023-06-05",
      impact: "Educated 500 families about child nutrition",
      image: nutritionWeek,
    },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 mt-12 lg:px-10 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Social Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in making a difference through our community events and
            fundraising initiatives
          </p>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaRegClock className="mr-2 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 text-blue-500" />
                    <span>{event.attendees}+ attending</span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 hover:shadow-md">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500">
            Past Events Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Impact:</span>{" "}
                    {event.impact}
                  </p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center group">
                    View Photos
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-inner">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Want to organize an event with us?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for partners to collaborate on fundraising and
            community events.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
            Contact Our Events Team
          </button>
        </section>
      </main>
    </>
  );
}
