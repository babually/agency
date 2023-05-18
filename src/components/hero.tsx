import Image from "next/image";
import camp from "@/public/camp.jpg";

export function Hero() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 max-w-md px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-3xl">
            <h1 className="font-bold text-4xl xl:text-6xl sm:text-5xl text-gray-600">
              Transforming Idea Into Reality.
            </h1>
            <p className="max-w-xl leading-relaxed text-gray-800 sm:mx-auto lg:ml-0">
              We are an experienced digital agency of skilled team that build
              startegies for the success of your bussiness.
            </p>
            <div className="flex items-center gap-x-3">
              <div className="flex -space-x-6 overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  width={8}
                  height={8}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt={"image"}
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/18.jpg"
                  width={8}
                  height={8}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt={"image"}
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  width={8}
                  height={8}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt={"image"}
                />
              </div>
              <div>
                <span className="block text-gray-700 text-sm font-bold">
                  Join over 2954 creators.
                </span>
                <span className="block text-gray-700 text-xs">
                  Get new ideas every week
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 sm:hidden lg:block mt-7">
            <Image
              src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594120_960_720.jpg"
              width={520}
              height={320}
              className="rounded-md"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
