import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import iosApp from '@/images/screenshots/iosApp.png'

export function AppCTA() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-100 py-32"
    >
      <Container className="relative">
        <div className="grid grid-cols-1  gap-8 sm:grid-cols-2">
          <div className="mx-auto">
            <Image
              src={iosApp}
              alt="iPhone app"
              width={270}
              height={585}
              layout="fixed"
              unoptimized
            />
          </div>
          <div className="mx-auto max-w-md self-center text-center">
            <h2 className="font-display text-2xl uppercase tracking-tight text-slate-800 md:text-3xl lg:text-4xl">
              Order deliveries directly through our app
            </h2>
            <ButtonLink
              variant="outline"
              href="https://apps.apple.com/US/app/id1613915418?mt=8"
              className="mt-10"
            >
              Download today!
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
