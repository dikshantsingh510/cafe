"use client";

import Image from "next/image";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import { useState, useEffect } from "react";
import { log } from "console";

// import data from "@/utils/data";

export default function Home() {
  const [data, setData] = useState<any>("");
  const [availableNow, setAvailableNow] = useState(false);
  async function getData() {
    let response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    response = await response.json();
    // console.log(response);
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <>
      <section className="w-full min-h-screen relative flex justify-center py-28">
        <Image
          alt="background image"
          src={"/bg-cafe.jpg"}
          width={2000}
          height={600}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-no-repeat h-60 w-full object-cover z-0 "
        />
        <main
          className="relative w-[90%] max-w-[1280px] mt-14 py-24 rounded-lg z-5 bg-custom-gray box-border bg-no-repeat flex flex-col "
          style={{
            backgroundImage: `url('/vector.svg')`,
            backgroundPosition: " 70% 3% ",
          }}
        >
          <div className="flex flex-col items-center ">
            <h1 className="heading">Our Collection</h1>
            <p className="text-center w-[90%] sm:w-[80%] max-w-[600px] font-semibold text-custom-light-gray ">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>

          <nav className="flex justify-center items-center gap-3 my-5">
            <div
              className={`menu_btn ${
                availableNow ? "" : "bg-custom-light-gray"
              }`}
              onClick={() => setAvailableNow(false)}
            >
              All Products
            </div>
            <div
              className={`menu_btn ${
                availableNow ? "bg-custom-light-gray" : ""
              }`}
              onClick={() => setAvailableNow(true)}
            >
              Available Now
            </div>
          </nav>
          <div className=" flex justify-center items-center flex-wrap w-[90%] md:w-[95%] mx-auto mt-4">
            {data &&
              data.map(
                ({
                  id,
                  name,
                  image,
                  price,
                  rating,
                  votes,
                  popular,
                  available,
                }: Item) => {
                  if (availableNow) {
                    if (available)
                      return (
                        <Card
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          price={price}
                          rating={rating}
                          votes={votes}
                          popular={popular}
                          available={available}
                        />
                      );
                  } else {
                    return (
                      <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        price={price}
                        rating={rating}
                        votes={votes}
                        popular={popular}
                        available={available}
                      />
                    );
                  }
                }
              )}
            {/* {data.map(
              ({
                id,
                name,
                image,
                price,
                rating,
                votes,
                popular,
                available,
              }: Item) => (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                  rating={rating}
                  votes={votes}
                  popular={popular}
                  available={available}
                />
              )
            )} */}
          </div>
        </main>
      </section>
    </>
  );
}
