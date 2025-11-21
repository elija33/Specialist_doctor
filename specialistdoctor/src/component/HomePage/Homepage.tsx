import React from "react";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop")',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-100 mb-12">
          Connect with healthcare specialists
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => alert("Find Your Specialist clicked")}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Find Your Specialist DOCTOR
          </button>

          <button
            onClick={() => alert("Become a Member clicked")}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
