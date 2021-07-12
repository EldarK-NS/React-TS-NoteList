import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, setNotification } from "../store/actions";
import { List, Task } from "../store/types";

interface AddNewTaskProps {
  list: List;
}

export const AddNewTask: FC<AddNewTaskProps> = ({ list }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      return alert("Task name is required");
    }
    const newTask: Task = {
      name: taskName,
      id: `task-${new Date().getTime()}`,
      completed: false,
    };
    dispatch(addTask(newTask, list));
    dispatch(setNotification(`New task "${newTask.name}" created!`));
    setTaskName("");
  };

  return (
    <section className="section">
      <h2 className="is-size-4 has-text-centered">
        Add new task to selected field
      </h2>
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">Task name</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="AddTask"
              value={taskName}
              onChange={changeHandler}
            />
          </div>
          <div className="control mt-4">
            <input
              type="submit"
              value="Add New Task"
              className="button is-primary"
            />
          </div>
        </div>
      </form>
    </section>
  );
};
