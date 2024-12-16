"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Diffrence from "@/app/Components/Diffrence";
import Join from "@/app/Components/Join";
import NewCeramics from "@/app/Components/NewCeramics";

// Interface for Product
interface Product {
  Pic: string;
  PName: string;
  pPrice: string;
  description: string;
}

// Sample Products Data
const PRODUCTS: Product[] = [
  {
    Pic: "/Parent.png",
    PName: "Rustic Vase Set",
    pPrice: "£155",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Parent (1).png",
    PName: "The Lucy Lamp",
    pPrice: "£399",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo.png",
    PName: "The Silky Vase",
    pPrice: "£125",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo (1).png",
    PName: "The Dandy Chair",
    pPrice: "£250",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Parent.png",
    PName: "Rustic Vase Set",
    pPrice: "£155",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Parent (1).png",
    PName: "The Lucy Lamp",
    pPrice: "£399",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo.png",
    PName: "The Silky Vase",
    pPrice: "£125",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo (1).png",
    PName: "The Dandy Chair",
    pPrice: "£250",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Parent.png",
    PName: "Rustic Vase Set",
    pPrice: "£155",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Parent (1).png",
    PName: "The Lucy Lamp",
    pPrice: "£399",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo.png",
    PName: "The Silky Vase",
    pPrice: "£125",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
  {
    Pic: "/Photo (1).png",
    PName: "The Dandy Chair",
    pPrice: "£250",
    description:
      "A timeless design, with premium materials. Perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  },
];

const getProductById = (id: string): Product | null => {
  const productIndex = parseInt(id, 10);
  return PRODUCTS[productIndex] || null;
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const product = getProductById(params.id);
  const [count, setCount] = useState<number>(1);

  if (!product) return notFound();

  return (

    <div>


      <div className=" w-full h-[759px] flex ">
        <div className="w-6/12 h-full"><Image src={product.Pic} alt={product.PName} height={700} width={700} className="w-full h-full bg-cover bg-no-repeat"></Image></div>
        <div className="w-6/12 h-full flex justify-center items-center">
        <div className="w-[602px] h-[657px] ">
          <div className="w-[281px] h-[89px] mt-10 ml-10 text-[#2A254B]">
              <h3 className="text-4xl">{product.PName}</h3>
              <h4 className="text-2xl mt-5">{product.pPrice}</h4>
              <h5 className="mt-8">Product description</h5>
        <p className="text-sm w-[498px] mt-4 max-w-xl">{product.description}</p>

        <ul className="list-disc pl-[16px] mt-4 text-sm">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>

        <div className="h-[94px] w-[360px] mt-8">
          <h5>Dimensions</h5>
          <div className="flex justify-between">
            {["Height", "Width", "Depth"].map((dim) => (
              <div key={dim} className="w-[43px] h-14 text-sm mt-4 flex flex-col">
                <h6>{dim}</h6>
                <h6>110cm</h6>
              </div>
            ))}
          </div>
              </div>

              <div className="flex gap-20">

        <div className="w-full ">
          <div className="flex items-center pr- justify-center mt-2">
            <div className="bg-[#F9F9F9] w-[360px] h-[56px] flex items-center gap-8 justify-center">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                className="text-[#CAC6DA]"
              >
                -
              </button>
              {count}
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="text-[#CAC6DA]"
              >
                +
              </button>
            </div>
          </div>
        </div>      

        <Link href="/productListing">
          <div className="w-full flex justify-center pr-5 mt-3 md:mt-2 md:mb-4">
            <button className="w-[143px] h-[56px] text-white bg-[#4E4D93] text-sm">
              Add to cart
            </button>
          </div>
        </Link></div>
          </div>
        </div>
        </div>
      </div>

      <NewCeramics />
      <Diffrence/>
      <Join/>

    <div className="h-auto w-full md:hidden">
      <div className="flex w-full justify-center md:justify-start md:w-6/12">
        <Image src={product.Pic} alt={product.PName} width={390} height={380} />
      </div>

      <div className="pl-[22px] text-[#2A254B]">
        <h3 className="text-2xl font-semibold mt-4">{product.PName}</h3>
        <p className="text-xl mt-4">{product.pPrice}</p>

        <h5 className="mt-8">Product description</h5>
        <p className="text-sm w-[360px] mt-4 max-w-xl">{product.description}</p>

        <ul className="list-disc pl-[16px] mt-4 text-sm">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>

        <div className="h-[94px] w-[360px] mt-8">
          <h5>Dimensions</h5>
          <div className="flex justify-between">
            {["Height", "Width", "Depth"].map((dim) => (
              <div key={dim} className="w-[43px] h-14 text-sm mt-4 flex flex-col">
                <h6>{dim}</h6>
                <h6>110cm</h6>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-8">
          <h5>Quantity</h5>
          <div className="flex items-center pr-5 justify-center mt-4">
            <div className="bg-[#F9F9F9] w-[360px] h-[46px] flex items-center gap-8 justify-center">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                className="text-[#CAC6DA]"
              >
                -
              </button>
              {count}
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="text-[#CAC6DA]"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Link href="/productListing">
          <div className="w-full flex justify-center pr-5 mt-3 md:mt-2 md:mb-4">
            <button className="w-[360px] md:w-[170px] h-[56px] text-white bg-[#4E4D93] text-sm">
              Add to cart
            </button>
          </div>
        </Link>

        <h6 className="text-xl mt-28">You might also like</h6>
        <div className="w-full flex justify-center mt-4 pr-20">
          <div className="w-[355px] grid grid-cols-2 gap-[110px]">
            {PRODUCTS.map((newItem, index) => (
              <Link href={`/product/${index}`} key={index}>
                <div className="w-[173px] h-[201px]">
                  <Image
                    src={newItem.Pic}
                    alt={newItem.PName}
                    width={163}
                    height={201}
                  />
                  <h4 className="text-[20px] mt-4">{newItem.PName}</h4>
                  <p className="text-sm mt-2">{newItem.pPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View Collection Button */}
        <Link href="/productListing">
          <div className="w-full flex justify-center mt-28 md:mt-2 md:mb-4">
            <button className="w-[360px] md:w-[170px] h-[56px] text-black bg-[#f9f9f9] text-sm">
              View collection
            </button>
          </div>
        </Link>

        {/* Additional Sections */}
        <Diffrence />
        <Join />
      </div>
      </div>
      
      </div>
  );
};

export default ProductDetail;
