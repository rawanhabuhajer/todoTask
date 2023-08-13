import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./TodoSection.css";
import dots from "../../Assets/dots.svg";
Modal.setAppElement(document.getElementById("root"));

const TodoSection = ({ todos }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal(task) {
    setSelectedTask(task);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedTask(null);
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#2c2c38",
      width: "28.8%",
    },
  };

  return (
    <>
      {todos.map((task) => (
        <div className="todo_container" onClick={openModal}>
          <div key={task._id} className="taskTitle">
            <div>{task.title}</div>
            <div>{task.subtasks}</div>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Task Details Modal"
      >
        {selectedTask && (
          <div className="modal_container">
            <img src={dots} alt="" style={{ width: 5, marginLeft: 400 }} />
            <div className="taskDetails ">
              <h5 className="my-2">{todos[0].title}</h5>
              <p className="my-3" style={{ fontSize: "14px" }}>
                {todos[0].description}
              </p>

              <label htmlFor="Subtasks">Subtasks :</label>
              <div style={{ display: "flex", alignItems: "start" }}>
                <input type="checkbox" name="" id="check" />
                <div
                  style={{
                    marginTop: "9px",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  {todos[0].subtasks}
                </div>
              </div>

              <div className="my-2">
                <label htmlFor="status">Status</label>
                <select
                  id="prostatusess"
                  className="form-select mt-2 statusForm"
                  aria-label="Default select example"
                  // value={status}
                  // onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option defaultValue>{todos[0].status}</option>
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <button onClick={closeModal} className="create__task2">
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
export default TodoSection;
