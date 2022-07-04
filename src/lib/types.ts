export type Post = {
	slug: string;
	meta: Meta;
};

export type Meta = {
	title: string;
	date: string;
	tags: string[];
	description: string;
};
