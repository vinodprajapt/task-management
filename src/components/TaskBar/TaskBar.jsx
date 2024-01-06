import Card from "../Card/Card";
import "./style.css";

const TaskBar = () => {
  const taskTypes = [
    {
      type: "todo",
      label: "Todo",
    },
    {
      type: "inProgress",
      label: "In Progress",
    },
    {
      type: "done",
      label: "Done",
    },
  ];
  return (
    <div className="taskbar">
      {taskTypes.map((item) => {
        return <Card key={item} type={item.type} label={item.label} />;
      })}
    </div>
  );
};

export default TaskBar;
