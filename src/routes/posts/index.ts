import type { Post } from "$lib/types";

export async function get() {
	const paths = import.meta.globEager("../../content/posts/*.md");

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
}
