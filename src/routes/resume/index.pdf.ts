import fs from "fs";

export async function get() {
	const pdf = fs.readFileSync("/resume.pdf");

	return {
		status: 200,
		headers: {
			"Content-type": "application/pdf",
		},
		body: {
			pdf,
		},
	};
}
