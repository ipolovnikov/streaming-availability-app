import { Show } from "streaming-availability"
import { Container } from "@/components/container"
import { GridItem } from "./grid-item"

export function Grid({ shows }: { shows: Show[] }) {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        {shows.map((show) => (
          <GridItem key={show.id} show={show} />
        ))}
      </div>
    </Container>
  )
}
