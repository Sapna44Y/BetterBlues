import StatsCard from "./StatsCard";
import hungeryChild from "../assets/images/hungry-child.jpg";
import thirstyChild from "../assets/images/thirsty-child.jpg";
import eductionChild from "../assets/images/education-child.jpg";
export default function StatsSection() {
  return (
    <section className="my-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how your contributions are making a difference in children's lives
          through education, nutrition, and clean water initiatives worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <StatsCard
          percentage={70}
          raised="$20,000"
          goal="$35,000"
          title="Education Fund"
          description="Helping 1,200+ children access quality education annually"
          imageSrc={eductionChild}
        />
        <StatsCard
          percentage={25}
          raised="$20,000"
          goal="$35,000"
          title="Nutrition Program"
          description="Providing 5,000+ meals monthly to malnourished children"
          imageSrc={hungeryChild}
        />
        <StatsCard
          percentage={50}
          raised="$20,000"
          goal="$35,000"
          title="Clean Water Initiative"
          description="Bringing clean water to 15 villages this year"
          imageSrc={thirstyChild}
        />
      </div>
    </section>
  );
}
