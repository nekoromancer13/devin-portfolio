import React from "react";

// Sample certificate data
const certificates = [
  {
    title: "Google Data Analytics",
    image: "/certificates/google-data-analytics.jpg",
    description: "Completed Google’s Data Analytics Professional Certificate.",
  },
  {
    title: "Meta Front-End Developer",
    image: "/certificates/meta-frontend.jpg",
    description: "Built responsive UIs and learned React in Meta’s program.",
  },
  {
    title: "AWS Cloud Practitioner",
    image: "/certificates/aws-cloud.jpg",
    description: "Gained foundational AWS knowledge through certification.",
  },
  {
    title: "Machine Learning - Stanford",
    image: "/certificates/ml-stanford.jpg",
    description: "Finished Andrew Ng’s ML course on Coursera.",
  },
];

const Certificates = ({ certificates }) => {
  return (
    <div className="min-h-screen pt-24 px-8">
      <h2 className="text-white text-3xl font-bold mb-6">
        Certificates & Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-tertiary p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-white text-xl font-semibold mt-4">
              {cert.title}
            </h3>
            <p className="text-secondary mt-2 text-sm">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
