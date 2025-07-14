// about-us.tsx
import Image from "next/image";
import { Globe, Linkedin, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./container";
import { aboutUsData } from "@/data/aboutDetails";

export function AboutUs() {
  const { founder, content } = aboutUsData;

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "Globe":
        return (
          <Globe className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
        );
      case "Linkedin":
        return (
          <Linkedin className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
        );
      case "Facebook":
        return (
          <Facebook className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-16 bg-bg">
      <Container>
        <div className="max-w-4xl mx-auto md:px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
            {/* Founder Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-full h-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={866}
                  height={1080}
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold">{founder.name}</h3>
              <p className="text-gray-600">{founder.title}</p>

              <div className="flex gap-4 mt-4">
                {founder.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {renderSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:text-start md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
              <div className="prose prose-lg text-gray-600">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={content.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 mx-auto bg-myBlack text-white px-3 py-3 rounded-none text-nowrap flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
              >
                <FaWhatsapp size={28} />
                {content.cta.text}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
