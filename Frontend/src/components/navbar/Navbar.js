import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TaskModal from "../modal/TaskModal";

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
  },
};

Modal.setAppElement(document.getElementById("root"));

const Navbar = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ul className="nav custom_navbar">
        <li className="nav-item">Platform Launch</li>
        <li className="nav-item">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="modal__subtitle"
            >
              Add New Task
            </h2>
            <TaskModal />
            {/* <button onClick={closeModal}>close</button> */}
          </Modal>
          <Link className="nav-link custom_nav_link" onClick={openModal}>
            + Add New Task
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
