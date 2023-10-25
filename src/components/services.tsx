"use client"

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M3 3v18h18"></path>
           <path d="M20 18v3"></path>
           <path d="M16 16v5"></path>
           <path d="M12 13v8"></path>
           <path d="M8 16v5"></path>
           <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
        </svg>
      ),
      title: "Digital competetive analysis",
      href: "javascript:void()",
      desc: "Every successful digital marketing campaign must be driven. This porvide clear path to measurably improve your websites.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path>
           <path d="M4 6v6c0 1.657 3.582 3 8 3m8 -3.5v-5.5"></path>
           <path d="M4 12v6c0 1.657 3.582 3 8 3"></path>
           <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
           <path d="M20.2 20.2l1.8 1.8"></path>
        </svg>
      ),
      title: "Search optimization engine (SEO)",
      href: "javascript:void()",
      desc: "98% of online experiences start with search engines, so if youe business nedds to generate more websites and you need SEO.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-speakerphone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M18 8a3 3 0 0 1 0 6"></path>
           <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
           <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
        </svg>
      ),
      title: "Display advertising service",
      href: "javascript:void()",
      desc: "Display advertising is a form of PPC markerting that targets unsuspecting consumers based on demographics.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-up-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" stroke-width="0" fill="currentColor"></path>
           <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path>
        </svg>
      ),
      title: "Social media marketing",
      href: "javascript:void()",
      desc: "Social media users spend an average of 3 hours per day browsing preffered platforms , social media marketing startegy.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
           <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        </svg>
      ),
      title: "Reputation management",
      href: "javascript:void()",
      desc: "Your reputation is everything. Studies shows 75% of consumers trust local business if it is positive reviews.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
           <path d="M15 9h.01"></path>
        </svg>
      ),
      title: "Lead recovery services",
      href: "javascript:void()",
      desc: "Every bussiness has had situation where customer service accidentally lose a lead. Have you ever wonder revenue  .",
    },
  ];


  return (
    <section className="py-16 bg-slate-100">
        <div className="max-w-screen-lg mx-auto px-6 text-gray-600 md:px-8">
          <div className="max-w-xl mx-auto space-y-3 sm:text-center">
            <h3 className="text-gray-800 text-4xl font-semibold sm:text-4xl">
              Awesome Services For Growing Your Business
            </h3>
          </div>
          <div className="mt-12">
                <ul 
                className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2"
              >
                {services.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex 
                    gap-x-4"
                  >
                    <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3">{item.desc}</p>
                      <div className="mt-6 flex">
                          <Link key={idx} href={item.href} className=" hover:text-gray-800 duration-150">
                            <p className="text-1xl font-bold pr-2">Discover More</p>
                          </Link>
                          <IconArrowRight 
                              size={16} 
                              color="gray" 
                              stroke={3}  
                              strokeLinejoin="miter" 
                              className="mt-1"
                          />
                      </div>
                      
                    </div>
                  </li>
                ))}
              </ul>
            
          </div>
        </div>
          
      
    </section>
  );
}
