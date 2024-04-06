import Image from "next/image";

const Card = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: Item) => {
  return (
    <div className="flex flex-col w-72 h-64 my-7 mx-4 overflow-hidden rounded-md relative">
      {popular ? <div className="label">Popular</div> : ""}

      <Image
        alt="card image"
        width={320}
        height={260}
        src={`${image}`}
        className="bg-no-repeat h-3/4 w-full object-cover rounded-md"
      />
      <div className="">
        <div className=" w-full flex items-center justify-between mt-2">
          <p className="font-semibold text-lg">{name}</p>
          <div className="bg-custom-teal text-custom-black font-bold text-[0.75rem] px-2 py-1 rounded">
            {price}
          </div>
        </div>
        <div className=" w-full flex justify-between items-center">
          <div className=" flex my-2.5 font-semibold">
            {rating ? (
              <>
                <Image
                  alt="star"
                  width={24}
                  height={24}
                  src={"/star_fill.svg"}
                />
                <p>
                  {rating}
                  <span className="text-sm mx-1 text-custom-light-gray">{`(${votes} votes)`}</span>
                </p>
              </>
            ) : (
              <>
                <Image alt="star" width={24} height={24} src={"/star.svg"} />
                <p>
                  <span className="text-sm mx-1 text-custom-light-gray">
                    No ratings
                  </span>
                </p>
              </>
            )}
          </div>
          <div className="font-semibold text-sm text-custom-red ">
            {available ? "" : "Sold out"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
