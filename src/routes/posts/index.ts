import type { Post } from "$lib/types";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const paths = import.meta.glob("../../content/posts/*.md", { eager: true });

	const posts: Post[] = [];

	for (const path in paths) {
		posts.push({
			slug: "/posts/" + path.match(/[^/]*(?=[.][a-zA-Z]+$)/),
			meta: paths[path].metadata,
		});
	}

	return {
		status: 200,
		body: {
			posts: posts,
		},
	};
};
