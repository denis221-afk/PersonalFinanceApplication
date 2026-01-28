import React from "react";
import iconLoading from "../../Assets/loading.gif";
const Loading = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white rounded-2xl">
      <img src={iconLoading} alt="iconLoading" />
    </div>
  );
};

export default Loading;
