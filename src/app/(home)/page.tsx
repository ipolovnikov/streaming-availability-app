import { Metadata } from "next"
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
  const { country, genre, rating, title } = homeSearchParamsSchema.parse(await searchParams)

  const ratingMin = rating ? parseInt(rating.split("-")[0]) : 0
  const ratingMax = rating ? parseInt(rating.split("-")[1]) : 10

  const shows: Show[] = title
    ? await searchShowsByTitle({
        country,
        title,
      })
    : (
        await searchShowsByFilters({
          country,
          genres: genre ? [genre] : [],
          ratingMin,
          ratingMax,
        })
      ).shows

  const availableCountries = Object.entries(await getCountries()).map((i) => ({ value: i[0], label: i[1].name }))

  const availableGenres = (await getGenres()).map((i) => ({ value: i.id, label: i.name }))

  return (
    <>
      <Hero title={metadata.title?.toString() ?? ""} description={metadata.description?.toString() ?? ""} />
      <Filter
        countries={availableCountries}
        genres={availableGenres}
        defaultValues={{
          country,
          genre,
          rating: `${ratingMin}-${ratingMax}`,
          title,
        }}
      />
      <Grid shows={shows} />
    </>
  )
}
