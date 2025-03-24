// src/components/grid-maker/image-uploader.tsx
"use client";

import { useState, useRef } from "react";

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        onImageUpload(e.target.result);
      }
    };
    
    reader.readAsDataURL(file);
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="border-2 border-dashed rounded-lg p-6 bg-gray-50">
      <form 
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
        className={`h-32 flex flex-col items-center justify-center ${dragActive ? 'bg-blue-50 border-blue-300' : ''}`}
      >
        <input
          ref={inputRef}
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">Drag and drop your image here or click to browse</p>
          <button 
            type="button"
            onClick={onButtonClick}
          >
            Upload Image
          </button>
        </div>
        
        {dragActive && (
          <div
            className="absolute inset-0 h-full w-full"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
      </form>
    </div>
  );
}