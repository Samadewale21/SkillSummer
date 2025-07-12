import Container from "./container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const tabData = [
  {
    value: "games",
    label: "Build Games",
    title: "Game Development for Kids",
    description:
      "Your child will learn to create fun, interactive games from scratch using kid-friendly programming tools. They'll understand game mechanics, character design, and problem-solving through coding.",
    cta: "Get Started - Build Your First Game",
  },
  {
    value: "apps",
    label: "Build Apps",
    title: "App Creation for Young Minds",
    description:
      "We guide children through the process of building their own mobile applications. From concept to deployment, they'll learn UI design, functionality implementation, and basic app publishing concepts.",
    cta: "Get Started - Create Your First App",
  },
  {
    value: "animations",
    label: "Build Animations",
    title: "Animation Development",
    description:
      "Children will bring their stories to life by learning animation principles and coding animated sequences. They'll create characters, design movements, and build interactive animated stories.",
    cta: "Get Started - Animate Your First Story",
  },
  {
    value: "websites",
    label: "Build Websites",
    title: "Website Building",
    description:
      "Your child will learn to design and code their own websites from the ground up. They'll understand HTML, CSS, and basic JavaScript to create interactive, visually appealing web pages they can share with friends and family.",
    cta: "Get Started - Build Your First Website",
  },
  {
    value: "debug",
    label: "Debug with AI Tools",
    title: "AI-Powered Debugging",
    description:
      "Students will learn to use cutting-edge AI tools to identify and fix coding errors. This essential skill helps them become independent problem solvers and understand how to effectively use technology to enhance their coding abilities.",
    cta: "Get Started - Learn AI Debugging",
  },
];

export default function FeaturesCard() {
  return (
    <div className="w-full py-16 lg:py-24">
      <Container>
        <div className="w-full">
          <h1 className="scroll-m-20 text-center text-myBlack text-4xl md:text-7xl font-extrabold tracking-tight text-balance leading-normal">
            We will teach your child/ward to do the following:
          </h1>

          <div className="mt-12">
            <Tabs defaultValue={tabData[0].value} className="w-full">
              {/* Mobile Layout (triggers on top) */}
              <div className="block lg:hidden">
                <TabsList className="grid grid-cols-3 w-full gap-2">
                  {tabData.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Desktop Layout (side by side) */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side triggers for desktop */}
                <div className="hidden lg:block w-full lg:w-1/4">
                  <TabsList className="flex flex-col space-y-2 h-full">
                    {tabData.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="justify-start px-4 py-3 text-left"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-3/4">
                  {tabData.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-myBlack mb-4">
                          {tab.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6">
                          {tab.description}
                        </p>
                        <Button className="bg-primary hover:bg-primary-dark">
                          {tab.cta}
                        </Button>
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
