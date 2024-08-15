import React from "react";

const Main = () => {
  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16  mx-auto text-center  md:px-10 lg:px-32 dark:text-black">
          <h1 className="text-5xl font-serif leading-none sm:text-6xl xl:max-w-3xl dark:text-black">
            Find and Discover Players{" "}
          </h1>
          <h1 className="text-5xl font-serif leading-none sm:text-6xl xl:max-w-3xl dark:text-red-900 mt-3">
            Near You
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:black font-semibold">
            Best Free Website to Find and discover game partner/player near you
            for yor fav game
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
