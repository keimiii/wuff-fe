import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
    </div>
  );
};

export default SplashScreen;