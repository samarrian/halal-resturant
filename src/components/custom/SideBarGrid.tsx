import { useRestaurants } from "@/hooks/useRestaurants"
import FoodCard from "./FoodCard"

export default function SideBarGrid() {
  const { error, loading, restaurants } = useRestaurants()

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Top Halal Restaurants</h2>

        {restaurants.map((el, i) => {
          return <FoodCard key={i} restaurant={el} index={i} />
        })}
      </div>
    </>
  )
}
