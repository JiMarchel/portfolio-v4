"use client";

import React, { useEffect, useState } from "react";
import AnimatedTags from "./smoothui/animated-tags";
import { useRouter } from "next/navigation";

interface SelectCategoryProps {
  initialTags: string[];
}

const SelectCategory = ({ initialTags }: SelectCategoryProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (selected.length > 0) {
      const params = new URLSearchParams();
      selected.forEach((tag) => params.append("c", tag));
      router.push(`/blog?${params.toString()}`);
    } else {
      router.push("/blog");
    }
  }, [selected]);
  
  return (
    <div>
      <AnimatedTags
        initialTags={initialTags}
        selectedTags={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default SelectCategory;
