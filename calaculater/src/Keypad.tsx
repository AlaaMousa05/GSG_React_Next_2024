import React from "react";
import "./KeypadStyles.css"; // Import styles specific to Keypad

// Define props for the Keypad component
interface KeypadProps {
  onNumberClick: (number: string) => void;
  onOperatorClick: (op: string) => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onDeleteClick: () => void;
}

function Keypad({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onDeleteClick,
}: KeypadProps) {
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="keypad">
      {/* Render number buttons */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button
          className="keypad-button number"
          key={num}
          onClick={() => onNumberClick(num.toString())}
        >
          {num}
        </button>
      ))}
      {/* Render operator buttons */}
      {operators.map((op) => (
        <button
          className="keypad-button operator"
          key={op}
          onClick={() => onOperatorClick(op)}
        >
          {op}
        </button>
      ))}
      {/* Render clear button */}
      <button className="keypad-button clear" onClick={onClearClick}>
        C
      </button>
      {/* Render delete button */}
      <button className="keypad-button delete" onClick={onDeleteClick}>
        DEL
      </button>
      {/* Render equals button */}
      <button className="keypad-button equals" onClick={onEqualsClick}>
        =
      </button>
    </div>
  );
}

export default Keypad;
