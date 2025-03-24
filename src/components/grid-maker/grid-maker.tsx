// src/components/grid-maker/grid-maker.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import ImageUploader from "./image-uploader";
import GridControls from "./grid-controls";
import GridPreview from "./grid-preview";
import PaperFormats from "./paper-formats";
import { GridSettings, PaperFormat } from "@/types";

export default function GridMaker() {
  const [image, setImage] = useState<string | null>(null);
  const [originalImageDimensions, setOriginalImageDimensions] = useState({ width: 0, height: 0 });
  
  const [gridSettings, setGridSettings] = useState<GridSettings>({
    rows: 3,
    columns: 3,
    lineColor: "#000000",
    lineOpacity: 0.5,
    lineWidth: 1,
    showLabels: true,
    gridType: "rule-of-thirds", // "rule-of-thirds" or "square"
    adjustImageToFit: true,
  });
  
  const [selectedPaperFormat, setSelectedPaperFormat] = useState<PaperFormat>({
    name: "A4",
    width: 210,
    height: 297,
    unit: "mm"
  });

  const handleImageUpload = (imageDataUrl: string) => {
    setImage(imageDataUrl);
    
    // Get original image dimensions
    const img = new Image();
    img.onload = () => {
      setOriginalImageDimensions({
        width: img.width,
        height: img.height
      });
    };
    img.src = imageDataUrl;
  };

  const updateGridSettings = (newSettings: Partial<GridSettings>) => {
    setGridSettings(prev => ({ ...prev, ...newSettings }));
  };

  const handlePaperFormatChange = (format: PaperFormat) => {
    setSelectedPaperFormat(format);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Artist Grid Maker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ImageUploader onImageUpload={handleImageUpload} />
          
          {image && (
            <>
              <GridControls 
                gridSettings={gridSettings}
                onSettingsChange={updateGridSettings}
              />
              
              <PaperFormats 
                selectedFormat={selectedPaperFormat}
                onFormatChange={handlePaperFormatChange}
              />
            </>
          )}
        </div>
        
        <div className="lg:col-span-2">
          {image ? (
            <GridPreview 
              image={image}
              gridSettings={gridSettings}
              paperFormat={selectedPaperFormat}
              originalDimensions={originalImageDimensions}
            />
          ) : (
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Upload an image to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}