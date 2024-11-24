const Banner = () => {
  return (
    <div className="relative h-[650px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/bgimage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Elevate Your Everyday Style</h1>
        <p className="text-lg mb-8 max-w-lg">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all">
          Shop Now
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
