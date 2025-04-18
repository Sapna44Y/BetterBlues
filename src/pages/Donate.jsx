import Header from "../components/Header";
import DonationForm from "../components/DonationForm";

export default function Donate() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 py-12 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center">
            Make a Donation
          </h1>
          <p className="text-gray-600 mb-8 text-center px-4">
            Your contribution helps us provide education, food, and clean water
            to children in need.
          </p>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <DonationForm />
          </div>
        </div>
      </main>
    </>
  );
}
