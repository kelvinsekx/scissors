import React from "react";

interface Props {
  children: React.ReactElement;
}
export function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">{children}</div>
  );
}
