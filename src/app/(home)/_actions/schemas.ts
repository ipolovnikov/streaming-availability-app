import { z } from "zod"

export const titleSchema = z.string()

export const countrySchema = z.string().length(2)

export const genresSchema = z.string()

export const homeSearchParamsSchema = z.object({
  title: titleSchema.optional(),
  country: countrySchema.optional(),
  genres: genresSchema.optional(),
})
