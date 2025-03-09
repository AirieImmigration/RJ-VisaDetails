interface TitleCardProps {
  country: string;
  flag: string;
  tags: string[];
  title: string;
  description: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  country,
  flag,
  tags,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden mb-4 flex flex-col">
      <div className="relative h-30">
        <img
          src={flag}
          alt={`${country} flag`}
          className="absolute inset-0 w-full h-full object-cover opacity-20 " // image as background with opacity
        />
        <div className="absolute inset-0 z-50 flex flex-col justify-center items-start p-6 text-black">
            {/* title of visa */}
          <h2 className="text-3xl font-semibold pb-2">{title}</h2>
          {/* country */}
          <h3 className="text-lg font-medium italic text-[#5e5e5e]">
            {country}
          </h3>
        </div>
      </div>

      {/* content below flag/title */}
      <div className="py-4 px-6">
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 pb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-300 text-gray-700 font-medium px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
