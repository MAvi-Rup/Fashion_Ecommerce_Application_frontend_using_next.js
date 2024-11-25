import Image from "next/image";

const ProductCard = ({ image, title, price, onAddToCart }: any) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <div className="relative overflow-hidden group aspect-[4/3] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          className=" transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-700">BDT {price.toLocaleString()}</p>
        </div>
        <button
          onClick={onAddToCart}
          className="w-full py-2 text-center text-[#7E53D4] border border-[#7E53D4] hover:bg-[#7E53D4] hover:text-white transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
