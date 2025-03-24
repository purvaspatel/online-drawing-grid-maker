// src/components/grid-maker/grid-preview.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { GridSettings, PaperFormat } from "@/types";

interface GridPreviewProps {
  image: string;
  gridSettings: GridSettings;
  paperFormat: PaperFormat;
  originalDimensions: { width: number; height: number };
}

export default function GridPreview({
  image,
  gridSettings,
  paperFormat,
  originalDimensions
}: GridPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [isGrayscale, setIsGrayscale] = useState<boolean>(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;


    const img = new Image();
    img.onload = () => {
      // Calculate canvas dimensions while maintaining aspect ratio
      let canvasWidth = 800; // Max width
      let canvasHeight;

      // Determine if we're forcing square grid
      if (gridSettings.gridType === "square" && gridSettings.adjustImageToFit) {
        // For square grid, make sure we have the proper aspect ratio
        const aspectRatio = gridSettings.columns / gridSettings.rows;
        canvasHeight = canvasWidth / aspectRatio;
      } else {
        // For rule of thirds or when not adjusting, maintain original aspect ratio
        const aspectRatio = img.width / img.height;
        canvasHeight = canvasWidth / aspectRatio;
      }




      // Set canvas dimensions
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);



      if (isGrayscale) {
        applyGrayscaleFilter(ctx, canvas.width, canvas.height);
      }

      // Draw grid
      drawGrid(ctx, canvas.width, canvas.height);

      // Update download URL
      setDownloadUrl(canvas.toDataURL("image/png"));
    };

    img.src = image;
  }, [image, gridSettings, paperFormat, originalDimensions, isGrayscale]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const { rows, columns, lineColor, lineOpacity, lineWidth, showLabels } = gridSettings;

    // Set line style
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;

    // Draw vertical lines
    const columnWidth = width / columns;
    for (let i = 1; i < columns; i++) {
      const x = i * columnWidth;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    const rowHeight = height / rows;
    for (let i = 1; i < rows; i++) {
      const y = i * rowHeight;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Add labels if enabled
    if (showLabels) {
      drawLabels(ctx, width, height, rows, columns);
    }

    // Reset opacity
    ctx.globalAlpha = 1;
  };

  const drawLabels = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    rows: number,
    columns: number
  ) => {
    const columnWidth = width / columns;
    const rowHeight = height / rows;
  
    // Set text style
    ctx.font = "14px Arial";
    ctx.fillStyle = gridSettings.lineColor;
    ctx.textAlign = "left";  // Align text to the left
    ctx.textBaseline = "bottom";  // Align text to the bottom
  
    // Draw labels at the bottom-left of each cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const x = col * columnWidth + 4; // Small left offset for padding
        const y = (row + 1) * rowHeight - 4; // Small bottom offset
  
        // Create label (A1, A2, etc.)
        const rowLabel = String.fromCharCode(65 + row); // A, B, C, ...
        const colLabel = col + 1; // 1, 2, 3, ...
        const label = `${rowLabel}${colLabel}`;
  
        ctx.fillText(label, x, y);
      }
    }
  };
  

  const handleDownload = () => {
    if (!downloadUrl) return;

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "grid-image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  };
  const applyGrayscaleFilter = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // Red
      data[i + 1] = avg; // Green
      data[i + 2] = avg; // Blue
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <div className="border rounded-[2] p-4 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Grid Preview</h2>
        <button
          onClick={() => setIsGrayscale((prev) => !prev)}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg mr-20"
        >
          {isGrayscale ? "Revert to Original Color" : "Convert to Black & White"}
        </button>
        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={handleDownload}
          disabled={!downloadUrl}
        >
          Download Grid Image
        </button>

      </div>

      <div className="bg-gray-100 rounded-lg p-2 flex flex-col md:flex-row gap-6 items-center">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-[600px] bg-white shadow-sm"
        />
        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
          <h3 className="font-medium mb-2">Printing Guide</h3>
          <p>For a {paperFormat.name} print ({paperFormat.width}×{paperFormat.height}{paperFormat.unit}):</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Draw {gridSettings.columns - 1} vertical lines at {(paperFormat.width / gridSettings.columns).toFixed(1)}{paperFormat.unit} intervals</li>
            <li>Draw {gridSettings.rows - 1} horizontal lines at {(paperFormat.height / gridSettings.rows).toFixed(1)}{paperFormat.unit} intervals</li>
            {gridSettings.showLabels && (
              <li>Label each cell from A1 to {String.fromCharCode(64 + gridSettings.rows)}{gridSettings.columns}</li>
            )}
          </ul>
        </div>
      </div>




    </div>
  );
}