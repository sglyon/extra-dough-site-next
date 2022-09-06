import Image from 'next/image'
import { Container } from '@/components/Container'
import imageHow1 from '@/images/how1.png'
import imageHow2 from '@/images/how2.png'
import imageHow3 from '@/images/how3.png'

const steps = [
  {
    image: imageHow1,
    description: 'Local bakers post items for sale',
  },
  { image: imageHow2, description: 'You place an order' },
  { image: imageHow3, description: 'The item is delivered to your door!' },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="secondary-features-title"
      className="pt-8 pb-14 sm:pb-20 sm:pt-12 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center">
          <h2
            id="secondary-features-title"
            className="text-center font-display text-4xl tracking-tight text-slate-900 sm:text-6xl"
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 justify-around gap-6 pt-8 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => (
              <div
                className="mx-auto flex flex-col space-y-2 text-center md:space-y-8"
                key={index}
              >
                <Image
                  src={step.image}
                  alt={step.description}
                  width={250}
                  height={250}
                  layout="fixed"
                />
                <p className="text-sm italic text-slate-700">
                  {index + 1}. {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
