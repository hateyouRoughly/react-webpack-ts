import { ReactNode } from "react";

export interface SidebarContent {
    icon: ReactNode,
    title: string,
    path?: string,
    children?: SidebarContent[]
    [key: string]: any;
};

export type SidebarList = SidebarContent[];

export type NavbarSize = "min" | "max";