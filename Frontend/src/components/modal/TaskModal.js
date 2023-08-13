import React, { useState } from "react";
import "./TaskModal.css";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

const TaskModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [subtasks, setSubtasks] = useState([]);

  const onSubmitHndler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        subtasks,
        status,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("ok");
      setTitle("");
      setDescription("");
      setStatus("");
      setSubtasks("");
    } else if (!res.ok) {
      res.status(400).json({ status: "fail" });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHndler}>
        <div className="title">Title</div>
        <input
          type="text"
          className="modal__title"
          placeholder="ex"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="title">Description</div>
        <textarea
          cols={2}
          rows={3}
          type="text"
          className="modal__Description"
          placeholder="ex"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="title">Subtasks</div>

        <div className="g">
          <input
            type="text"
            className="Subtasks__input"
            placeholder="ex"
            value={subtasks}
            onChange={(e) => setSubtasks(e.target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="status">Status</label>
          <select
            id="prostatusess"
            className="form-select mt-2  statusForm"
            aria-label="Default select example"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option defaultValue>Choose Your Status</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button className="create__task">Create Task</button>
      </form>
    </div>
  );
};

export default TaskModal;
