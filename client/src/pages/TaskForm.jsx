import { Formik, Form } from "formik";
import { createTaksRequest } from "../api/tasks.api.js";

function TaskForm() {
	return (
		<div>
			<div>
				<Formik
					initialValues={{
						title: "",
						description: "",
					}}
					onSubmit={async (values, actions) => {
						console.log(values);
						try {
							const response = await createTaksRequest(values);
							console.log(response);
							actions.resetForm();
						} catch (error) {
							console.log(error);
						}
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
