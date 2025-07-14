import { Badges } from "@/components/badge";
import Direction from "@/components/direction";
import Hero from "@/components/hero";

export default function Homepage() {
  return (
    <div className="bg-bg min-h-screen">
      <Hero />
      <Badges />
      <Direction right={{ title: "Features", href: "/features" }} />
    </div>
  );
}
