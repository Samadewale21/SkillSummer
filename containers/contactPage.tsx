import { ContactUs } from "@/components/contact";
import Direction from "@/components/direction";

export default function ContactPage() {
  return (
    <div className="w-full bg-bg min-h-screen">
      <ContactUs />
      <Direction left={{ title: "About us", href: "/about" }} />
    </div>
  );
}
