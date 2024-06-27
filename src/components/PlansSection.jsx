import { PlansData } from "@/utils/PlansData";
import Heading from "./Heading";
import Planscard from "./Planscard";

const PlansSection = () => {
  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="">
            <Heading
              title="Pricing Plans"
              titleName="Our Pricing Plan"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-16">
            {PlansData.slice(0, 3).map((val) => (
              <Planscard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansSection;
