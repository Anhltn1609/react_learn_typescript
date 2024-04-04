import { useState } from "react";

function ListGroup() {
  let items = ["NewYork", "Tokyo", "London"];
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // variable selectedIndex
  // update function setSelectedIndex
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/* change to list-group-item - className to get style of bootstrap */}
      </ul>
    </>
  );
}
export default ListGroup;
