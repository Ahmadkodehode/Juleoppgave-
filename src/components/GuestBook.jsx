import React, { useEffect, useRef, useState } from "react";

function GuestBook() {
  const inputEl = useRef(null);
  const [itemsList, setItemList] = useState([]);

  const addItem = () => {
    if (inputEl.current.value !== "") {
      const newStr =
        new Date().toISOString().substring(0, 16) +
        ": " +
        inputEl.current.value.toString();

      localStorage.setItem("mylist", JSON.stringify([...itemsList, newStr]));
      setItemList([...itemsList, newStr]);
      inputEl.current.value = "";
    } else {
      alert("Please input your Greeting");
    }
  };

  const clearItems = () => {
    localStorage.clear();
    setItemList([]);
    itemClear.style.display = "none";
  };

  useEffect(() => {
    const list = localStorage.getItem("mylist");
    if (!list) {
      setItemList([]);
    } else {
      setItemList(JSON.parse(list));
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        className="myTxt"
        placeholder="Enter Your Greetings"
        ref={inputEl}
      />
      <br />
      <button className="btnAdd" onClick={addItem}>
        Add Greeting
      </button>
      <button className="btnClear" onClick={clearItems}>
        Clear All
      </button>
      <ul className="itemsList">
        {itemsList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuestBook;
