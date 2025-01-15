import { Client, Configuration } from "streaming-availability"

export const streamingAvailabilityClient = new Client(
  new Configuration({
    apiKey: process.env.RAPID_API_KEY,
  }),
)
