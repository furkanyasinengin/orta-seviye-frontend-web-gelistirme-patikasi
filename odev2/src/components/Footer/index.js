import React from "react";

function Footer({ list, setFilter, setList }) {
  const selected = (e, filter) => {
    setFilter(filter);
    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{list.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className="selected"
            onClick={(e) => {
              selected(e, "");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              selected(e, "true");
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              selected(e, "false");
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      {!!list.length && (
        <button
          className="clear-completed"
          onClick={() => {
            setList((prevState) =>
              prevState.filter((item) => item.status !== true)
            );
          }}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
