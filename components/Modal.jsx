import React from "react";
import Image from "next/image";

const Modal = ({ info, setModal }) => {
  return (
    <div className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen m-3 w-full xl:max-w-xl overflow-auto bg-white  shadow-md">
      <div
        onClick={() => setModal(false)}
        className="absolute right-10 top-5 text-lg font-bold cursor-pointer "
      >
        X
      </div>
      <div className=" h-full flex flex-col items-center justify-between p-5">
        <div className="w-1/2">
          <Image
            src={info.image}
            width={200}
            height={200}
            className="w-64 h-64 object-contain mx-auto"
            alt="Product Image"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5 p-5">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {info.title}
          </h2>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {info.rating.rate}/ 5.0
            </span>
            <span className="text-sm">({info.rating.count} Ratings)</span>
          </div>
          <span className="text-3xl font-bold text-gray-900">
            ${info.price}
          </span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
            Add to Cart
          </button>
        </div>

        <div className="w-1/2">
          <p className="text-md font-semibold">Description:</p>
          <p className="text-sm text-justify">{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
