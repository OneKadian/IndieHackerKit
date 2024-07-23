import Elon from "../../Images/elon.jpg";
import Image from "next/image";

const SingleTestimonial = () => {
  return (
    <div className="flex justify-center h-max mb-8 lg:mt-4">
      <div className="flex justify-center mt-8 h-max w-max rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
        {/* The element */}
        <div className="sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm font-semibold leading-6 text-gray-100 ">
            "Turns projects into products" - Brian
          </div>
        </div>
        <div className="avatar h-max rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
          <div className="w-8 h-8 rounded-full">
            <Image src={Elon} height={300} width={300} />
          </div>
        </div>
        {/* <RedoIcon className="ml-4" /> */}
        {/* <ReplyIcon className="ml-4 rotate-90" /> */}
        {/* <TurnLeftIcon className="ml-4 rotate-90" /> */}
        {/* <div className="flex justify-center items-center h-max">
        <ShortcutIcon className="ml-4 rotate-90" />
      </div> */}
      </div>
    </div>
  );
};

export default SingleTestimonial;
