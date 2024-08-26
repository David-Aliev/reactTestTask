import Header from "./components/Header/Header";
import UserInfo from "./components/UserInfo/UserInfo";

import EditUser from "./pages/EditUser/EditUser";
function App() {
  return (
    <>
      <Header />
      <hr></hr>
      <div className="user__container">
        <EditUser />
        <UserInfo />
      </div>
    </>
  );
}

export default App;
