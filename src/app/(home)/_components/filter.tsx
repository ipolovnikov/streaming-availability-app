"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Container } from "@/components/container"
import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export type FilterProps = {
  countries: { value: string; label: string }[]
  genres: { value: string; label: string }[]
  defaultValues: {
    country: string
    genre: string
    rating: string
    title: string
  }
}

export function Filter({
  countries = [],
  genres = [],
  defaultValues = {
    country: "us",
    genre: "",
    rating: "",
    title: "",
  },
}: FilterProps) {
  const router = useRouter()

  const [country, setCountry] = useState(defaultValues.country)
  const [genre, setGenre] = useState(defaultValues.genre)
  const [rating, setRating] = useState(defaultValues.rating)
  const [title, setTitle] = useState(defaultValues.title)

  useEffect(() => {
    const newParams = {
      country,
      genre,
      rating,
      title,
    }

    const urlParams = new URLSearchParams(window.location.search)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) urlParams.set(key, value)
      else urlParams.delete(key)
    })

    router.push(`?${urlParams.toString()}`, { scroll: false })
  }, [title, country, genre, router, rating])

  return (
    <div>
      <Container className="mb-4 text-foreground/80">
        <h2 className="text-2xl font-bold">Search</h2>
        <p className="text-sm font-light">Filter shows by countries, genres and rating or find show by title</p>
      </Container>

      <Container className="mb-6 grid grid-cols-2 gap-6 lg:grid-cols-5">
        <Field>
          <Label htmlFor="country">Country</Label>
          <Select id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="genre">Genre</Label>
          <Select id="genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">All</option>
            {genres.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="rating">Rating</Label>
          <Select id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0-10">All</option>
            <option value="0-2">0-2</option>
            <option value="2-4">2-4</option>
            <option value="4-6">4-6</option>
            <option value="6-8">6-8</option>
            <option value="8-10">8-10</option>
          </Select>
        </Field>
        <Field className="lg:col-span-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Search by title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Field>
      </Container>
    </div>
  )
}
