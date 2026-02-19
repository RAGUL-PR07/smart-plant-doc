import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Loader2, Zap } from 'lucide-react';
import { detectDisease } from '../services/diseaseDetection';
import { DetectionResult } from '../types';

interface DetectionProps {
  setDetectionResult: (result: DetectionResult) => void;
}

const Detection: React.FC<DetectionProps> = ({ setDetectionResult }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const result = await detectDisease(selectedImage);
    setDetectionResult(result);
    setIsAnalyzing(false);
    navigate('/results');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Disease Detection</h1>
        <p className="text-lg text-gray-600 mb-8">
          Upload a photo of your plant's leaf or capture one using your camera for AI-powered disease analysis
        </p>
      </div>

      {/* Algorithm Info */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-800">AI Detection Algorithms</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">CNN</h3>
            <p className="text-sm text-green-600">Convolutional Neural Network for image pattern recognition</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">KVM</h3>
            <p className="text-sm text-blue-600">Kernel Vector Machine for feature classification</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">KNN</h3>
            <p className="text-sm text-purple-600">K-Nearest Neighbors for similarity matching</p>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
        {!selectedImage ? (
          <div className="text-center">
            <div className="border-2 border-dashed border-green-300 rounded-xl p-12 hover:border-green-400 transition-colors">
              <Camera className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Plant Image</h3>
              <p className="text-gray-600 mb-6">Choose an image file or take a photo</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Upload className="h-5 w-5" />
                  <span>Upload Image</span>
                </button>
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Camera className="h-5 w-5" />
                  <span>Take Photo</span>
                </button>
              </div>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src={selectedImage}
                alt="Selected plant"
                className="max-w-md max-h-64 object-contain rounded-lg shadow-md"
              />
            </div>
            
            <div className="text-center space-y-4">
              <button
                onClick={analyzeImage}
                disabled={isAnalyzing}
                className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span>Analyzing with AI Algorithms...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-6 w-6" />
                    <span>Analyze Image</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => {
                  setSelectedImage(null);
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="block mx-auto text-gray-600 hover:text-gray-800 transition-colors"
              >
                Choose Different Image
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Analysis in Progress</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CNN Pattern Recognition</span>
              <span className="text-sm font-medium text-green-600">Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">KVM Feature Classification</span>
              <span className="text-sm font-medium text-blue-600">Processing...</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">KNN Similarity Matching</span>
              <span className="text-sm font-medium text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detection;