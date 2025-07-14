import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./container";

interface DirectionProps {
  title: string;
  href: string;
}

interface DirectionComponentProps {
  left?: DirectionProps;
  right?: DirectionProps;
}

export default function Direction({ left, right }: DirectionComponentProps) {
  return (
    <Container>
      <div className="flex items-center justify-center mx-auto w-full mt-16 py-12 gap-4">
        {left && (
          <Button
            asChild
            variant="outline"
            className="bg-myBlack text-white border gap-2 py-6"
          >
            <Link href={left.href}>
              <ArrowLeft className="h-4 w-4" />
              <span className="scroll-m-20 text-lg font-medium tracking-tight px-2">
                {left.title}
              </span>
            </Link>
          </Button>
        )}

        {right && (
          <Button
            asChild
            variant="outline"
            className="bg-myBlack border text-white gap-2 py-6"
          >
            <Link href={right.href}>
              <span className="scroll-m-20 text-lg font-medium tracking-tight px-2">
                {right.title}
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </Container>
  );
}
