import Image from 'next/image'

export function Statistics() {
    const  statistics = [
        {
            title: 'Data powers continuar performance improvements.' 
        },
        {
            title: 'Encourages well-informed decision making.' 
        },
        {
            title: 'Delivers connectitive advantage.' 
        },


    ]
    return (
        <section className="relative max-w-screen-xl mx-auto py-16 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-18 items-center lg:flex">
                <div className="flex-1 px-12 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        Increase Productivity With Exact Statistics
                    </h3>
                    <p className="max-w-xl mt-6 leading-relaxed text-gray-800 sm:mx-auto lg:ml-0">
                        Productivity growth is our opportunity to increase output without increasing inputs and incurring these costs.
                    </p>
                    {
                        statistics.map((item, idx) => (
                            <ul key={idx} className="mt-4">
                                <li className="inline-flex justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 mr-2 icon icon-tabler icon-tabler-circle-check-filled" width="23" height="23" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    {item.title}
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image 
                       src="https://i.postimg.cc/kgd4WhyS/container.png"
                       className='rounded-md'
                       width={480}
                       height={280}
                       alt=''
                    />
                </div>

            </div>
        </section>
    );
}