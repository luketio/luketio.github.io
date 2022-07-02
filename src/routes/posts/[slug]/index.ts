interface Params {
	params: {
		slug: string;
	}
}

export async function get({ params }: Params) {
	const post = await import(`../../../content/posts/${params.slug}.md`);

	if (post) {
		return {
			body: {
				meta: post.metadata,
				content: post.default,
			}
		};
	}

	return {
		status: 404,
	};
}
