import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		// TODO log the user in
		const body = await event.request.formData();
		console.log(...body)
	}
} satisfies Actions;
