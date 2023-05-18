import Image from 'next/image'

export function Testimonials() {
    const testimonials = [
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Leslie Alexander",
            title: "Founder",
            quote: "You made it so simple. My new site is so faster and easier to work with than my old site. I just choose the page make the change & it is a good channel for us."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Jacob Jones",
            title: "Co-Founder",
            quote: "Awesome experience working with the team of heroes at Digital, Always very responsive and continously giveen us suggestion to improve our business."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Jenny Wilson",
            title: "Chief Marketing Officer",
            quote: "I cannot believe that i have got a brand new Landing page after getting Omega. It was super easy to add and faster and easy to work & increases our exposure."
        },
    ]

    return (
        <section className="py-16 bg-slate-100">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        What Talk About
                    </h3>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-slate-100">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white p-4 rounded-xl border shadow-sm">
                                    <figure>
                                        <blockquote>
                                           <p className="mt-6 text-gray-700 text-md">
                                               {item.quote}
                                           </p> 
                                        </blockquote>
                                        
                                        <div className="flex items-center gap-x-4 mt-3">
                                            <Image 
                                                src={item.avatar}
                                                className="mt-5 rounded-full"
                                                width={46}
                                                height={46}
                                                alt={'img'}                                          
                                            />
                                            <div className='mt-4'>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>  
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}