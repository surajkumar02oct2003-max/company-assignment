import React from 'react'

const WorkCard = ({ image, title, tags, active }) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] md:h-[320px] lg:h-[380px] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-5 py-2 rounded-full border text-sm tracking-wider uppercase
              ${
                active === tag
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-gray-400 text-white"
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default WorkCard
