export function Features() {
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="55" height="55" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
                  <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
                  <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
               </svg>,
            title: "Relevant Experience",
            desc: "Relevant experiece is anty professional work experience that make you eligible for a specifi job."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-2" width="55" height="55" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
                   <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
                </svg>,
            title: "Billing Transparency",
            desc: "A trustworthy digital marketing agency follows the mantra of transparent billing so that their clients know."
        },
        {
            icon:
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wechat" width="55" height="55" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z"></path>
                   <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233"></path>
                   <path d="M10 8h.01"></path>
                   <path d="M7 8h.01"></path>
                   <path d="M15 14h.01"></path>
                   <path d="M18 14h.01"></path>
                </svg>,
            title: "Effective Communication",
            desc: "Communication is the inseparable of effective communication skills then this is something you must reconsider ."
        },
    ]

    return (
       <section className="py-16 bg=gray-700">
         <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="relative max-w-2xl mx-auto sm:text-center">
                <div className="relative z-10">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        The Company Features
                    </h3>
                    <p className="mt-3">
                    A trustworthy digital marketing agency follows the mantra of transparent billing so that their clients know.
                    </p>
                </div>
            </div>
            <div className="mt-12 relative">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                     {
                        features.map((item, idx) => (
                            <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                <div className="text-indigo-600 pb-3 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                     }
                </ul>
            </div>
         </div>
       </section>
    );
}