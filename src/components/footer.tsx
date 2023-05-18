import Link from "next/link";

export function Footer() {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "ABout",
        },
        {
          href: "javascript:void()",
          name: "Features",
        },
        {
          href: "javascript:void()",
          name: "Works",
        },
        {
          href: "javascript:void()",
          name: "Career",
        },
      ],
    },
    {
      label: "Help",
      items: [
        {
          href: "javascript:void()",
          name: "Customer Support",
        },
        {
          href: "javascript:void()",
          name: "Delivery Details",
        },
        {
          href: "javascript:void()",
          name: "Terms & Conditions",
        },
        {
          href: "javascript:void()",
          name: "Privacy Policy",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "Free eBooks",
        },
        {
          href: "javascript:void()",
          name: "Development Tutorial",
        },
        {
          href: "javascript:void()",
          name: "How to Blog",
        },
        {
          href: "javascript:void()",
          name: "Youtube PlayList",
        },
      ],
    },

    {
      label: "Links",
      items: [
        {
          href: "javascript:void()",
          name: "Youtube",
        },
        {
          href: "javascript:void()",
          name: "Twitter",
        },
        {
          href: "javascript:void()",
          name: "Github",
        },
        {
          href: "javascript:void()",
          name: "Facebook",
        },
      ],
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-600" key={idx}>
              <h4 className="text-gray-800 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    className="hover:text-gray-800 duration-150"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
           <p className="text-gray-800">Copyright © 2023 All rights reserved.</p>
           <div></div>
        </div>
      </div>
    </footer>
  );
}
