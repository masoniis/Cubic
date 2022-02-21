import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['three']
			},
			resolve: {
				alias: {
					$components: path.resolve('./src/lib/components'),
					$stores: path.resolve('./src/stores.ts')
				}
			}
		}
	}
};

export default config;
