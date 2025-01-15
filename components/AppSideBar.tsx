"use client";

import { Calendar, List, Map, Star } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddToList from "./AddToList";
import ChartBox from "./ChartBox";

// Menu items.
const items = [
  {
    title: "All Task",
    url: "#",
    icon: List,
  },
  {
    title: "Today",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Important",
    url: "#",
    icon: Star,
  },
  {
    title: "Planned",
    url: "#",
    icon: Map,
  },
];

export function AppSidebar() {
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="mt-6 py-4">
          <SidebarGroupLabel className="flex flex-col items-center justify-center space-y-3 w-full ">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "80px",
                    height: "80px",
                    overflow: "hidden",
                  },
                  userButtonOuterBox: {
                    margin: "auto",
                  },
                },
              }}
            />
            <h1>Hey {user?.firstName || "User"}</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent className="w-full pt-8 space-y-4">
            <Card>
              <CardContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </CardContent>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <AddToList></AddToList>
        </SidebarGroup>
        <SidebarGroup>
          <ChartBox></ChartBox>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
