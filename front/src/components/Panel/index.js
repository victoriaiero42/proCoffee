import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { Input } from "@material-ui/core";

export default function Panel() {
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const styleLi = { background: "#ede", width: "16em"}

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((json) => setUsers(json));
  }, []);

  // console.log(users);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: input,
    onInputValueChange: ({ inputValue }) => {
      setInput(
        users.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <div>
      <h1>{user}</h1>
      <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search"
          enterbutton="Search"
          size="large"
        />
      </div>
      <ul style={{listStyleType: "none"}} {...getMenuProps()}>
        {isOpen &&
          input.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setUser(item.name)}
            >
              <li style={highlightedIndex === index ? styleLi : {}}>
              <h3>{item.name}</h3>
              </li>
            </span>
          ))}
      </ul>
    </div>
  );
}
