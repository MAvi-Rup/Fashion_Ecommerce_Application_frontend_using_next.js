import Image from "next/image";

const Delivery = () => {
  return (
    <div className="bg-[#6441C2F2] shadow-[0px_4px_10px_0px_#9F9F9F1A] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Free Shipping Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/delivery.png"
                alt="Free Shipping"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 24px, 32px"
              />
            </div>
            <div className="text-white">
              <p className="font-semibold text-sm">FREE SHIPPING</p>
              <p className="text-xs opacity-90">
                BUY BDT 3000+ & GET FREE DELIVERY
              </p>
            </div>
          </div>

          {/* Exchange Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/exchange.png"
                alt="7 Days Exchange"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 24px, 32px"
              />
            </div>
            <div className="text-white">
              <p className="font-semibold text-sm">7 DAYS EXCHANGE</p>
              <p className="text-xs opacity-90">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/payment.png"
                alt="Secure Payment"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 24px, 32px"
              />
            </div>
            <div className="text-white">
              <p className="font-semibold text-sm">100% PAYMENT SECURE</p>
              <p className="text-xs opacity-90">
                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
