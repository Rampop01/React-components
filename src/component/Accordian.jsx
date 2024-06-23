import React, { useState } from "react";
import data from "./Data";

function Accordian() {
  const [selected, setSelected] = useState(true);
  function handleSelectedItem(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  return (
    <div>
      <div className="flex flex-col  justify-center h-screen bg-gray-900 text-white ">
        <h1 className="uppercase italic text-5xl underline  flex items-center justify-center mb-4">
          Accordian
        </h1>
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="border  border-b-gray-300 p-4">
              <div className="flex gap-4 mt-4 justify-between ">
                <div className="">{dataItems.title}</div>
                <span
                  onClick={() => handleSelectedItem(dataItems.id)}
                  className=""
                >
                  👁‍🗨
                </span>
              </div>
              {selected === dataItems.id ? (
                <div>{dataItems.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
}

export default Accordian;
