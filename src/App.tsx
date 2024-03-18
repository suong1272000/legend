import TitleTextWrap from "./components/atoms/Wraps/TitleTextWrap";
import Main from "./components/Main";
import BgTop from "./components/atoms/Background/BgTop";
import { styles } from "./components/style/AppStyle";
import Before from "./components/style/Before";
import After from "./components/style/After";


function App() {

  return (
    <div className="App" style={styles}>
        <Before />
        <BgTop />
        <TitleTextWrap />
        <Main />
        <After />
    </div>
  );
}

export default App;
