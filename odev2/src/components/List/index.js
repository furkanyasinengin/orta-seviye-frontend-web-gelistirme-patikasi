function List({ list, setList, filter }) {
  return (
    <div className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={
          list.filter((item) => item.status != false).length == list.length
        }
        onChange={(e) => {
          setList((prevState) => {
            return prevState.map((item, i) => {
              item.status = e.target.checked;
              return item;
            });
          });
        }}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list
          .filter((item) => item.status.toString() != filter)
          .map((item, index) => (
            <li key={item.uid} className={item.status ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.status}
                  onChange={(e) => {
                    setList((prevState) => {
                      return prevState.map((prevStateItem, i) => {
                        if (prevStateItem.uid == item.uid) {
                          prevStateItem.status = e.target.checked;
                          return prevStateItem;
                        } else {
                          return prevStateItem;
                        }
                      });
                    });
                  }}
                />
                <label>{item.name}</label>

                <button
                  className="destroy"
                  onClick={() => {
                    setList((prevState) => {
                      return prevState.filter((item, i) => i !== index);
                    });
                  }}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;
