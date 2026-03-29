import { Price, PriceValue } from "@/components/ui/price"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ProductCard1Props } from "@/types/Restaurants"
import { resumeToPipeableStream } from "react-dom/server"
import { restaurantImages } from "@/Constants/Restaurant"

interface ProductPrice {
  regular: number
  sale?: number
  currency: string
}

interface Product {
  name: string
  image: {
    src: string
    alt: string
  }
  link: string
  description: string
  price: ProductPrice
  badge: {
    text: string
    backgroundColor?: string
  }
}

const FoodCard = ({ className, restaurant, index }: ProductCard1Props) => {
  const image = restaurantImages[index]

  return (
    <Card className="mt-5 h-full overflow-hidden p-0">
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <img
            src={image}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>

        <Badge
          className={cn("absolute inset-s-4 top-4 bg-lime-300 text-black")}
        >
          {restaurant.halal_status}
        </Badge>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 pb-6">
        <CardTitle className="text-xl font-semibold">
          {restaurant.name}
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {restaurant.address}
        </CardDescription>
        <Badge>{restaurant.cuisine}</Badge>
      </CardContent>
    </Card>
  )
}

export default FoodCard
