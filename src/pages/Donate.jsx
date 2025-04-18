import Header from "../components/Header";
import DonationForm from "../components/DonationForm";

export default function Donate() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-10 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Make a Donation
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <DonationForm />
        </div>
      </main>
    </>
  );
}
