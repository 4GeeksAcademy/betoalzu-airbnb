import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></span>
    <span className="ml-2">Cargando...</span>
  </div>
);

export default Loader;
