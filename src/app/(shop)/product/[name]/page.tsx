"use client";
import RelatedProducts from "@/components/NewArraival/RelatedProducts";
import Image from "next/image";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const product = {
    images: [
      "/images/gallery/img.png",
      "/images/gallery/01.png",
      "/images/gallery/02.png",
      "/images/gallery/03.png",
      "/images/gallery/04.png",
    ],
    title: "White Hoodie",
    rating: 4.0,
    reviews: 121,
    sku: "BDT2500",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off White", "Black"],
    price: 2500,
    isNew: true,
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product.sku);
  };

  const handleQuantityChange = (type: string) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image Gallery */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-md">
              <Swiper
                onSlideChange={handleSlideChange}
                navigation={{
                  prevEl: ".custom-prev-button",
                  nextEl: ".custom-next-button",
                }}
                modules={[Navigation]}
                className="w-full h-full"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="custom-prev-button absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
                <Image
                  src="/images/slider button/button left.png"
                  alt="Previous"
                  width={24}
                  height={24}
                />
              </button>
              <button className="custom-next-button absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
                <Image
                  src="/images/slider button/button right.png"
                  alt="Next"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border rounded-md ${
                    index === activeSlideIndex
                      ? "border-purple-600"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            {product.isNew && (
              <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
                New Arrival
              </span>
            )}
            <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-lg mr-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < Math.floor(product.rating) ? "★" : "☆"
                )}
              </span>
              <span className="text-gray-600 text-sm">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-xl font-semibold text-purple-600 mt-4">
              BDT {product.price}
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-medium">Available Size</h4>
              <div className="flex space-x-4 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-md hover:bg-purple-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium">Available Color</h4>
              <div className="flex space-x-4 mt-2">
                {product.colors.map((color, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className={`w-5 h-5 rounded-full border ${
                        color === "Off White" ? "bg-gray-200" : "bg-black"
                      }`}
                    />
                    <span className="text-sm">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium">Quantity</h4>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-2 border rounded-l-md bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-2 border-t border-b">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-2 border rounded-r-md bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-100"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-10 border-b pb-2">
            <button className="text-purple-600 font-medium border-b-2 border-purple-600">
              Review & Rating
            </button>
            <button className="text-gray-500">Details</button>
            <button className="text-gray-500">Discussion</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Left Section: User Reviews */}
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <select className="border border-gray-300 rounded-md px-3 py-1">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                </select>
              </div>

              <div className="space-y-6">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/images/gallery/Frame 97.png"
                            alt="User Avatar"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Cameron Williamson</h4>
                          <p className="text-sm text-gray-500">3 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-400 text-lg">
                          {Array.from({ length: 5 }, (_, index) =>
                            index < 4 ? "★" : "☆"
                          )}
                        </span>
                      </div>
                      <p className="mt-3 text-gray-700">Very Nice!!</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="text-sm text-gray-500 flex items-center gap-1">
                          👍 10
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-lg font-medium">Product Review</h4>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-yellow-400 text-2xl">★★★★☆</span>
                  <span className="text-gray-600 text-lg">(4.0)</span>
                </div>
                <p className="text-gray-600 mt-1">121 reviews</p>

                <div className="mt-4 space-y-3">
                  {[
                    { stars: 5, count: 50 },
                    { stars: 4, count: 5 },
                    { stars: 3, count: 10 },
                    { stars: 2, count: 30 },
                    { stars: 1, count: 2 },
                  ].map(({ stars, count }) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="w-5 text-yellow-400">{stars}★</span>
                      <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${(count / 121) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <RelatedProducts />
        </div>

        <div className="fixed right-4 bottom-1/2 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer">
          <span>
            {" "}
            <CiShoppingCart size={22} /> Your Bag
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
