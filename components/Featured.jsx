import React from "react";
import { craftsmanship } from "@constants/index";
const Featured = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">
              Featured craftsmanship's{" "}
            </h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Unveil the pinnacle of human skill and ingenuity through our
              curated selection, where diverse craftsmanship types come together
              to inspire, captivate, and celebrate the art of creation.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {craftsmanship.map((e, index) => (
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt={e.name}
                  src={e.logo}
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "250px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">{e.name}</h5>
                  <button className="mt-1 text-sm text-gray-500 font-semibold hover:text-rose-500">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
