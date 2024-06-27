import { TeamsData } from "@/utils/TeamsData";
import Heading from "./Heading";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div>
            <Heading
              title="Our Team"
              titleName="To Our Protifo Teammember"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit
              Curabitur fermentum sem vitae dolor porta quis auctor velit
              varius"
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 py-16">
            {TeamsData.slice(0, 4).map((value) => (
              <TeamCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
