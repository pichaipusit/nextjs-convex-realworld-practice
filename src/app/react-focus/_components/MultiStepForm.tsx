"use client";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Progress Indicator */}
      <div className="flex items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                index <= currentStep
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  index < currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{steps[currentStep]}</h2>
        <p className="text-gray-600 mb-6">
          This is the content for {steps[currentStep]}. Replace with your actual
          form fields.
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
