import {
  Menubar as ShadcnMenubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "~/shadcn/ui/menubar";

import React from "react";

export function Menubar() {
  return (
    <ShadcnMenubar>
      <MenubarMenu>
        <MenubarTrigger>My URLs</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Features</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Pricing</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Analytics</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </ShadcnMenubar>
  );
}
