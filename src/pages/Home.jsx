import Header from "../components/Header";
import StatsSection from "../components/StatsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-10 py-12">
        <HeroSection />
        <StatsSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
        Ensure Better Life For Every
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="relative group">
          <img
            src="/src/assets/images/eduction.jpg"
            alt="Child studying"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:border-2 hover:border-gray-400  hover:shadow-2xl transition-shadow duration-300 group-hover:opacity-85 transition"
          />

          <div className="text-sm text-gray-600 p-6 bg-blue-50 rounded-lg">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Ensure Education For Every Poor Children
            </p>
            <p>
              According to UNESCO, 258 million children and youth are out of
              school worldwide.
            </p>
            <p className="mt-2">
              In low-income countries, only 63% of children complete primary
              education.
            </p>
            <p className="mt-2">
              Poverty remains the biggest barrier to education, with children
              from the poorest households 8 times more likely to be out of
              school.
            </p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="/src/assets/images/food-child.jpg"
            alt="Hungry child"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:border-2 hover:border-gray-400  hover:shadow-2xl transition-shadow duration-300 group-hover:opacity-85 transition"
          />

          <div className="text-sm text-gray-600 p-6 bg-blue-50 rounded-lg">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Providing Healthy Food For The Children
            </p>
            <p>
              WHO reports that 45% of deaths among children under 5 are linked
              to undernutrition.
            </p>
            <p className="mt-2">
              149 million children under 5 suffer from stunted growth due to
              chronic malnutrition.
            </p>
            <p className="mt-2">
              Every day, nearly 15,000 children die from hunger-related causes -
              one child every 6 seconds.
            </p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="/src/assets/images/water-supply.jpg"
            alt="Thirsty child"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:border-2 hover:border-gray-400  hover:shadow-2xl transition-shadow duration-300 group-hover:opacity-85 transition"
          />

          <div className="text-sm text-gray-600 p-6 bg-blue-50 rounded-lg">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Supply Drinking Water For The People
            </p>
            <p>
              WHO estimates that 2.2 billion people lack access to safely
              managed drinking water services.
            </p>
            <p className="mt-2">
              Contaminated water causes 485,000 diarrheal deaths each year,
              mostly in children under 5.
            </p>
            <p className="mt-2">
              In developing countries, women and girls spend 200 million hours
              daily collecting water.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
