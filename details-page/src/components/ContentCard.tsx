import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContentCardProps {
  title: string;
  content: string | string[];
  icon: IconProp;
}

const ContentCard = ({ title, content, icon }: ContentCardProps) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-8 mt-3 mb-6">
        <h3 className="text-gray-900 font-semibold text-xl pb-3">
          <FontAwesomeIcon icon={icon} className="mr-3"/>

          {title}
        </h3>
        {/* conditional rendering for content */}
        {Array.isArray(content) ? (
          // if content is array display as list
          <ul className="list-disc pl-6 space-y-2">
            {content.map((item, index) => (
              // loop through each and render as list item
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // render as paragraph if single string
          <p className="text-gray-700 text-sm mt-2 italic">{content}</p>
        )}
      </div>
    </>
  );
};

export default ContentCard;
