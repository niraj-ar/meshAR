import React from "react";
import { Link } from "react-router-dom";

const SliderCard = ({
  id,
  name,
  poster,
  src,
  place,
  setSrc,
  setName,
  setPlace,
  setPoster,
}) => {
  const handleChange = () => {
    setName(name);
    setPoster(poster);
    setSrc(src);
    setPlace(place);
  };

  return (
    <>
      <Link to={"/" + id}>
        <div
          className="w-24 h-28 overflow-hidden border border-solid rounded-2xl flex jusify-center items-center relative bg-white cursor-pointer border-secondaryText"
          onClick={handleChange}
        >
          <img
            src={poster}
            className="h-24 w-32 mb-2 object-scale-down absolute object-center"
            alt={name}
          />
          <div
            className="w-full bottom-0 rounded-xl bg-error absolute border-l border-t border-r flex h-6 justify-between items-center"
            style={{ borderColor: "#A10C1B" }}
          >
            <h4 className="ml-2 font-bold text-black text-xs truncate">
              {name}
            </h4>
            <span
              className="mr-2 mt-px w-4 h-4 text-center rounded-full flex justify-center items-center"
              style={{
                fontSize: "10px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "white",
                background: "#A10C1B",
              }}
            >
              {place === "floor" ? "F" : "W"}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SliderCard;
