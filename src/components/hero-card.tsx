import * as React from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "~/shadcn/ui/card";

export function HeroCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <span>
            <Image alt="cimage" src={"/Frame.png"} width={384} height={80} />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        Seamlessly transform your long URLs into concise and shareable links
        with just few clicks.
      </CardContent>
    </Card>
  );
}
