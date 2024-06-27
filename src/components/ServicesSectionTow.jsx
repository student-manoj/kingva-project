import { ServicesDatas } from "@/utils/ServicesData";
import Heading from "./Heading";
import ServicesCard from "./ServicesCard";

const ServicesSectionTow = () => {
  return (
    <>
      <div className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <Heading
            title="What We Do"
            titleName="Our Services"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-16">
            {ServicesDatas.slice(0, 8).map((val) => (
              <ServicesCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSectionTow;
