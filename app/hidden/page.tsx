import React from "react";


const HiddenPage = () => {
  return (
    <div className="min-h-screen mt-5">
    

      <main className="container mx-auto flex flex-col justify-center items-center mt-5">
        <h1 className="text-5xl tracking-tight font-extrabold text-gray-300 mt-5">
          Yohoo!!
        </h1>
        <h2 className="text-3xl text-gray-500">
          You have <span className="font-bold">Started</span>.
        </h2>
        <p className="">
          You have been signed in{" "}
          <span className="font-semibold text-green-400 text-xl">
            successfully
          </span>
          !
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         
        </div>
      </main>
    </div>
  );
};

export default HiddenPage;
