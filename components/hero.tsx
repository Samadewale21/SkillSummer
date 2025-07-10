import Image from "next/image";
import Container from "@/components/container";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const hero = "/assets/hero.png";

export default function Hero() {
  return (
    <section className="py-12 px-6 md:py-24 bg-bg min-h-screen">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
            Point them young to the right direction
          </h1>
          <p className="text-myBlack font-extralight text-lg mb-8">
            Learn how to code efficiently and create apps and games that work.
            Consult with best experts to apply skills in action.
          </p>
          <div className="w-full flex items-center gap-4">
            <a
              href="https://wa.me/1234567890"
              className="bg-myBlack text-white px-3 py-3 rounded-none flex items-center gap-2 border-myBlack hover:border hover:text-myBlack hover:bg-transparent"
            >
              <FaWhatsapp size={28} />
              Get Started
            </a>
            <a
              href="https//:youtube.com"
              className="flex items-center gap-2 text-black border border-myBlack p-3 hover:bg-myBlack hover:text-white transition-colors"
            >
              <FaYoutube size={28} />
              Watch video
            </a>
          </div>
        </div>

        {/* Visual content */}
        <div className="md:w-1/2 relative">
          <Image
            src={hero}
            width={2245}
            height={1587}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
