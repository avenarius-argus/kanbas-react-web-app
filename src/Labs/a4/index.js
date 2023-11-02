import Add from "./Add";

import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";

import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h1>Assignment 4</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ReduxExamples />
      <ParentStateComponent />
      <ArrayStateVariable />
        <ObjectStateVariable />
        <DateStateVariable />
        <StringStateVariables />
        <BooleanStateVariables />
      <Counter />
    <EventObject />
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent />
        <ClickEvent />
      <Add a={1} b={2} />
    </div>
  );
}
export default Assignment4;