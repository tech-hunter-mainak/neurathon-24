import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		post: {
			'${params.slug}': params.slug,
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here sluggggg`
		}
	};
};
