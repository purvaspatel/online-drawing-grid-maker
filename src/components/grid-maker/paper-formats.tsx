// src/components/grid-maker/paper-formats.tsx
"use client";

import { PaperFormat } from "@/types";

const PAPER_FORMATS: PaperFormat[] = [
  { name: "A2", width: 420, height: 594, unit: "mm" },
  { name: "A3", width: 297, height: 420, unit: "mm" },
  { name: "A4", width: 210, height: 297, unit: "mm" },
  { name: "A5", width: 148, height: 210, unit: "mm" },
  { name: "Letter", width: 216, height: 279, unit: "mm" },
  { name: "Legal", width: 216, height: 356, unit: "mm" },
  { name: "Custom", width: 0, height: 0, unit: "mm" }
];

interface PaperFormatsProps {
  selectedFormat: PaperFormat;
  onFormatChange: (format: PaperFormat) => void;
}

export default function PaperFormats({ selectedFormat, onFormatChange }: PaperFormatsProps) {
  const isCustom = selectedFormat.name === "Custom";

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formatName = e.target.value;
    const format = PAPER_FORMATS.find(f => f.name === formatName);
    
    if (format) {
      onFormatChange(format);
    }
  };

  const handleCustomDimensionChange = (dimension: 'width' | 'height', value: number) => {
    if (isCustom) {
      onFormatChange({
        ...selectedFormat,
        [dimension]: value
      });
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Paper Format</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="paperFormat" className="block text-sm font-medium mb-2">
            Select Format
          </label>
          <select
            id="paperFormat"
            value={selectedFormat.name}
            onChange={handleFormatChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {PAPER_FORMATS.map((format) => (
              <option key={format.name} value={format.name}>
                {format.name} {format.name !== "Custom" ? `(${format.width}x${format.height}${format.unit})` : ""}
              </option>
            ))}
          </select>
        </div>
        
        {isCustom && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="customWidth" className="block text-sm font-medium mb-2">
                Width ({selectedFormat.unit})
              </label>
              <input
                id="customWidth"
                type="number"
                value={selectedFormat.width || ""}
                onChange={(e) => handleCustomDimensionChange('width', parseInt(e.target.value) || 0)}
                min="1"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="customHeight" className="block text-sm font-medium mb-2">
                Height ({selectedFormat.unit})
              </label>
              <input
                id="customHeight"
                type="number"
                value={selectedFormat.height || ""}
                onChange={(e) => handleCustomDimensionChange('height', parseInt(e.target.value) || 0)}
                min="1"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}