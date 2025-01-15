import { Metadata } from "next"
import { redirect } from "next/navigation"
import { Show } from "streaming-availability"
import { Hero } from "./_components/hero"
import { Grid } from "./_components/grid"
import { homeSearchParamsSchema } from "./_actions/schemas"
import { getCountries, getGenres, searchShowsByFilters, searchShowsByTitle } from "./_actions/actions"
import { Filter } from "./_components/filter"

export const metadata: Metadata = {
  title: "Streaming Availability App",
  description: "Just find your favorite shows",
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { country, genres, title } = homeSearchParamsSchema.parse(await searchParams)

  if (!country) redirect("?country=us")

  const availableCountries = Object.entries(await getCountries()).map((i) => ({ value: i[0], label: i[1].name }))

  const availableGenres = (await getGenres()).map((i) => ({ value: i.id, label: i.name }))

  const shows: Show[] = title
    ? await searchShowsByTitle({ country, title })
    : (await searchShowsByFilters({ country, genres: genres ? genres.split(",") : undefined })).shows

  return (
    <>
      <Hero title={metadata.title?.toString() ?? ""} description={metadata.description?.toString() ?? ""} />
      <Filter countries={availableCountries} genres={availableGenres} />
      <Grid shows={shows} />
    </>
  )
}
