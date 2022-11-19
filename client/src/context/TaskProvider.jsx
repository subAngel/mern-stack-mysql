import { useContext, useState } from "react";
import { Children, createContext } from "react";
import {
	getTasksRequest,
	deleteTaskRequest,
	createTaksRequest,
} from "../api/tasks.api.js";
import { taskContext } from "./TaksContext";

export const useTasks = () => {
	const context = useContext(taskContext);
	if (!context) {
		throw new Error("UseTasks must be used within a taskContextProvider");
	}
	return context;
};

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	async function loadTasks() {
		try {
			const response = await getTasksRequest();
			setTasks(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const deleteTask = async (id) => {
		try {
			const response = await deleteTaskRequest(id);
			setTasks(tasks.filter((task) => task.id !== id));
		} catch (error) {
			console.error(error);
		}
	};

	const createTask = async (task) => {
		try {
			const response = await createTaksRequest(task);
			// setTasks([..tasks, response.data])
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<taskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
			{children}
		</taskContext.Provider>
	);
};
