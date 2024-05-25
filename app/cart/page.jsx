"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Button, ButtonGroup } from "@material-tailwind/react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { RxCross1, RxCross2 } from "react-icons/rx";

const Cart = () => {
  const router = useRouter();
  const [products, setProducts] = useState([
    {
      name: "Breathable slim sport vest",
      color: "Blue",
      size: "S",
      price: 59.0,
      quantity: 2,
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
    {
      name: "Breathable slim sport vest",
      color: "Brown",
      size: "S",
      price: 39.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    {
      name: "Breathable slim sport vest",
      color: "Brown",
      size: "S",
      price: 39.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  ]);

  const [validationMessage, setValidationMessage] = useState(false);

  const handleQuantityChange = (index, change) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, i) => {
        if (i === index) {
          const newQuantity = product.quantity + change;
          if (newQuantity < 1 || newQuantity > 10) {
            setValidationMessage(true);
            return product;
          }
          setValidationMessage("");
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const handleRemoveProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Nav />
      <div className="flex flex-col lg:flex-row px-4 lg:px-10 h-full justify-between gap-6 lg:gap-10 my-6 lg:my-10">
      <div className="w-full lg:w-2/3 min-h-auto max-h-[78vh] no-scrollbar overflow-auto bg-white pb-6 shadow-lg rounded-lg">
        <div className="flex items-center justify-between gap-1 cursor-pointer text-gray-700 mb-6 sticky px-6 py-4 top-0 bg-white">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.back()}>
            <FaArrowLeftLong />
            <div>Cart</div>
          </div>
          <div className={`text-red-500 flex items-center gap-1 transition-all duration-700 ${validationMessage ? "translate-x-0" : "translate-x-96"}`}>
            <RiErrorWarningFill />
            Quantity should be between 1 and 10.
          </div>
        </div>
        <div className="mt-4 space-y-6 px-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b pb-4">
              <div className="flex items-start lg:items-center">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4">
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-gray-500 text-sm">Color: {product.color} / Size: {product.size}</div>
                  <div className="text-gray-500 text-sm">₹{product.price.toFixed(2)}</div>
                </div>
              </div>
              <div className="flex w-full lg:w-max flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
                <ButtonGroup variant="gradient" color="light-blue" size="sm">
                  <Button onClick={() => handleQuantityChange(index, -1)}>-</Button>
                  <div className="px-4 flex items-center">{product.quantity}</div>
                  <Button onClick={() => handleQuantityChange(index, 1)}>+</Button>
                </ButtonGroup>
              </div>
              <div className="font-semibold mt-4 lg:mt-0">₹{(product.price * product.quantity).toFixed(2)}</div>
              <button
                onClick={() => handleRemoveProduct(index)}
                className="bg-[#FA7070] hover:bg-[#FD5D5D] shadow-lg shadow-[#ffb6b69a] text-white px-4 py-2 rounded-md flex items-center justify-center gap-1 transition-all mt-4 lg:mt-0"
                title="Remove Service"
              >
               Remove service 
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-full bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold border-b pb-4">Summary</h2>
        <div className="mt-4 space-y-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              ₹
              {products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>International Shipping</span>
            <span>₹18.00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>
              ₹
              {(products.reduce((acc, product) => acc + product.price * product.quantity, 0) + 18).toFixed(2)}
            </span>
          </div>
          <button className="w-full py-3 hover:bg-gray-800 transition-all text-white rounded-lg bg-gray-700">
            CHECK OUT
          </button>
          <button className="w-full py-3 border rounded-lg flex items-center justify-center space-x-2">
            <img src="/paypal-logo.png" alt="PayPal" className="w-6" />
            <span>Check out with PayPal</span>
          </button>
          <div className="text-sm text-gray-500">
            <p>FREE SHIPPING</p>
            <p>Your order qualifies for free shipping. Join us for free shipping on every order, every time.</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>NEED HELP?</p>
            <p>Contact our support team for assistance.</p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Cart;
