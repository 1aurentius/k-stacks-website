// Serves the prerendered SvelteKit build from Workers static assets.
// Keeps the old Render behaviour: krister.work and plain http redirect (301) to https://www.krister.work.
const CANONICAL_HOST = 'www.krister.work';

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const isOurDomain = url.hostname === 'krister.work' || url.hostname === CANONICAL_HOST;
		if (isOurDomain && (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:')) {
			url.hostname = CANONICAL_HOST;
			url.protocol = 'https:';
			return Response.redirect(url.toString(), 301);
		}
		return env.ASSETS.fetch(request);
	}
};
