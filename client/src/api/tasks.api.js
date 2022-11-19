import axios from "axios";
export const createTaksRequest = async (task) => {
	return await axios.post("http://localhost:9000/tasks", task);
};
