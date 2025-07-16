import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Container from "./container";

export function Badges() {
  return (
    <Container>
      <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
        <div className="flex w-full flex-wrap gap-2">
          <Badge className="p-2 px-3 bg-myBlack">Learn to build:</Badge>
          <Badge className="p-2 px-3 bg-myPrimary" variant="secondary">
            Apps
          </Badge>
          <Badge className="p-2 px-3" variant="destructive">
            Games
          </Badge>
          <Badge className="p-2 px-3 bg-white" variant="outline">
            Websites
          </Badge>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="p-2 px-3 bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon />
            Verified
          </Badge>
          <Badge className="h-10 min-w-10 rounded-full px-1 font-mono tabular-nums">
            8
          </Badge>
          <Badge
            className="h-10 min-w-10 rounded-full px-1 font-mono tabular-nums"
            variant="destructive"
          >
            99
          </Badge>
          <Badge
            className="h-10 min-w-10 rounded-full px-1 font-mono tabular-nums bg-white"
            variant="outline"
          >
            20+
          </Badge>
        </div>
      </div>
    </Container>
  );
}
