import Image from "next/image";

const HotDealBanner = () => {
  return (
    <div className="w-full py-3 md:py-5">
      <div className="container mx-auto bg-[#EEECFB]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="p-4 md:p-8 md:pl-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-[#8B5CF6]">30% </span>
              Off for New Customers
            </h2>
            <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full flex items-center gap-2 transition-colors duration-200 mx-auto md:mx-0">
              Shop Now
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 md:pr-28">
            <Image
              src="/images/image 2.png"
              alt="Happy couple wearing sunglasses"
              width={500}
              height={400}
              className="object-contain w-full max-w-[300px] md:max-w-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealBanner;
