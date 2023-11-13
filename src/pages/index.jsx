import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AppCTA } from '@/components/AppCTA'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <>
      <Head>
        <title>Extra Dough: Discover Local Fresh Baked Goods Near You</title>
        <meta
          name="description"
          content="Craving homemade treats? Find a delightful array of local fresh baked goods near you with Extra Dough. Connect, explore, and indulge in the best your community has to offer!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <AppCTA />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
