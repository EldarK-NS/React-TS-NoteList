import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Notification } from "./components/Notification";
import { RootState } from "./store/store";
import "./App.css";
import { DeleteListModal } from "./components/DeleteListModal";
import { EditListModal } from "./components/EditListModal";
import { MainContent } from "./components/MainContent";

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message
  );
  const listIdtoDelete = useSelector(
    (state: RootState) => state.list.listIdToDelete
  );
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);

  return (
    <div className="App">
      <Header
        title="Tsk List App"
        subtitle="Create some lists and add some tasks to each list"
      />
      <div className="container px-5">
        <div className="columns">
          <SideBar />
          <MainContent />
        </div>
      </div>

      <Notification msg={notificationMsg} />
      {listIdtoDelete && <DeleteListModal listId={listIdtoDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}
    </div>
  );
};

export default App;
