import Image from 'next/image'

import { Container } from '@/components/Container'
import imageBagels from '@/images/bakes/bagels.jpeg'
import imageCookies from '@/images/bakes/cookies.jpeg'
import imageMuffins from '@/images/bakes/muffins.jpeg'
import imageRolls from '@/images/bakes/rolls.jpeg'

const bakes = [
  {
    name: 'Everything Bagels',
    baker: 'Robert Skousen',
    image: imageBagels,
  },
  {
    name: 'Salted Milk Chocolate Chip Cookie',
    baker: 'Sarah Clawson',
    image: imageCookies,
  },
  {
    name: 'Banana chocolate chip muffins',
    baker: 'Amy Evans',
    image: imageMuffins,
  },
  {
    name: 'Buttery crescent rolls',
    baker: 'Emily Nicoll',
    image: imageRolls,
  },
]

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-primary-600 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            What&apos;s cookin&apos;?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Check out some of the delicious baked goods selling on Extra Dough
            right now!
          </p>
        </div>
        <div className="flex flex-wrap justify-around py-6 px-6 pt-12">
          {bakes.map((f, ix) => {
            return (
              <div key={ix} className="mt-4 flex flex-col items-center">
                <Image
                  src={f.image}
                  priority
                  alt={f.name}
                  width="256"
                  height="256"
                  layout="fixed"
                />
                <p className="text-md mt-2 self-start text-white">{f.name}</p>
                <p className="text-md self-start text-white">by {f.baker}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
