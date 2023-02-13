import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex justify-center items-center my-5">
        <button className="w-36 text-lg font-semibold border border-secondaryText text-secondaryText rounded-2xl bg-secondary">
          Buy
        </button>
      </div>

      {/* About */}
      <div className="">
        <h4 className="text-md font-medium">About</h4>
        <p className="text-sm">
          CoCos is a minimalist Pot Stand for big, small & even rectangular
          pots. It's distinct geometry with V-bends gives it a contemporary
          style and high strength. A fuss free method to make sure your garden
          tiles remain stain-free.
        </p>
      </div>

      {/* Specifications */}
      <div className="mt-2">
        <h4 className="text-md font-medium">Specifications</h4>
        <table className="text-sm">
          <tbody>
            <tr>
              <td>Weight:</td>
              <td>2 kg</td>
            </tr>
            <tr>
              <td>Dimensions:</td>
              <td>45 × 22.5 × 15 cm</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>
                <div className="flex">
                  <div className="mr-1 border border-black rounded-full bg-white w-4 aspect-square"></div>
                  <div className="mr-1 border border-black rounded-full bg-secondaryText w-4 aspect-square"></div>
                  <div className="mr-1 border border-black rounded-full bg-green-600 w-4 aspect-square"></div>
                  <div className="mr-1 border border-black rounded-full bg-secondary w-4 aspect-square"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Installation Type:</td>
              <td>Floor Mounted</td>
            </tr>
            <tr>
              <td>Load Capacity:</td>
              <td>50 kg?/Coco</td>
            </tr>
            <tr>
              <td>Product:</td>
              <td>380 grams</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Content;
