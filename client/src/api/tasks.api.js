import axios from "axios";
export const createTaksRequest = async (task) => {
	return await axios.post("http://localhost:9000/tasks", task);
};

export const getTasksRequest = async () => {
	return await axios.get("http://localhost:9000/tasks");
};
