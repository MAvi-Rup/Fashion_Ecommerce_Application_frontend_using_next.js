"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Collection = () => {
  const images = ["/images/man.png", "/images/man.png", "/images/man.png"];

  const swiperParams: SwiperProps = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
      type: "bullets",
    },
    loop: true,
  };

  return (
    <div className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        <div>
          <Swiper {...swiperParams} className="!h-[500px]">
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Men Collection ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-left">
          <h2 className="text-5xl font-semibold mb-6">Men Collection</h2>
          <p className="text-lg mb-10">
            Discover the latest fashion trends in our men's collection. Explore
            a wide range of stylish and comfortable clothing options.
          </p>
          <Link
            href="/men-collection"
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Image src="/images/indicator.png" width={100} height={20} alt="img" />
      </div>
    </div>
  );
};

export default Collection;
