"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [products, setProducts] = useState([]);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="p-10 flex flex-col items-center gap-5">
        <input
          type="text"
          onChange={handleInput}
          value={search}
          placeholder="Search Products..."
          className="border w-96 outline-none p-2 rounded-md"
        />
        <hr className="bg-gray-300 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setModal(true);
                setProductInfo(product);
              }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between"
            >
              <span className="grid place-items-center min-h-1/2 ">
                <Image
                  className="w-40 h-40 object-contain mx-auto p-3"
                  src={product.image}
                  width={200}
                  height={200}
                  alt="product image"
                />
              </span>
              <div className="px-5 pb-5">
                <span>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                </span>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {product.rating.rate}/ 5.0
                    </span>
                    <span className="text-sm">
                      ({product.rating.count} Ratings)
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </span>
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && <h1>No Product Found</h1>}
        </div>
        {modal && <Modal info={productInfo} setModal={setModal} />}
      </div>
    </>
  );
}
