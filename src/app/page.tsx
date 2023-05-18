import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Statistics } from '@/components/statistics'
import { Testimonials } from '@/components/testimonials'
import Image from 'next/image'

export const metadata = {
  title: 'Agency Landing Page',
  description: 'Generated by create next app',
  openGraph: {
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cKt-Mk7gASJ9QCXk8WD3jrXYHbuNimixkQ&usqp=CAU",
        "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594120_960_720.jpg",
        "https://pixabay.com/get/gf92e59c823b71b42af68029ee271e9f54eb262fa2c350eaae831b38e331f296e72cc04bc94d9642b06233c437c4d0068620fe219086cb38ccf2cc04f664b404e_1920.jpg",
        "https://www.gettyimages.com/detail/photo/business-people-working-in-modern-office-space-royalty-free-image/973718370"
    ]
  }
}


export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Services/>
      <Statistics/>
      <Testimonials/>
    </>


    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <h1>Hi there</h1>
    //   </div>
    // </main>
  )
}
