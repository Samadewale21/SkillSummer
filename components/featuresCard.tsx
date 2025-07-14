import Container from "./container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaWhatsapp } from "react-icons/fa";
import { homepageDetails } from "@/data/homepage";
import { tabData } from "@/data/featuresDetails";

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
