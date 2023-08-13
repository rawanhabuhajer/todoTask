import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import blue from "../../Assets/blue.svg";
import purple from "../../Assets/purple.svg";
import greencircle from "../../Assets/greencircle.svg";
import TodoSection from "../../components/taskSection/TodoSection";
import { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/todo")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.data.Todos);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <>
      <div className="home__container">
        <div className="aside">
          <Sidebar />
        </div>
        <div className="nav">
          <Navbar />
        </div>

        <div className="main">
          <div className="todo">
            <div className="text_container">
              <img src={blue} alt="" width={15} />
              <div>Todo</div>
            </div>
            <TodoSection
              todos={todos.filter((task) => task.status === "todo")}
            />
          </div>

          <div className="todo">
            <div className="text_container">
              <img src={purple} alt="" width={15} />
              <div>Doing</div>
            </div>
            <TodoSection
              todos={todos.filter((task) => task.status === "doing")}
            />
          </div>

          <div className="todo">
            <div className="text_container">
              <img src={greencircle} alt="" width={15} />
              <div>Done</div>
            </div>
            <TodoSection
              todos={todos.filter((task) => task.status === "done")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
