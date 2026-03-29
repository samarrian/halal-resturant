export interface Restaurant {
  name: string
  address: string
  city: string
  lat: string
  lng: string
  cuisine: string
  halal_status: string
  hours: string
  phone: string
  website: string
}
export interface ProductCard1Props {
  className?: string
  restaurant: Restaurant
  index: number
}
