import React from "react";

const EditTaskModal = ({ todos }) => {
  const onSubmitHndler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/todo/:id", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("ok");
    } else if (!res.ok) {
      res.status(400).json({ status: "fail" });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHndler}>{todos[0].title}</form>
    </div>
  );
};

export default EditTaskModal;
