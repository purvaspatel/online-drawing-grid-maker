"use client";

import { GridSettings } from "@/types";

interface GridControlsProps {
  gridSettings: GridSettings;
  onSettingsChange: (settings: Partial<GridSettings>) => void;
}

export default function GridControls({ gridSettings, onSettingsChange }: GridControlsProps) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Grid Settings</h2>

      <div className="space-y-4">
        {/* Grid Type Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Grid Type</label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => onSettingsChange({ gridType: "rule-of-thirds" })}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                gridSettings.gridType === "rule-of-thirds"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Custom
            </button>
            
          </div>
        </div>

        {/* Row and Column Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="rows" className="block text-sm font-medium mb-2">
              Rows: {gridSettings.rows}
            </label>
            <input
              id="rows"
              type="range"
              min="2"
              max="26"
              value={gridSettings.rows}
              onChange={(e) => onSettingsChange({ rows: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="columns" className="block text-sm font-medium mb-2">
              Columns: {gridSettings.columns}
            </label>
            <input
              id="columns"
              type="range"
              min="2"
              max="26"
              value={gridSettings.columns}
              onChange={(e) => onSettingsChange({ columns: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Line Appearance Controls */}
        <div>
          <label htmlFor="lineColor" className="block text-sm font-medium mb-2">
            Line Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="lineColor"
              type="color"
              value={gridSettings.lineColor}
              onChange={(e) => onSettingsChange({ lineColor: e.target.value })}
              className="h-8 w-8 rounded cursor-pointer"
            />
            <span className="text-sm">{gridSettings.lineColor}</span>
          </div>
        </div>

        <div>
          <label htmlFor="lineOpacity" className="block text-sm font-medium mb-2">
            Line Opacity: {gridSettings.lineOpacity.toFixed(1)}
          </label>
          <input
            id="lineOpacity"
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={gridSettings.lineOpacity}
            onChange={(e) => onSettingsChange({ lineOpacity: parseFloat(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="lineWidth" className="block text-sm font-medium mb-2">
            Line Width: {gridSettings.lineWidth}px
          </label>
          <input
            id="lineWidth"
            type="range"
            min="1"
            max="5"
            value={gridSettings.lineWidth}
            onChange={(e) => onSettingsChange({ lineWidth: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Label Toggle */}
        <div className="flex items-center">
          <input
            id="showLabels"
            type="checkbox"
            checked={gridSettings.showLabels}
            onChange={(e) => onSettingsChange({ showLabels: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="showLabels" className="ml-2 block text-sm">
            Show Grid Labels (A1, B2, etc.)
          </label>
        </div>

        {/* Image Adjustment Toggle */}
        <div className="flex items-center">
          <input
            id="adjustImageToFit"
            type="checkbox"
            checked={gridSettings.adjustImageToFit}
            onChange={(e) => onSettingsChange({ adjustImageToFit: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="adjustImageToFit" className="ml-2 block text-sm">
            Adjust Image to Fit Grid
          </label>
        </div>
      </div>
    </div>
  );
}
