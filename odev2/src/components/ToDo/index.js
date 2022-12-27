import React, { useEffect, useState } from "react";
import List from "../List";
import Form from "../Form";
import Footer from "../Footer";
import { v4 as uuidv4 } from "uuid";

function ToDo() {
  const [list, setList] = useState([
    { name: "Learn React", status: true, uid: uuidv4() },
    { name: "Have a life!", status: false, uid: uuidv4() },
  ]);
  const [filter, setFilter] = useState("");

  return (
    <div className="todoapp">
      <h1 className="header">todos</h1>

      <Form list={list} setList={setList} />
      <List list={list} setList={setList} filter={filter} />
      <Footer list={list} setFilter={setFilter} setList={setList} />
    </div>
  );
}

export default ToDo;
