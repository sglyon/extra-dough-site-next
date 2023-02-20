import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Donut } from '@/components/Donut'

export function Hero() {
  return (
    <>
      <Container className="relative pt-6 pb-16 text-center lg:pt-12">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Extra Dough
        </h1>
        <div className="mx-auto mt-2 flex flex-row justify-center">
          <Donut className="h-24 w-auto sm:h-40" />
        </div>
        <p className="mx-auto mt-2 max-w-xl text-2xl tracking-tight text-slate-700">
          Get fresh baked treats from local, licensed bakers, delivered straight
          to your door. Choose from a variety of baked goods, including cookies,
          cakes, muffins, doughnuts, pies and more!
        </p>
        <div className="mt-10 flex justify-center space-x-6">
          <ButtonLink href="https://apps.apple.com/US/app/id1613915418?mt=8">
            Get the App
          </ButtonLink>
        </div>
      </Container>
    </>
  )
}
