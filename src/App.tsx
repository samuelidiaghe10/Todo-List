import sun from "../src/todo-app-main/images/icon-sun.svg";
import moon from "../src/todo-app-main/images/icon-moon.svg";
import check from "../src/todo-app-main/images/icon-check.svg";
import cross from "../src/todo-app-main/images/icon-cross.svg";
import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

interface Todo {
  task: string;
  completed: boolean;
}

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [newTodo, setNewTodo] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const [tab, setTabs] = useState<"All" | "Active" | "Completed">("All");

  // Function to add new task
  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodo([{ task: newTodo, completed: false }, ...todo]);
      setNewTodo("");
    }
  };

  //Function to check task
  const handleCheck = (index: number) => {
    setTodo(
      todo.map((t, i) => {
        if (i === index) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
    console.log(todo);
  };

  // length is in complete tasks
  const todoLength = todo.filter((t) => !t.completed).length;

  // constant responsible for filtering tasks
  const filtered =
    tab === "All"
      ? todo
      : tab === "Active"
      ? todo.filter((t) => !t.completed)
      : todo.filter((t) => t.completed);

  // Function for filtering out completed tasks
  const handleClearCompleted = () => {
    setTodo(todo.filter((t) => !t.completed));
  };

  // Function for deleting tasks
  const handleDelete = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  // Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [todo, theme]);

  useEffect(() => {
    const Todos = localStorage.getItem("todos");
    const Theme = localStorage.getItem("theme");

    if (Todos) {
      setTodo(JSON.parse(Todos));
    }

    if (Theme) {
      setTheme(JSON.parse(Theme));
    }
  }, []);

  return (
    <div
      className={`${
        theme ? "bg-darkModeDesktop bg-Very-Dark-Blue" : " bg-lightModeDesktop"
      } bg-no-repeat min-h-screen px-5  lg:px-0`}
    >
      <div
        className={` flex flex-col  items-center gap-20 py-14  bg-no-repeat `}
      >
        <div className="flex flex-col gap-8 w-full lg:w-[35rem]">
          <div className="flex items-center justify-between ">
            <h1 className="text-white text-5xl font-semibold">TODO</h1>

            <button onClick={() => setTheme(!theme)}>
              <img src={theme ? sun : moon} alt="" />
            </button>
          </div>

          <div className="flex items-center ">
            <button
              onClick={() => {
                handleAdd();
              }}
              className={`border-2 ${
                theme
                  ? "border-Very-Dark-Grayish-Blue"
                  : "border-Very-Dark-Grayish-Blue-1"
              } absolute ms-3 h-6 rounded-full w-6`}
            ></button>
            <input
              value={newTodo}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              className={`${
                theme
                  ? " bg-Very-Dark-Desaturated-Blue text-Light-Grayish-Blue   "
                  : " bg-Very-Light-Gray text-Very-Dark-Desaturated-Blue"
              } py-3 w-full ps-14 text-lg rounded-md outline-none `}
              type="text"
              placeholder="Create a new todo..."
            />
          </div>
        </div>

        <div
          className={`lg:w-[35rem] w-full drop-shadow-xl divide-y-2 ${
            theme
              ? " bg-Very-Dark-Desaturated-Blue text-Light-Grayish-Blue"
              : " bg-Very-Light-Gray  text-Very-Dark-Desaturated-Blue"
          } rounded-lg`}
        >
          <Reorder.Group axis="y" values={filtered} onReorder={setTodo}>
            <ul className={`flex flex-col divide-y-2 rounded-t-lg  `}>
              {filtered.map((t, index) => (
                <Reorder.Item key={index} value={t}>
                  <li
                    key={index}
                    className={`  py-3 flex items-center justify-between text-sm md:text-lg  px-3`}
                  >
                    <div className="flex items-center gap-5">
                      <button
                        onClick={() => {
                          handleCheck(index);
                        }}
                        className={`border-2 ${
                          t.completed ? "checkBox" : ""
                        }  w-6 h-6 ${
                          theme
                            ? "border-Very-Dark-Grayish-Blue"
                            : "border-Very-Dark-Grayish-Blue-1"
                        } rounded-full flex items-center justify-center`}
                      >
                        <img
                          className={`${
                            t.completed ? "opacity-100" : "opacity-0"
                          }`}
                          src={check}
                          alt=""
                        />
                      </button>
                      <p
                        className={`${
                          theme ? "" : "text-Very-Dark-Grayish-Blue-1"
                        } ${t.completed ? "line-through" : ""}`}
                      >
                        {t.task}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                      className="cross duration-500"
                    >
                      <img src={cross} alt="" />
                    </button>
                  </li>
                </Reorder.Item>
              ))}
            </ul>
          </Reorder.Group>

          <div
            className={`${
              todo.length === 0 ? "hidden" : ""
            } py-3 px-4 flex justify-between w-full text-Dark-Grayish-Blue   text-md  outline-none  `}
          >
            <div>
              <p className="font-semibold">{todoLength} items left</p>
            </div>

            <div className="lg:flex hidden gap-5">
              <button
                onClick={() => {
                  setTabs("All");
                }}
                className={`font-semibold ${
                  tab === "All" ? "text-Bright-Blue" : " text-Dark-Grayish-Blue"
                } ${theme ? "hover:text-white" : "hover:text-black"}`}
              >
                All
              </button>

              <button
                onClick={() => {
                  setTabs("Active");
                }}
                className={`font-semibold ${
                  tab === "Active"
                    ? "text-Bright-Blue"
                    : " text-Dark-Grayish-Blue"
                } ${theme ? "hover:text-white" : "hover:text-black"}`}
              >
                Active
              </button>

              <button
                onClick={() => {
                  setTabs("Completed");
                }}
                className={`font-semibold ${
                  tab === "Completed"
                    ? "text-Bright-Blue"
                    : " text-Dark-Grayish-Blue"
                } ${theme ? "hover:text-white" : "hover:text-black"}`}
              >
                Completed
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  handleClearCompleted();
                }}
                className={`font-semibold`}
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          todo.length === 0 ? "opacity-0" : "opacity-100"
        } flex ${
          theme
            ? " bg-Very-Dark-Desaturated-Blue text-Light-Grayish-Blue"
            : " bg-Very-Light-Gray  text-Very-Dark-Desaturated-Blue"
        } py-2 px-3 items-center drop-shadow-lg justify-center rounded-lg gap-7  `}
      >
        <button
          onClick={() => {
            setTabs("All");
          }}
          className={`font-semibold ${
            tab === "All" ? "text-Bright-Blue" : " text-Dark-Grayish-Blue"
          } ${theme ? "hover:text-white" : "hover:text-black"}`}
        >
          All
        </button>

        <button
          onClick={() => {
            setTabs("Active");
          }}
          className={`font-semibold ${
            tab === "Active" ? "text-Bright-Blue" : " text-Dark-Grayish-Blue"
          } ${theme ? "hover:text-white" : "hover:text-black"}`}
        >
          Active
        </button>

        <button
          onClick={() => {
            setTabs("Completed");
          }}
          className={`font-semibold ${
            tab === "Completed" ? "text-Bright-Blue" : " text-Dark-Grayish-Blue"
          } ${theme ? "hover:text-white" : "hover:text-black"}`}
        >
          Completed
        </button>
      </div>

      <div
        className={`flex ${todo.length === 0 ? "opacity-0" : "opacity-100"} ${
          theme ? "text-Dark-Grayish-Blue" : "text-Very-Dark-Grayish-Blue-1"
        } text-lg duration-500 items-center justify-center translate-y-10`}
      >
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
