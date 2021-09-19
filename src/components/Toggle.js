import React from "react";

const Toggle = (preps) => {
  return (
    <div className="inline-block relative w-64 mb-2">
      <label className="block font-bold">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          {...preps.toggle}
        />
        <span className="text-sm">Show Line Numbers</span>
      </label>
    </div>
  );
};

export default Toggle;
