import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CustomLink from "../Extras/CustomLink";
import { currentUser } from "@clerk/nextjs";

const PricingTable = async () => {
  const user = await currentUser();
  // Define an array of pricing options
  // A close icon will render a red cross and a Done icon will give a green tick
  // Just make changes to the pricingOptions array
  const pricingOptions = [
    {
      title: "Current",
      per: "/month",
      prices: [
        {
          price: "0",
          priceType: "zeroMonthly",
        },
      ],
      description:
        "Your current situation where the idea is nowhere near Launch",
      features: [
        {
          text: "Creating from scratch",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Unorganized flow of work",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Searching for resources",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Launch: Delayed",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Targets: Missed",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "noPlan",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Innovator",
      per: "/month",
      prices: [
        {
          price: "25",
          // priceType: "BasicMonthly",
          priceType: "monthly",
        },
      ],
      description: "Take off with us and build your SaaS venture at warp speed",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Unavailable",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "monthlyy",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Pioneer",
      per: "/month",
      prices: [
        {
          price: "50",
          // priceType: "AdvanceMonthly",
          priceType: "monthly",
        },
      ],
      description:
        "If you're in it for the long haul, this plan is tailor-made for you.",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Available",
          Icon: <DoneIcon className="text-green-400" />,
        },
      ],
      id: "annually",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
  ];

  return (
    <section className="bg-gray-900 py-24 lg:py-32">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div
          className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"
          id="pricing-section"
        >
          <h2 className="text-3xl sm:text-4xl p-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
            Pricing
          </h2>
          <p className="mb-5 font-light text-gray-300 sm:text-xl">
            Buy once, Launch forever
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col justify-center p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border border-gray-700 shadow text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{option.title}</h3>
              <p className="font-light text-gray-300 sm:text-lg">
                {option.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  ${option.prices[0].price}
                  {/* Monthly pricing? just uncomment this span below */}
                  <span className="text-xl text-gray-400">{option.per}</span>
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    {feature.Icon} {/* Use the predefined icon */}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <CustomLink
                  locationID={option.id}
                  modelType={option.prices[0].priceType}
                  user={user}
                  display={option.buttonText}
                  // className={`text-white bg-primary-700 ${option.buttonDisplay} font-medium rounded-lg w-fit mx-auto text-sm px-20 py-3 text-center`}
                  className={`text-white bg-primary-600 ${option.buttonDisplay} font-medium w-4/5 rounded-lg text-sm px-5 py-2.5 text-center`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
