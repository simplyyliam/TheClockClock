import { useEffect, useRef, useState } from "react";


interface Dimension {
    width: number
    height: number
}

export default function ClockContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimension, setdimension] = useState<Dimension>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleBoundings = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      setdimension({width: w, height: h});
      console.log("Width: ", w);
    };

    handleBoundings();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center border border-black/25 w-25 h-25 relative"
    >
      <span
        className={`bg-black h-2 absolute right-0`}
        style={{ width: dimension.width / 2 }}
      />
      <span
        className={`bg-black w-2 absolute bottom-0`}
        style={{ height: dimension.height / 2 }}
      />
    </div>
  );
}
