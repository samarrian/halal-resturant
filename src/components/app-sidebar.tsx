import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Building, ForkKnife, Heart, Plus, Settings } from "lucide-react"
import { Button } from "./ui/button"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Restaurants",
      url: "#",
      icon: ForkKnife,
    },
    {
      title: "Mosques",
      url: "#",
      icon: Building,
    },
    {
      title: "Favorites",
      url: "#",
      icon: Heart,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  //   navClouds: [
  //     {
  //       title: "Capture",
  //       icon: IconCamera,
  //       isActive: true,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Proposal",
  //       icon: IconFileDescription,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Prompts",
  //       icon: IconFileAi,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //   ],
}
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <h1 className="text-lg font-semibold">Nordic Concierge</h1>
            <p className="text-xs">Halal Finder Finland</p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {data.navMain.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className=""
                    isActive={index === 0}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Button>
            <Plus /> <span>Add Restaurant</span>
          </Button>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
