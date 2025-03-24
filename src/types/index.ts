// src/types/index.ts

export interface GridSettings {
    rows: number;
    columns: number;
    lineColor: string;
    lineOpacity: number;
    lineWidth: number;
    showLabels: boolean;
    gridType: "rule-of-thirds" | "square";
    adjustImageToFit: boolean;
  }
  
  export interface PaperFormat {
    name: string;
    width: number;
    height: number;
    unit: string;
  }