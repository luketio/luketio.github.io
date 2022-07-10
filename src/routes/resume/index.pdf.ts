import type { RequestHandler } from "@sveltejs/kit";
import fs from "fs";

export const get: RequestHandler = async () => {
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
};
