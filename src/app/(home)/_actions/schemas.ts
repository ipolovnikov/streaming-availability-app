import { z } from "zod"

export const titleParamSchema = z.string()

export const countryParamSchema = z.string().length(2)

export const genreParamSchema = z.string()

export const ratingParamSchema = z.string()

export const homeSearchParamsSchema = z.object({
  country: countryParamSchema.default("us"),
  genre: genreParamSchema.default(""),
  rating: ratingParamSchema.default(""),
  title: titleParamSchema.default(""),
})
