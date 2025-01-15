"use server"

import { SearchShowsByFiltersRequest, SearchShowsByTitleRequest } from "streaming-availability"
import { streamingAvailabilityClient } from "@/utils/rapid"

export async function getCountries() {
  return await streamingAvailabilityClient.countriesApi.getCountries()
}

export async function getGenres() {
  return await streamingAvailabilityClient.genresApi.getGenres()
}

export async function searchShowsByFilters(params: SearchShowsByFiltersRequest) {
  return await streamingAvailabilityClient.showsApi.searchShowsByFilters(params)
}

export async function searchShowsByTitle(params: SearchShowsByTitleRequest) {
  return await streamingAvailabilityClient.showsApi.searchShowsByTitle(params)
}
