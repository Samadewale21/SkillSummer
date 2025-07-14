import Container from "./container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { homepageDetails } from "@/data/homepage";

const tabData = [
  {
    value: "games",
    label: "Games",
    title: "Game Development for Kids",
    description:
      "Your child will learn to create fun, interactive games from scratch using kid-friendly programming tools. They'll understand game mechanics, character design, and problem-solving through coding.",
  },
  {
    value: "apps",
    label: "Apps",
    title: "App Creation for Young Minds",
    description:
      "We guide children through the process of building their own web applications. From concept to deployment, they'll learn UI design, functionality implementation, and basic app publishing concepts.",
  },
  {
    value: "animations",
    label: "Animations",
    title: "Animation Development",
    description:
      "Children will bring their stories to life by learning animation principles and coding animated sequences. They'll create characters, design movements, and build interactive animated stories.",
  },
  {
    value: "websites",
    label: "Websites",
    title: "Website Building",
    description:
      "Your child will learn to design and code their own websites from the ground up. They'll understand HTML, CSS, and basic JavaScript to create interactive, visually appealing web pages they can share with friends and family.",
  },
  {
    value: "debug",
    label: "AI Tools",
    title: "AI-Powered Debugging",
    description:
      "Students will learn to use cutting-edge AI tools to identify and fix coding errors. This essential skill helps them become independent problem solvers and understand how to effectively use technology to enhance their coding abilities.",
  },
];

export default function FeaturesCard() {
  return (
    <div className="w-full py-16">
      <Container>
        <div className="w-full">
          <h1 className="scroll-m-20 text-center text-myBlack text-4xl md:text-7xl font-extrabold tracking-tight text-balance leading-normal">
            We will teach your child/ward to build real:
          </h1>

          <div className="mt-12">
            <Tabs defaultValue={tabData[0].value} className="w-full">
              {/* Mobile Layout (triggers on top) */}
              <div className="block lg:hidden">
                <TabsList className="grid grid-cols-5 w-full mb-6 rounded-none">
                  {tabData.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="rounded-none"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Desktop Layout (side by side) */}
              <div className="max-w-screen-md flex flex-col lg:flex-row items-stretch justify-center gap-2 mx-auto">
                {/* Left side triggers for desktop */}
                <div className="hidden lg:block w-full lg:w-1/5">
                  <TabsList className="flex flex-col space-y-2 h-full rounded-none">
                    {tabData.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="justify-start px-4 py-3 text-left rounded-none w-full"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-4/5">
                  {tabData.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div className="bg-white p-6 md:p-8 rounded-none shadow-lg h-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-myBlack mb-4">
                          {tab.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6">
                          {tab.description}
                        </p>
                        <a
                          href={homepageDetails?.whatsApp?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit bg-myBlack text-white px-3 py-3 rounded-none text-nowrap flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
                        >
                          <FaWhatsapp size={28} />
                          {homepageDetails?.whatsApp?.text}
                        </a>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}
