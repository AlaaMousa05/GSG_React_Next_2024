import React from "react";
import { useState } from "react";
import { Itodo } from "../../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todoitem.css";

interface IProps extends Itodo {
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, isCompleted: boolean) => void;
}
const Todoitem = (props: IProps) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onToggleComplete(props.id, e.target.checked);
  };

  return (
    <div className={`todoItem ${props.urgent ? "urgent" : ""}`}>
      <input
        type="checkbox"
        className="todoItem-checkbox"
        id={`checkbox-${props.id}`}
        checked={props.completed}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`checkbox-${props.id}`} className="todoItem-text">
        {props.todo}
      </label>
      {props.urgent && <span className="urgent-badge">Urgent</span>}
      <FontAwesomeIcon
        icon={faTrash}
        style={{ marginLeft: "10px", cursor: "pointer", color: "red" }}
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  );
};

export default Todoitem;
