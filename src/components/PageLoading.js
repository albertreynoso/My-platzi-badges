import React from "react";
import Loader from "./Loader";

import "./styles/PageLoading.css";

export default function PageLoading() {
  return (
    <div className="loadingElement">
      <Loader />
    </div>
  );
}
