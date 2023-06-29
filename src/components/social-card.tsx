import * as React from "react";
import { SocialDeets } from "./social-deets";
import { Card, CardContent, CardHeader, CardTitle } from "~/shadcn/ui/card";

export function SocialCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
            Why choose{" "}
            <span className="dark:text text-brand-300"> Scissors</span>
          </h2>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
