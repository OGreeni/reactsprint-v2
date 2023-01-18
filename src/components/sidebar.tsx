import React from "react";

export default function Sidebar() {
  return (
    <div className="h-full rounded-l border-y border-l border-primary p-2">
      <div className="flex h-1/2 flex-col justify-around border-b border-primary text-center">
        <div className="text-md font-bold">Categories</div>
        <ul className="flex flex-col gap-1">
          <li>
            <button className="btn-outline btn-primary btn-sm btn text-xs">
              Category
            </button>
          </li>
          <li>
            <button className="btn-outline btn-primary btn-sm btn text-xs">
              Category
            </button>
          </li>
          <li>
            <button className="btn-outline btn-primary btn-sm btn text-xs">
              Category
            </button>
          </li>
          <li>
            <button className="btn-outline btn-primary btn-sm btn text-xs">
              Category
            </button>
          </li>
          <li>
            <button className="btn-outline btn-primary btn-sm btn text-xs">
              Category
            </button>
          </li>
        </ul>
      </div>
      <div className="flex h-1/2 flex-col justify-around text-center">
        <div className="text-md font-bold">Difficulty</div>
        <ul className="flex flex-col gap-1">
          <li>
            <button className="btn-outline btn-success btn-sm btn text-xs">
              Easy
            </button>
          </li>
          <li>
            <button className="btn-outline btn-warning btn-sm btn text-xs">
              Medium
            </button>
          </li>
          <li>
            <button className="btn-outline btn-error btn-sm btn text-xs">
              Hard
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
