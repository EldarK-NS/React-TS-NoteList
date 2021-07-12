import React, { FC } from "react";
import { CreateNewList } from "./CreateNewList";
import { Lists } from "./Lists";

export const SideBar: FC = () => {
  return (
    <div className="column is-3">
      <CreateNewList />
      <Lists />
    </div>
  );
};
