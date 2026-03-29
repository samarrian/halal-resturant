import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Building, ForkKnife, Heart, Plus, Settings } from "lucide-react"
import { Button } from "../ui/button"

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
}
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-2">
          <h1 className="text-lg font-semibold">Nordic Concierge</h1>
          <p className="text-xs">Halal Finder Finland</p>
        </div>
        <SidebarSeparator />
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
                    <span className="py-4 text-2xl">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <Plus /> <span>Add Restaurant</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
