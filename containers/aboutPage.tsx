import { AboutUs } from "@/components/about";
import Direction from "@/components/direction";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-bg">
      <AboutUs />
      <Direction
        left={{ title: "Curriculum", href: "/curriculum" }}
        right={{ title: "Contact us", href: "/contact" }}
      />
    </div>
  );
}
