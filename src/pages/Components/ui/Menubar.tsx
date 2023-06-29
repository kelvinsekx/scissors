import {
    Menubar as ShadcnMenubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "~/shadcn/ui/menubar"

import React from 'react'

export function Menubar () {
  return (
    <ShadcnMenubar>
        <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    </ShadcnMenubar>
  )
}  