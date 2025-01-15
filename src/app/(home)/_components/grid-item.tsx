import Image from "next/image"
import { Show } from "streaming-availability"

export function GridItem({ show }: { show: Show }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Image
          src={show.imageSet.verticalPoster.w240}
          alt={show.title}
          width={240}
          height={340}
          className="aspect-[3/4] w-full rounded object-cover"
        />
      </div>
      <div className="min-h-12">
        <p className="text-sm font-semibold">{show.title}</p>
        <p className="text-xs font-light">{show.releaseYear}</p>
      </div>
    </div>
  )
}
