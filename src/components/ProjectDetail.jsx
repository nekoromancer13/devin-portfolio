// import React from "react";
// import { useParams } from "react-router-dom";
// import { projects } from "../constants";

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = projects[parseInt(id)];

//   if (!project) return <p className="text-white p-8">Project not found.</p>;

//   return (
//     <div className="p-8 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-8 text-center">{project.name}</h2>

//       <p className="text-lg mb-6">{project.description}</p>

//       {/* Images with captions */}
//       {project.images?.map((img, index) => (
//         <div key={index} className="mb-8">
//           <img
//             src={img.src}
//             alt={img.caption || `Image ${index + 1}`}
//             className="w-full max-w-xl rounded-xl mb-2 mx-auto"
//           />
//           {img.caption && (
//             <p className="text-sm text-center text-gray-300">{img.caption}</p>
//           )}
//         </div>
//       ))}

//       <h4 className="text-xl font-semibold mb-2">Technologies:</h4>
//       <ul className="list-disc list-inside text-secondary mb-6">
//         {project.tags.map((tag) => (
//           <li key={tag.name}>{tag.name}</li>
//         ))}
//       </ul>

//       <a
//         href={project.source_code_link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
//       >
//         View Source Code
//       </a>
//     </div>
//   );
// };

// export default ProjectDetail;


import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[parseInt(id)];

  if (!project) return <p className="text-white p-8">Project not found.</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-20 p-8 text-white min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-8 text-center pt-12 text-[#2b2b38]">{project.name}</h2>

      <p className="text-lg text-center mb-6 text-[#2b2b38]">{project.description}</p>

      {/* 🔹 Video Section */}
      {project.video && (
        <div className="mb-10">
          <div className="relative w-full max-w-3xl mx-auto aspect-video">
            <video
              src={project.video}
              controls
              className="w-full h-full rounded-xl object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm text-center text-[#2b2b38] mt-2">
            Project Demo Video
          </p>
        </div>
      )}

      {/* 🔹 Images Grid Section */}
      {project.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {project.images.map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.caption || `Image ${index + 1}`}
                className="w-full h-auto rounded-xl"
              />
              {img.caption && (
                <p className="text-sm text-center text-[#2b2b38] mt-1">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Tags */}
      <h4 className="text-[#2b2b38] font-semibold mb-2">Description:</h4>
      <ul className="list-disc list-inside text-secondary mb-6">
        {project.tags.map((tag) => (
          <li key={tag.name}>{tag.name}</li>
        ))}
      </ul>

      {/* 🔹 Source Code Button */}
      <a
        href={project.source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
      >
        View Source
      </a>
    </motion.div>
  );
};

export default ProjectDetail;
