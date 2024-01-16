import React, { useState } from "react";

export default function Question(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[848px] border border-blue-500 rounded-xl mt-8 px-6 py-4 font-semibold text-base ">
      <div className=" flex justify-between items-center ">
        <div>{props.ques}</div>
        <div onClick={() => setShow(!show)} className="cursor-pointer">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          )}
        </div>
      </div>
      {show && <p>{props.info}</p>}
    </div>
  );
}
