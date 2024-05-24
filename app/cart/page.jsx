"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Nav />
      <div className="flex px-10  h-full justify-between gap-10 my-10">
        <div className="w-2/3 h-auto bg-white p-6 shadow-lg rounded-lg">
          <div
            className="flex items-center gap-1 cursor-pointer text-gray-700 mb-6"
            onClick={() => router.back()}
          >
            <FaArrowLeftLong />
            <div>Cart</div>
          </div>
          <div className="mt-4 space-y-6">
            {[
              {
                name: "Breathable slim sport vest",
                color: "Blue",
                size: "S",
                price: 59.0,
                quantity: 1,
                image:
                  "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915892.jpg?t=st=1716364756~exp=1716368356~hmac=6861a2a425d375a48ca9f795b11f41a4f960f25bad703b6898d9b2959c3d23ca&w=360",
              },
              {
                name: "Breathable slim sport vest",
                color: "Pink",
                size: "S",
                price: 39.0,
                quantity: 1,
                image:
                  "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?t=st=1716364719~exp=1716368319~hmac=546ca7bf121267955fa0beaa40b7945c65ddc621f33d8bbe5734070783a628cf&w=996",
              },
              {
                name: "Breathable slim sport vest",
                color: "Brown",
                size: "S",
                price: 39.0,
                quantity: 1,
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-gray-500 text-sm">
                      Color: {product.color} / Size: {product.size}
                    </div>
                    <div className="text-gray-500 text-sm">
                      ₹{product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="px-3 py-1 border rounded">-</button>
                  <input
                    min="1"
                    defaultValue={product.quantity}
                    className="w-12 text-center border mx-2"
                  />
                  <button className="px-3 py-1 border rounded">+</button>
                </div>
                <div className="font-semibold">
                ₹{(product.price * product.quantity).toFixed(2)}
                </div>
                <button className="text-red-500 mr-4 p-4 hover:bg-gray-200 rounded-lg transition-all" title="Remove Service">
                  <RxCross1 />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 h-full bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold border-b pb-4">Summary</h2>
          <div className="mt-4 space-y-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$137.00</span>
            </div>
            <div className="flex justify-between">
              <span>International Shipping</span>
              <span>$18.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$155.00</span>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              CHECK OUT
            </button>
            <button className="w-full py-3 border rounded-lg flex items-center justify-center space-x-2">
              <img src="/paypal-logo.png" alt="PayPal" className="w-6" />
              <span>Check out with PayPal</span>
            </button>
            <div className="text-sm text-gray-500">
              <p>FREE SHIPPING</p>
              <p>
                Your order qualifies for free shipping. Join us for free
                shipping on every order, every time.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p>NEED HELP?</p>
              <p>Contact our support team for assistance.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
