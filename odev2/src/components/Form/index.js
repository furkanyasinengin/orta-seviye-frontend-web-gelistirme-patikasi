import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ list, setList }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text != "") {
            setList((prevState) => [
              ...prevState,
              { name: text, status: false, uid: uuidv4() },
            ]);
            setText("");
          }
        }}
      />
    </>
  );
}

export default Form;
