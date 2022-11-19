import { Formik, Form } from "formik";
import { useState } from "react";
import { createTaksRequest } from "../api/tasks.api.js";
import { useTasks } from "../context/TaskProvider";

function TaskForm() {
	const { createTask } = useTasks();
	return (
		<div>
			<div>
				<Formik
					initialValues={{
						title: "",
						description: "",
					}}
					onSubmit={async (values, actions) => {
						// console.log(values);
						createTask(values);
						actions.resetForm();
					}}
				>
					{({ handleChange, handleSubmit, values, isSubmitting }) => (
						<Form onSubmit={handleSubmit}>
							<label>Title</label>
							<input
								type="text"
								name="title"
								placeholder="Title"
								onChange={handleChange}
								value={values.title}
							/>

							<label>Description</label>
							<textarea
								name="description"
								placeholder="Write a description"
								onChange={handleChange}
								value={values.description}
							/>
							<button type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Saving..." : "Save"}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default TaskForm;
