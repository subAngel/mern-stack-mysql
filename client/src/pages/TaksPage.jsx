import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api.js";
import TaskCard from "../components/TaskCard";

function TaksPage() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		async function loadTasks() {
			const response = await getTasksRequest();
			setTasks(response.data);
		}
		loadTasks();
	}, []);

	function renderMain() {
		if (tasks.length === 0)
			return <h1 className="text-center text-3xl">Aun no hay tareas</h1>;
		return tasks.map((task) => <TaskCard task={task} key={task.id} />);
	}

	return (
		<div>
			<h1>Tasks</h1>

			{renderMain()}
		</div>
	);
}

export default TaksPage;
