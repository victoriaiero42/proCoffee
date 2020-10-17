import React from "react";
import { Input } from '@material-ui/core'

export default function SearchPanel({ keyword, setKeyword }) {
  const panelStyle = {
    width: "100%",
    // background: "#F2F1F9",
    border: "none",
    // padding: "0.5rem",
  };
  return (
    <>
      {/* <Input
        style={panelStyle}
        key="random1"
        value={keyword}
        placeholder={"search coffee"}
        onChange={(e) => setKeyword(e.target.value)}
      /> */}
    </>
  )
}
