"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="overflow-hidden">
      Home
    </div>
  );
}
