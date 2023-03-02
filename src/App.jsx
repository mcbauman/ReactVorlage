import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import { useState } from "react";

export default function App() {
  const [menuSwitch, setMenuSwitch]=useState(false)
  return (
    <>
      <Header setMenuSwitch={setMenuSwitch} menuSwitch={menuSwitch}/>
      {menuSwitch?<Aside />:<></>}
      <Main />
    </>
  );
}

