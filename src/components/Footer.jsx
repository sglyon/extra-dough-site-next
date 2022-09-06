import Link from 'next/link'

import { Container } from '@/components/Container'
import iconInstagram from '@/images/logos/instagram.svg'
import iconFacebook from '@/images/logos/facebook.svg'
import Image from 'next/image'

const IG = () => {
  return (
    <Image src={iconInstagram} alt="instagram" layout="fixed" unoptimized />
  )
}

const FB = () => {
  return <Image src={iconFacebook} alt="facebook" layout="fixed" unoptimized />
}

const FooterDesktop = () => {
  return (
    <div className="hidden grid-cols-3 gap-8 md:grid">
      <div className="flex flex-col space-y-4">
        <p className="text-2xl text-white">Follow us @ExtraDoughBakes</p>
        <div className="flex space-x-4">
          <IG />
          <p className="text-sm text-white">
            <Link href="https://www.instagram.com/extra_dough_bakes/">
              @extra_dough_bakes
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          <FB />
          <p className="text-sm text-white">
            <Link href="https://m.facebook.com/ExtraDoughBakes/">
              @ExtraDoughBakes
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-center text-2xl text-white">
          Join the Extra Dough Community
        </p>
        <p className="text-center text-xs text-white">
          The mission of Extra Dough is to bring people together through
          delicious home baked goods. It is now easier than ever to make money
          by baking and sharing your love of baking with your community. Join
          Today!
        </p>
      </div>
      <div className="flex flex-col space-y-4 text-white">
        <p className="text-center text-2xl text-white">Links</p>

        <nav>
          <ul className="flex flex-col space-y-2 pl-4">
            <li className="underline hover:text-primary-300">
              <Link href="mailto:info@extradough.io">Contact</Link>
            </li>
            <li className="underline hover:text-primary-300">
              <Link href="/terms">Privacy Policy</Link>
            </li>
            <li className="underline hover:text-primary-300">
              <Link href="/privacy">Terms and Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const FooterMobile = () => {
  return (
    <div className="flex flex-col space-y-4 md:hidden">
      <div className="flex items-center justify-center space-x-4">
        <p className="text-lg text-white">@ExtraDoughBakes</p>
        <div>
          <Link href="https://www.instagram.com/extra_dough_bakes/">
            <IG />
          </Link>
        </div>
        <div>
          <Link href="https://m.facebook.com/ExtraDoughBakes/">
            <FB />
          </Link>
        </div>
      </div>
      <div>
        <nav>
          <ul className="mx-auto flex justify-center space-x-2 text-xs text-white">
            <li className="underline hover:text-primary-300">
              <Link href="mailto:info@extradough.io">Contact</Link>
            </li>
            <li className="underline hover:text-primary-300">
              <Link href="/terms">Privacy Policy</Link>
            </li>
            <li className="underline hover:text-primary-300">
              <Link href="/privacy">Terms and Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-16">
          <FooterDesktop />
          <FooterMobile />
        </div>
        <div className="sm:row-reverse flex flex-col items-center border-t border-slate-400/10 py-10 sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Extra Dough, LLC. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
