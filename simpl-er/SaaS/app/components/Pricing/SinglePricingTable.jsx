import { currentUser } from "@clerk/nextjs";
import SinglePriceToggler from "./SinglePriceToggler";

const SinglePricingTable = async () => {
  const user = await currentUser();

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <SinglePriceToggler userStatus={user} />
    </div>
  );
};

export default SinglePricingTable;
