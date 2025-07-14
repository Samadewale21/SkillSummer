import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import Container from "./container";
import { homepageDetails } from "@/data/homepage";
import { FaWhatsapp } from "react-icons/fa";

const contactOptions = [
  {
    label: "Email",
    icon: <Mail className="h-4 w-4" />,
    action: "mailto:bootcamp@skillgrid.ng",
    variant: "outline",
  },
  {
    label: "WhatsApp",
    icon: <MessageSquare className="h-4 w-4" />,
    action: "https://wa.me/+2349050156069",
    variant: "outline",
  },
  {
    label: "Call",
    icon: <Phone className="h-4 w-4" />,
    action: "tel:+2349050156069",
    variant: "outline",
  },
];

export function ContactUs() {
  return (
    <div className="w-full py-16 bg-bg">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="scroll-m-20 text-center text-myBlack text-4xl md:text-7xl font-extrabold tracking-tight text-balance leading-normal">
            Let's get straight to the point!
          </h1>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={homepageDetails?.whatsApp?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-myBlack text-white px-3 py-3 rounded-none text-nowrap flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
            >
              <FaWhatsapp size={28} />
              {homepageDetails?.whatsApp?.text}
            </a>

            {contactOptions.map((option, index) => (
              <a
                href={option.action}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-myBlack text-white px-3 py-3 rounded-none text-nowrap flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
              >
                {option.icon}
                {option.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
