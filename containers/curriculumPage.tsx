import { CurriculumAccordion } from "@/components/curriculum";
import Direction from "@/components/direction";

export default function CurriculumPage() {
  return (
    <div className="bg-bg min-h-screen w-full">
      <CurriculumAccordion />
      <Direction
        left={{ title: "Features", href: "/features" }}
        right={{ title: "About us", href: "/about" }}
      />
    </div>
  );
}
