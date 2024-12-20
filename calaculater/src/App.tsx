import { useState } from "react";
import "./App.css";
import Keypad from "./Keypad";
import Display from "./Display";

interface AppState {
  currentValue: string;
  operator: string | null;
  result: number | null;
}

function App() {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [result, setResult] = useState<AppState["result"]>(null);

  // Handle number button clicks
  const handleNumberClick = (number: string): void => {
    setCurrentValue((prev) => (prev === "0" ? number : prev + number));
  };

  // Handle operator button clicks
  const handleOperatorClick = (op: string): void => {
    setCurrentValue((prev) => prev + ` ${op} `);
  };

  // Handle equals button click
  const handleEqualsClick = (): void => {
    try {
      const expr = currentValue.replace(/\s+/g, ""); // Remove any extra spaces
      const evalResult = eval(expr);
      setResult(evalResult);
    } catch (error) {
      setResult(NaN);
      setCurrentValue("Error");
    }
  };

  // Handle clear button click
  const handleClearClick = (): void => {
    setCurrentValue("0");
    setResult(null);
  };

  // Handle delete button click
  const handleDeleteClick = (): void => {
    setCurrentValue((prev) => prev.slice(0, -1) || "0");
  };

  return (
    <div className="calculator">
      {/* Display the current value or result */}
      <Display
        value={result !== null ? `${currentValue} = ${result}` : currentValue}
      />
      {/* Render the keypad with appropriate handlers */}
      <Keypad
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
