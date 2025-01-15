import { Container } from "@/components/container"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export type FilterProps = {
  countries: { value: string; label: string }[]
  genres: { value: string; label: string }[]
}

export function Filter({ countries = [], genres = [] }: FilterProps) {
  return (
    <div>
      <Container className="mb-4 text-foreground/80">
        <h2 className="text-2xl font-bold">Search</h2>
        <p className="text-sm font-light">Filter shows by countries, genres and rating or find show by title</p>
      </Container>

      <Container className="mb-6 grid grid-cols-2 gap-6 lg:grid-cols-5">
        <Field>
          <Label htmlFor="country">Country</Label>
          <Select id="country" name="country">
            {countries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="genre">Genre</Label>
          <Select id="genre" name="genre">
            {genres.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="rating">Rating</Label>
          <Select id="rating" name="rating">
            <option value="0-2">0-2</option>
            <option value="2-4">2-4</option>
            <option value="4-6">4-6</option>
            <option value="6-8">6-8</option>
            <option value="8-10">8-10</option>
          </Select>
        </Field>
        <Field className="lg:col-span-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Search by title ..." />
        </Field>
      </Container>
    </div>
  )
}
