import { useDispatch, useSelector } from "react-redux";
import { setInputValue, handleSubmit, handleDelete, handleEdit } from "./slice";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function App() {
  const dispatch = useDispatch();

  const initState = useSelector((state) => {
    return state.todo;
  });

  console.log(initState.tasks);

  return (
    <>
      <h1>Todo List using Redux</h1>
      <div id="todo">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(handleSubmit());
          }}
        >
          <input
            type="text"
            placeholder="Enter your task"
            onChange={(e) => dispatch(setInputValue(e.target.value))}
            value={initState.inputValue}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <ul id="tasks">
        {initState.tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task.task}</span>
              <CreateIcon onClick={() => dispatch(handleEdit(task.id))} />
              <DeleteForeverIcon onClick={() => dispatch(handleDelete(task.id))} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
