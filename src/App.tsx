import { CSSProperties } from "react";
import TitleTextWrap from "./components/atoms/Wraps/TitleTextWrap";

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
  }

  return (
    <div className="App" style={styles}>
      <TitleTextWrap />
    </div>
  );
}

export default App;
