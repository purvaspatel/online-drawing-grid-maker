"use client";

import { useRef, useEffect, useState } from "react";

interface ImageFilterProps {
  image: string; // Image URL
}

export default function ImageFilter({ image }: ImageFilterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [grayscale, setGrayscale] = useState<number>(100); // Default: Full Black & White

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // Prevent CORS issues
    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the original image
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Apply grayscale filter
      applyFilter(ctx, canvas.width, canvas.height, grayscale);
    };

    img.src = image;
  }, [image, grayscale]);

  const applyFilter = (ctx: CanvasRenderingContext2D, width: number, height: number, grayscale: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3; // Convert to grayscale
      const intensity = (grayscale / 100) * avg;
      data[i] = intensity; // Red
      data[i + 1] = intensity; // Green
      data[i + 2] = intensity; // Blue
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Image Filter</h2>

      {/* Image Preview */}
      <div className="bg-gray-100 rounded-lg p-2 flex justify-center">
        <canvas ref={canvasRef} className="max-w-full max-h-[600px] bg-white shadow-sm" />
      </div>

      {/* Grayscale Control */}
      <div className="mt-4">
        <label htmlFor="grayscale" className="block text-sm font-medium mb-2">
          Grayscale: {grayscale}%
        </label>
        <input
          id="grayscale"
          type="range"
          min="0"
          max="100"
          value={grayscale}
          onChange={(e) => setGrayscale(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
