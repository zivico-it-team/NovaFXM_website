import React from "react";

const IndicesPage = () => {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1642790106117-e829e14a1a23?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Indices</h1>
          <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl">
            Unlock a Wide Range of Indices from the World’s Leading Economies with AS Markets
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE SECTION */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1642543492481-44e81e391c50?auto=format&fit=crop&w=800&q=80"
              alt="indices chart"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Elevate Your Trading Experience with{" "}
              <span className="text-green-600">
                Key Global Indices at Zivico Solutions
              </span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Stock market indices offer a powerful overview of market performance
              by tracking the collective value of selected stocks. These benchmarks
              provide deep insights into market trends, economic conditions, and
              sector growth. From major global indices to top-performing economies,
              indices help traders understand the bigger financial picture and make
              smarter investment decisions.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-3 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Market Exposure
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Simplicity
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span> High Liquidity
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndicesPage;