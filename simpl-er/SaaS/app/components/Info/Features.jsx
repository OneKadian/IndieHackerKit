import Image from "next/image";
import nextLogo from "../../Images/NextJSLogo.png";
import stripeLogo from "../../Images/stripeLogo.png";
import supabaseLogo from "../../Images/supa.png";
import tailwindLogo from "../../Images/TailwindCSSLogo.png";
import mailLogo from "../../Images/mailLogo.png";
import vercelLogo from "../../Images/vercelLogo.png";
import notionLogo from "../../Images/notionLogo.png";
import GoogleSheets from "../../Images/GoogleSheets.png";

// Show all your features with this section, I use it to show my Tech stack

const Features = () => {
  const FeatureCopy = {
    featureHeading: "Designed for Speed",
    featureDescription: "Unleash innovation, save time, and launch swiftly",
  };

  const stack = [
    {
      Image: nextLogo,
      Heading: "Next JS for Frontend",
      Description:
        "The new generation web framework for the Frontend and environment ",
    },
    {
      Image: stripeLogo,
      Heading: "Stripe for Payments",
      Description:
        "Cutting-edge payment platform for seamless transactions + webhooks ",
    },
    {
      Image: supabaseLogo,
      Heading: "Supabase for Backend",
      Description:
        "Next-gen open-source database with real time updates for your SaaS",
    },
    {
      Image: tailwindLogo,
      Heading: "Tailwind CSS for Styling",
      Description:
        "Utility-first CSS framework for rapid and responsive development",
    },
    {
      Image: notionLogo,
      Heading: "Notion for management",
      Description:
        "Notion Template and pages to manage your complete product workflow",
    },
    {
      Image: GoogleSheets,
      Heading: "Sheet for resources",
      Description:
        "Curated list of tools and articles to help you save search time and scale",
    },
  ];

  return (
    <section class="bg-gray-900">
      <div
        class="py-24 px-4 mx-auto max-w-screen-xl lg:px-6 lg:py-32"
        id="stack-section"
      >
        <div class="max-w-screen-md mb-8 p-2 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
            {FeatureCopy.featureHeading}
          </h2>
          <p class="text-gray-300 sm:text-xl">
            {FeatureCopy.featureDescription}
          </p>
        </div>
        {/* Collection */}
        <div class="space-y-8 p-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {stack.map((st) => (
            <div>
              <div class="flex overflow-hidden justify-center items-center mb-4 w-10 border border-white h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <Image
                  src={st.Image}
                  alt="nextJSlogo"
                  className="w-full h-full overflow-hidden"
                  width={40}
                  height={40}
                />
              </div>
              <h3 class="text-gray-300 mb-2 text-xl font-bold">{st.Heading}</h3>
              <p class="text-gray-300">{st.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
