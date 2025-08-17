"use client";

import { useSearchParams } from "next/navigation";

export const CategoryParams = () => {
    const params = useSearchParams();
    const category = params.getAll("c");
    // console.log("Category Params:", category);
  return (
    <div>
      <h1>Category Parameters</h1>
      <p>Selected Category: {category.join(", ")}</p>
    </div>
  );
}
