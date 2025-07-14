import Direction from "@/components/direction";
import FeaturesCard from "@/components/featuresCard";

export default function FeaturesPage() {
  return (
    <div className="bg-bg min-h-screen">
      <FeaturesCard />
      <Direction
        left={{ title: "Home", href: "/" }}
        right={{ title: "Curriculum", href: "/curriculum" }}
      />
    </div>
  );
}
