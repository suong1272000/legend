import { CSSProperties } from "react";
import TitleTextWrap from "./components/atoms/Wraps/TitleTextWrap";
import Main from "./components/Main";

function App() {
  const styles:CSSProperties = {
    background: "url(/bg.458c498270c5d488d5b2.jpg)",
    backgroundSize: "contain",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    fontFamily: "Pretendard",
  }

  return (
    <div className="App" style={styles}>
      <TitleTextWrap />
      <Main />
    </div>
  );
}

export default App;
