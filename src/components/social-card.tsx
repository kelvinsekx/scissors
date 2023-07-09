import * as React from "react";
import { Card, CardContent } from "~/shadcn/ui/card";

export function SocialCard() {
  return (
    <div>
      <Card className="h-52">
        <CardContent>
          <div>
            <h2 className="text-3xl text-base font-bold text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
              Why choose{" "}
              <span className="dark:text text-brand-300"> Scissors</span>
            </h2>
          </div>
          <div>
            <p className="text-s h-48 w-96 break-words">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
