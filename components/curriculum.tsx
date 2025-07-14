import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Container from "./container";
import { FaWhatsapp } from "react-icons/fa";
import { homepageDetails } from "@/data/homepage";

const weekData = [
  {
    value: "week1",
    title: "Week 1: HTML Fundamentals",
    focus: "Grasp the basics of web pages, structure, and markup",
    highlights: [
      "HTML document structure",
      "Text formatting & lists",
      "Links & images",
      "Tables & forms",
      "Build a personal profile page",
    ],
  },
  {
    value: "week2",
    title: "Week 2: CSS Styling",
    focus: "Style HTML content visually and responsively",
    highlights: [
      "CSS selectors & properties",
      "Box model & backgrounds",
      "Layout fundamentals",
      "Hover effects & form styling",
      "Style your profile page",
    ],
  },
  {
    value: "week3",
    title: "Week 3: JavaScript Basics",
    focus: "Add interactivity with logic, variables, and events",
    highlights: [
      "Variables & data types",
      "Functions & events",
      "DOM manipulation",
      "Loops & arrays",
      "Build an interactive calculator",
    ],
  },
  {
    value: "week4",
    title: "Week 4: Final Project",
    focus: "Build & present a complete web project",
    highlights: [
      "Project planning",
      "HTML structure",
      "CSS styling",
      "JavaScript features",
      "Presentations & certificates",
    ],
  },
];

export function CurriculumAccordion() {
  return (
    <div className="bg-bg w-full py-16">
      <Container>
        <div className="mx-auto">
          <div className="flex flex-col items-start justify-between mx-auto p-2 md:flex-row gap-6">
            <h1 className="scroll-m-20 text-center lg:text-start text-myBlack text-4xl lg:text-6xl font-extrabold tracking-tight text-balance leading-normal">
              A breakdown of your child's 4weeks with us!
            </h1>

            <Accordion type="single" collapsible className="w-full">
              {weekData.map((week) => (
                <AccordionItem key={week.value} value={week.value}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{week.title}</h3>
                      <p className="text-sm text-gray-600 font-normal">
                        {week.focus}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {week.highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={homepageDetails?.whatsApp?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit bg-myBlack text-white px-2 py-1 rounded-none text-nowrap flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
                    >
                      <FaWhatsapp size={28} />
                      {homepageDetails?.whatsApp?.text}
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              🏆 Final Project Array
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personal Portfolio Website</li>
              <li>Interactive Quiz App</li>
              <li>Color Theme Toggler</li>
              <li>Budget Calculator</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
