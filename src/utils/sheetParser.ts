import Papa from "papaparse"

export const sheetParser = (csvText) => {
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  })

  return result.data
}
