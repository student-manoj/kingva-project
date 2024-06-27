import { CustmerReviewData } from "@/utils/CustmerReviewData";
import CustmerReviewCard from "./CustmerReviewCard";

const CustmerReviewSection = () => {
  return (
    <>
      <div className="bg-[#131313]">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 py-24 ">
            {CustmerReviewData.slice(0, 4).map((val) => (
              <CustmerReviewCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustmerReviewSection;
