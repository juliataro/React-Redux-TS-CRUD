import React, { useRef } from "react";
import { addPerson } from "../../redux/features/personSlice";

import { useAppDispatch } from "../../redux/hooks";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="firstName">Person Name:</label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
        id="firstName"
      />
      <button
        onClick={() => dispatch(addPerson({ name: name.current }))}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </div>
  );
};

export default Add;
