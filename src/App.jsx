import "./App.css";
// Components
import Icon from "./Icon";
// Icons import
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faGithub,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt, faGithub);

function App() {
  return (
    <>
      <Icon />
    </>
  );
}

export default App;
