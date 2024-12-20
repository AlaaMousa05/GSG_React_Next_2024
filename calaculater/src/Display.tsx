import React from "react";
import "./DisplayStyles.css";

// Define props for the Display component
interface DisplayProps {
  value: string | number;
}

function Display({ value }: DisplayProps) {
  return <div className="display">{value}</div>; // Render the value
}

export default Display;
