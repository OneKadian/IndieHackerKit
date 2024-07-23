import FlagIcon from "@mui/icons-material/Flag";
import SpeedIcon from "@mui/icons-material/Speed";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const stepArray = [
  {
    Icon: <FlagIcon />,
    Heading: "Step 1: Grab Your Keys",
    Description:
      "Once you have the boilerplate and resources, half the work is already done, Follow the instructions, grab and put your keys to get the engine started.",
  },
  {
    Icon: <SpeedIcon />,
    Heading: "Step 2: Execute Your Idea",
    Description:
      "Run the AI prompt for copywriting, prepare all the creatives using templates, and plan your launch with the resource sheet.",
  },
  {
    Icon: <RocketLaunchIcon />,
    Heading: "Step 3: Validate and Scale",
    Description:
      "Deploy your product and send it to your target market to validate your idea, and iterate or scale based on the response.",
  },
];
const Steps = () => {
  return (
    <div class=" bg-gray-900 py-8">
      <div class="text-center">
        {/* <h2 class="text-4xl sm:text-5xl font-semibold sm:leading-[55px] sm:tracking-tight"> */}
        <h2 class="text-3xl p-2 lg:text-4xl font-semibold text-white sm:leading-[55px] sm:tracking-tight">
          Launch in 3 Steps
        </h2>
        <p class="text-gray-300 text-xl p-2">
          Building products doesn't get any simpler than this
        </p>
      </div>
      <div class="mx-4 my-8 sm:mx-8 sm:my-10">
        <div class="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 item">
          {stepArray.map((step) => (
            <div class="flex flex-col p-8 bg-gray-800 rounded-xl border border-gray-700">
              <div class="flex items-center pb-4">
                <span class="rounded-full mr-5 p-3 bg-gray-200 text-black">
                  {step.Icon}
                </span>
                <h3 class="text-xl font-medium text-white">{step.Heading}</h3>
              </div>
              <div class="mt-3 text-gray-300">
                <p>{step.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
