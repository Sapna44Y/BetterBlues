export default function TeamMember({ name, role, bio, imgSrc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center h-full flex flex-col items-center">
      <div className="relative group mb-4">
        <img
          src={imgSrc}
          alt={name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white shadow-lg group-hover:border-blue-300 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-bold text-blue-800">{name}</h3>
      <p className="text-blue-600 mb-3">{role}</p>
      <p className="text-gray-600 flex-grow">{bio}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
        View Profile →
      </button>
    </div>
  );
}
