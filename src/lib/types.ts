export type Post = {
	slug: string;
	meta: Meta;
};

export type Meta = {
	title: string;
	img: string;
	date: string;
	tags: string[];
	description: string;
};
