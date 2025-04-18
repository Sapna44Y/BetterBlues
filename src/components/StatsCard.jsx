import DonationButton from "./DonationButton";
import "./StatsCard.css";

export default function StatsCard({
  percentage,
  raised,
  goal,
  title,
  imageSrc,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Raised {raised}</span>
          <span>Goal {goal}</span>
        </div>
        <div className="text-right text-xs text-gray-500 mb-4">
          {percentage}%
        </div>
        <DonationButton />
      </div>
    </div>
  );
}
