import Routing from "./confiq/routing";
import Messages from "./component/message";
import Dashboard from "./screens/dashboar";
import SignIN from "./screens/signIn";
import BasicBreadcrumbs from "./screens/drawer";
import ResponsiveDrawer from "./screens/example";
import Gallery from './component/gallery'

import Todo from "./component/myTodo"
function App() {
  return (
    <div className="App bg-light">
      <Routing />

      {/* <Gallery /> */}
      {/* <Todo/> */}
    </div>
  );
}

export default App;
