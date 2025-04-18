import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import {
  FaChild,
  FaBook,
  FaHeartbeat,
  FaTint,
  FaHandsHelping,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About <span className="text-blue-600">BetterBlues</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering underprivileged children through education, nutrition,
            and clean water initiatives since 2010.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            At BetterBlues, we believe every child deserves access to basic
            human needs and opportunities. Our mission is to break the cycle of
            poverty by addressing its root causes through sustainable,
            community-driven solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300">
              <FaChild className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Child Education
              </h3>
              <p className="text-center">
                Building schools and providing scholarships to ensure access to
                quality education.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300">
              <FaHeartbeat className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Nutrition Programs
              </h3>
              <p className="text-center">
                Daily meal programs and nutrition education for healthy
                development.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300">
              <FaTint className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Clean Water
              </h3>
              <p className="text-center">
                Installing wells and water purification systems in underserved
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">25K+</div>
              <div className="text-gray-600">Children Educated</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Meals Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Communities Reached</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Water Projects</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Founder & CEO"
              bio="Former teacher with 15 years of experience in child education programs."
              imgSrc="/src/assets/images/team1.jpg"
            />
            <TeamMember
              name="Michael Chen"
              role="Program Director"
              bio="Public health specialist focused on nutrition and clean water initiatives."
              imgSrc="/src/assets/images/team2.jpg"
            />
            <TeamMember
              name="Priya Patel"
              role="Community Outreach"
              bio="Works directly with local communities to implement our programs."
              imgSrc="/src/assets/images/team3.jpg"
            />
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-blue-50 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                BetterBlues was founded in 2010 when our founder, Sarah Johnson,
                witnessed firsthand the struggles of children in rural
                communities during her teaching years.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What began as a small initiative to provide school supplies to
                50 children has grown into an international organization
                impacting thousands of lives each year.
              </p>
              <p className="text-lg text-gray-700">
                Today, we partner with local organizations in 12 countries to
                create sustainable change through education, nutrition, and
                clean water programs.
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <img
                src="/src/assets/images/about-story.jpg"
                alt="Our story"
                className="w-full h-64 md:h-80 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// import Header from "../components/Header";
// import TeamMember from "../components/TeamMember";
// import { FaChild, FaHeartbeat, FaTint } from "react-icons/fa";

// export default function About() {
//   return (
//     <>
//       <Header />
//       <main className="container mx-auto px-4 py-12">
//         {/* Hero Section */}
//         <section className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
//             About <span className="text-blue-600">BetterBlues</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Empowering underprivileged children through education, nutrition,
//             and clean water initiatives since 2010.
//           </p>
//         </section>

//         {/* Mission Section */}
//         <section className="bg-white rounded-xl shadow-xl p-8 mb-16 transform transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
//           <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
//           <p className="text-lg text-gray-700 mb-8">
//             At BetterBlues, we believe every child deserves access to basic
//             human needs and opportunities. Our mission is to break the cycle of
//             poverty by addressing its root causes through sustainable,
//             community-driven solutions.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
//               <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-sm">
//                 <FaChild className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Child Education
//               </h3>
//               <p className="text-gray-700">
//                 Building schools and providing scholarships to ensure access to
//                 quality education.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
//               <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-sm">
//                 <FaHeartbeat className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Nutrition Programs
//               </h3>
//               <p className="text-gray-700">
//                 Daily meal programs and nutrition education for healthy
//                 development.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
//               <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-sm">
//                 <FaTint className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Clean Water
//               </h3>
//               <p className="text-gray-700">
//                 Installing wells and water purification systems in underserved
//                 communities.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Impact Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Impact</h2>
//           <div className="grid md:grid-cols-4 gap-6 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-blue-300 transition-all duration-300">
//               <div className="text-4xl font-bold text-blue-600 mb-2">25K+</div>
//               <div className="text-gray-600 font-medium">Children Educated</div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-blue-300 transition-all duration-300">
//               <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
//               <div className="text-gray-600 font-medium">Meals Served</div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-blue-300 transition-all duration-300">
//               <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
//               <div className="text-gray-600 font-medium">
//                 Communities Reached
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-blue-300 transition-all duration-300">
//               <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
//               <div className="text-gray-600 font-medium">Water Projects</div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-700 mb-8">
//             Meet Our Team
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <TeamMember
//               name="Sarah Johnson"
//               role="Founder & CEO"
//               bio="Former teacher with 15 years of experience in child education programs."
//               imgSrc="/src/assets/images/team1.jpg"
//             />
//             <TeamMember
//               name="Michael Chen"
//               role="Program Director"
//               bio="Public health specialist focused on nutrition and clean water initiatives."
//               imgSrc="/src/assets/images/team2.jpg"
//             />
//             <TeamMember
//               name="Priya Patel"
//               role="Community Outreach"
//               bio="Works directly with local communities to implement our programs."
//               imgSrc="/src/assets/images/team3.avif"
//             />
//           </div>
//         </section>

//         {/* Story Section */}
//         <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-500">
//           <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Story</h2>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <p className="text-lg text-gray-700 mb-4">
//                 BetterBlues was founded in 2010 when our founder, Sarah Johnson,
//                 witnessed firsthand the struggles of children in rural
//                 communities during her teaching years.
//               </p>
//               <p className="text-lg text-gray-700 mb-4">
//                 What began as a small initiative to provide school supplies to
//                 50 children has grown into an international organization
//                 impacting thousands of lives each year.
//               </p>
//               <p className="text-lg text-gray-700">
//                 Today, we partner with local organizations in 12 countries to
//                 create sustainable change through education, nutrition, and
//                 clean water programs.
//               </p>
//             </div>
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
//               <div className="relative bg-white p-1 rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src="/src/assets/images/about-story.jpg"
//                   alt="Our story"
//                   className="w-full rounded-lg transform group-hover:scale-105 transition duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
