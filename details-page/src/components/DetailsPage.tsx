import ActiveButtons from "./ActiveButtons";
import TitleCard from "./TitleCard";
import ContentCard from "./ContentCard";
import InactiveButtons from "./InactiveButtons";
import SignInOverlay from "./SignInOverlay";
import { useState } from "react";

import {
  faUserCheck,
  faFileContract,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const DetailsPage = () => {
  const [isLoggedIn] = useState(false); // logged in status

  const contentData = [
    {
      title: "Key Eligibility Criteria",
      content: [
        "Be a dependent child of an appropriate student or work visa holder.",
        "If parent is a student visa holder, they must be studying a qualification that qualified for dependent visas.",
        "Be under 19 years old, reliant on your parent(s) for financial support and have no children of your own.",
        "The parent muct have the legal right to remove you from the home country",
        "Meet health and character requirements.",
      ],
      icon: faUserCheck,
    },
    {
      title: "Key Documents Required",
      content: [
        "Be a dependent child of an appropriate student or work visa holder.",
        "If parent is a student visa holder, they must be studying a qualification that qualified for dependent visas.",
        "Be under 19 years old, reliant on your parent(s) for financial support and have no children of your own.",
        "The parent muct have the legal right to remove you from the home country",
        "Meet health and character requirements.",
      ],
      icon: faFileContract,
    },
    {
      title: "Who Can Be Included in Application",
      content: [
        "Be a dependent child of an appropriate student or work visa holder.",
        "If parent is a student visa holder, they must be studying a qualification that qualified for dependent visas.",
        "Be under 19 years old, reliant on your parent(s) for financial support and have no children of your own.",
        "The parent muct have the legal right to remove you from the home country",
        "Meet health and character requirements.",
      ],
      icon: faUsers,
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto p-5 relative min-h-screen">
        <TitleCard
          country="New Zealand"
          flag="/flags/nz.png"
          tags={["New Zealand", "Study", "Temporary", "< 19 years"]}
          title="Dependent Child Student Visa"
          description="For dependent children of student or work visa holders to study at an elementary or secondary school in New Zealand."
        />

        <ActiveButtons />

        {/* dynamic content cards, info pulled from contentData array - change to backend? */}
        {contentData.map((data, index) => (
          <ContentCard
            key={index}
            title={data.title}
            content={data.content}
            icon={data.icon}
          />
        ))}
        <SignInOverlay isLoggedIn={isLoggedIn} />
        <InactiveButtons />
      </div>
    </>
  );
};

export default DetailsPage;
