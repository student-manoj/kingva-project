import { ContactData } from "@/utils/ContactData";
import ConatctFrom from "./ConatctFrom";
import ContactCard from "./ContactCard";
import Heading from "./Heading";

const ContactSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="Contact Me"
            titleName="Get In Touch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 pt-16">
            <div className="grid md:grid-cols-2 gap-6">
              {ContactData.slice(0.4).map((val) => (
                <ContactCard key={val.id} {...val} />
              ))}
            </div>
            <ConatctFrom />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
