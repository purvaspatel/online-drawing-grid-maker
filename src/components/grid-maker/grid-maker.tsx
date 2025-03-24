// src/components/grid-maker/grid-maker.tsx
"use client";

import { useState } from "react";
import ImageUploader from "./image-uploader";
import GridPreview from "./grid-preview";
import { GridSettings, PaperFormat } from "@/types";
import NextImage from "next/image";
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
    const img = new window.Image();
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
    <div className="container mx-auto p-4 ">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {!image ? (
            <ImageUploader onImageUpload={handleImageUpload} />
          ) : (
            <div className="space-y-4">
              <div className="border rounded-[2] p-4 bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

                {/* Unified controls panel */}
                <div className="space-y-6">
                  {/* Grid Controls Section */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-3">Grid Settings</h3>

                    {/* Grid Type Selection */}
                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-2">Grid Type</label>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => updateGridSettings({ gridType: "rule-of-thirds" })}
                          className={`flex-1 px-3 py-1 rounded-lg text-sm font-medium transition ${gridSettings.gridType === "rule-of-thirds"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "border border-gray-400 text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                          Custom
                        </button>
                      </div>
                    </div>

                    {/* Row and Column Controls */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="rows" className="block text-sm font-medium mb-1">
                          Rows: {gridSettings.rows}
                        </label>
                        <input
                          id="rows"
                          type="range"
                          min="2"
                          max="26"
                          value={gridSettings.rows}
                          onChange={(e) => updateGridSettings({ rows: parseInt(e.target.value) })}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <label htmlFor="columns" className="block text-sm font-medium mb-1">
                          Columns: {gridSettings.columns}
                        </label>
                        <input
                          id="columns"
                          type="range"
                          min="2"
                          max="26"
                          value={gridSettings.columns}
                          onChange={(e) => updateGridSettings({ columns: parseInt(e.target.value) })}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Line Appearance Controls */}
                    <div className="mb-3">
                      <label htmlFor="lineColor" className="block text-sm font-medium mb-1">
                        Line Color
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          id="lineColor"
                          type="color"
                          value={gridSettings.lineColor}
                          onChange={(e) => updateGridSettings({ lineColor: e.target.value })}
                          className="h-8 w-8 rounded cursor-pointer"
                        />
                        <span className="text-sm">{gridSettings.lineColor}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lineOpacity" className="block text-sm font-medium mb-1">
                        Line Opacity: {gridSettings.lineOpacity.toFixed(1)}
                      </label>
                      <input
                        id="lineOpacity"
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={gridSettings.lineOpacity}
                        onChange={(e) => updateGridSettings({ lineOpacity: parseFloat(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lineWidth" className="block text-sm font-medium mb-1">
                        Line Width: {gridSettings.lineWidth}px
                      </label>
                      <input
                        id="lineWidth"
                        type="range"
                        min="1"
                        max="5"
                        value={gridSettings.lineWidth}
                        onChange={(e) => updateGridSettings({ lineWidth: parseInt(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    {/* Option Toggles */}
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="showLabels"
                          type="checkbox"
                          checked={gridSettings.showLabels}
                          onChange={(e) => updateGridSettings({ showLabels: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="showLabels" className="ml-2 block text-sm">
                          Show Grid Labels (A1, B2, etc.)
                        </label>
                      </div>

                      
                    </div>
                  </div>

                  {/* Paper Format Section */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-3">Paper Format</h3>
                    <p className="font-medium mb-3">Select your drawing paper size (mm)</p>

                    <div className="mb-3">
                      <label htmlFor="paperFormat" className="block text-sm font-medium mb-2">
                        Select Format
                      </label>
                      <select
                        id="paperFormat"
                        value={selectedPaperFormat.name}
                        onChange={(e) => {
                          const formatName = e.target.value;
                          // Find the format in your PAPER_FORMATS array
                          // This is a simplified version - you'll need to access your actual formats
                          const formats = [
                            { name: "A2", width: 420, height: 594, unit: "mm" },
                            { name: "A3", width: 297, height: 420, unit: "mm" },
                            { name: "A4", width: 210, height: 297, unit: "mm" },
                            { name: "A5", width: 148, height: 210, unit: "mm" },
                            { name: "Letter", width: 216, height: 279, unit: "mm" },
                            { name: "Legal", width: 216, height: 356, unit: "mm" },
                            { name: "Custom", width: 0, height: 0, unit: "mm" }
                          ];
                          const format = formats.find(f => f.name === formatName);
                          if (format) handlePaperFormatChange(format);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="A2">A2 (420x594mm)</option>
                        <option value="A3">A3 (297x420mm)</option>
                        <option value="A4">A4 (210x297mm)</option>
                        <option value="A5">A5 (148x210mm)</option>
                        <option value="Letter">Letter (216x279mm)</option>
                        <option value="Legal">Legal (216x356mm)</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>

                    {selectedPaperFormat.name === "Custom" && (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="customWidth" className="block text-sm font-medium mb-1">
                            Width ({selectedPaperFormat.unit})
                          </label>
                          <input
                            id="customWidth"
                            type="number"
                            value={selectedPaperFormat.width || ""}
                            onChange={(e) => handlePaperFormatChange({ ...selectedPaperFormat, width: parseInt(e.target.value) || 0 })}
                            min="1"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="customHeight" className="block text-sm font-medium mb-1">
                            Height ({selectedPaperFormat.unit})
                          </label>
                          <input
                            id="customHeight"
                            type="number"
                            value={selectedPaperFormat.height || ""}
                            onChange={(e) => handlePaperFormatChange({ ...selectedPaperFormat, height: parseInt(e.target.value) || 0 })}
                            min="1"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Upload Section */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium mb-3">Image</h3>
                    <button
                      onClick={() => setImage(null)}
                      className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition text-sm"
                    >
                      Upload Another Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="h-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <NextImage
                src="/purvagridmakerpreview.gif"
                alt="Website Interface Preview"
                className="w-full h-full object-contain p-2"
              />
            </div>

          )}
        </div>
      </div>
    </div>
  );
}