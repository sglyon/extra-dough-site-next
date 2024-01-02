import { Container } from '@/components/Container'
import { Donut } from '@/components/Donut'
import Image from 'next/image'
import QRCode from 'react-qr-code'

export function Hero() {
  return (
    <>
      <Container className="relative pt-6 pb-16 text-center lg:pt-12">
        <h1 className="mx-auto max-w-2xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Extra Dough
        </h1>
        <div className="mx-auto mt-2 flex flex-row justify-center">
          <Donut className="h-24 w-auto sm:h-40" />
        </div>
        <h1 className="mx-auto mt-2 mb-4 max-w-4xl text-3xl tracking-tight text-slate-700 lg:mb-0 lg:text-4xl">
          Satisfy Your Sweet Tooth with Extra Dough Your Local Fresh Baked Goods
          Connection
        </h1>
        <div className="relative p-0 pt-96 lg:hidden ">
          <iframe
            src="https://player.vimeo.com/video/882136208?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            className="absolute top-0 left-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Extra Dough V.3"
          ></iframe>
        </div>
        <div className="mt-10 flex justify-center space-x-6 lg:hidden">
          <div className="grid grid-cols-2">
            <div className="mx-auto flex flex-col">
              <a href="https://apps.apple.com/US/app/id1613915418?mt=8">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on app store"
                  height="100"
                  width="240"
                />
              </a>
              <div className="self-center">
                <QRCode
                  value="https://apps.apple.com/US/app/id1613915418?mt=8"
                  className="h-28 w-28"
                />
              </div>
            </div>
            <div className="mx-auto flex flex-col">
              <a href="https://play.google.com/store/apps/details?id=io.extradough.extradougheater&hl=en-US&ah=DO36JT8dcHmExhehpPbGzBJwYNY">
                <Image
                  src="/google-play-badge.png"
                  alt="Download on Google Play store"
                  height="100"
                  width="240"
                />
              </a>
              <div className="self-center">
                <QRCode
                  value="https://play.google.com/store/apps/details?id=io.extradough.extradougheater&hl=en-US&ah=DO36JT8dcHmExhehpPbGzBJwYNY"
                  className="h-28 w-28"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-2 pt-12 lg:grid">
          <div className="relative hidden p-0 pt-[40rem] lg:block ">
            <iframe
              src="https://player.vimeo.com/video/882136208?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              className="absolute top-0 left-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Extra Dough V.3"
            ></iframe>
          </div>

          <div className="mt-10 hidden flex-col justify-around lg:flex">
            <div className="flex items-center space-x-8">
              <a href="https://apps.apple.com/US/app/id1613915418?mt=8">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on app store"
                  height="100"
                  width="240"
                />
              </a>
              <div className="self-center">
                <QRCode
                  value="https://apps.apple.com/US/app/id1613915418?mt=8"
                  className="h-36 w-36"
                />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="https://play.google.com/store/apps/details?id=io.extradough.extradougheater&hl=en-US&ah=DO36JT8dcHmExhehpPbGzBJwYNY">
                <Image
                  src="/google-play-badge.png"
                  alt="Download on Google Play store"
                  height="100"
                  width="240"
                />
              </a>
              <div className="self-center">
                <QRCode
                  value="https://play.google.com/store/apps/details?id=io.extradough.extradougheater&hl=en-US&ah=DO36JT8dcHmExhehpPbGzBJwYNY"
                  className="h-36 w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
