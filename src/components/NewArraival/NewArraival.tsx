"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../shared/ProductCard";

const demoProducts = [
  {
    id: 1,
    image: "/images/products/product1.png",
    title: "Indian Sharee",
    price: 2300,
  },
  {
    id: 2,
    image: "/images/products/product2.png",
    title: "Hoodie",
    price: 2300,
  },
  {
    id: 3,
    image: "/images/products/product3.png",
    title: "Plazu",
    price: 2300,
  },
  {
    id: 4,
    image: "/images/products/product4.png",
    title: "Jacket",
    price: 2300,
  },

  {
    id: 5,
    image: "/images/products/product1.png",
    title: "T-Shirt",
    price: 1200,
  },
  {
    id: 6,
    image: "/images/products/product2.png",
    title: "Jeans",
    price: 2800,
  },
  {
    id: 7,
    image: "/images/products/product3.png",
    title: "Dress",
    price: 3500,
  },
  {
    id: 8,
    image: "/images/products/product4.png",
    title: "Sweater",
    price: 2600,
  },
];

const NewArrival = () => {
  const [visibleProducts, setVisibleProducts] = useState(5);

  const handleSeeMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, demoProducts.length));
  };

  const handleAddToCart = (productId: number) => {
    console.log("Added to cart:", productId);
  };

  return (
    <div className="container mx-auto my-5 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[#7E53D4] text-sm">FEATURED PRODUCT</p>
          <p className="text-xl font-semibold">New Arrivals</p>
        </div>
        <div className="flex gap-2">
          <button className="custom-prev-button p-2 rounded-md border border-[#dddddd] hover:bg-gray-50">
            <Image
              src="/images/slider button/button left.png"
              alt="Previous"
              width={24}
              height={24}
            />
          </button>
          <button className="custom-next-button p-2 rounded-md border border-[#dddddd] hover:bg-gray-50">
            <Image
              src="/images/slider button/button right.png"
              alt="Next"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        speed={800}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {demoProducts.slice(0, visibleProducts).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              {...product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {visibleProducts < demoProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-[#7E53D4] text-white rounded-md hover:bg-[#6642b8] transition-colors duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrival;
