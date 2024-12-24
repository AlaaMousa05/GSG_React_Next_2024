import React from "react";
import "./Counter.css"


interface IProps {
  totalTasks: number;
  urgentTasks: number;
  completedTasks: number;
}



const Counter = (prop:IProps) => {
  return (
    <div className="task-counters">
      <div className="counter-item total">
        <p>Total Tasks</p>
        <h2>{prop.totalTasks}</h2>
      </div>
      <div className="counter-item urgent">
        <p>Urgent Tasks</p>
        <h2>{prop.urgentTasks}</h2>
      </div>
      <div className="counter-item completed">
        <p>Completed Tasks</p>
        <h2>{prop.completedTasks}</h2>
      </div>
    </div>
  );
};

export default Counter;
