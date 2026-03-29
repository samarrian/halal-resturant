import { useEffect, useState } from "react"
import { sheetParser } from "@/utils/sheetParser"
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)

        const res = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ5ewZpT_FcAuxKGMpe_MbX5oKwAvZyunvXDC6qvwAy_h5tlzVAVYAZK1Y7KvZ4S08XXZCLfp9Ssri/pub?output=csv"
        )

        if (!res.ok) {
          throw new Error("Failed to fetch CSV")
        }

        const text = await res.text()

        const parsedData = sheetParser(text)

        setRestaurants(parsedData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  return { restaurants, loading, error, setLoading }
}
