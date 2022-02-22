import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';
import { Server } from 'socket.io';

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
			},
			plugins: [
				{
					name: 'sveltekit-socket-io',
					configureServer(server) {
						const io = new Server(server.httpServer);

						io.on('connection', (socket) => {
							// Generate a random username and send it to the client to display it
							let username = `User ${Math.round(Math.random() * 999999)}`;
							socket.emit('name', username);

							// Receive incoming messages and broadcast them
							socket.on('message', (message) => {
								io.emit('message', {
									from: username,
									message: message,
									time: new Date().toLocaleString()
								});
							});
						});

						console.log('SocketIO injected');
					}
				}
			]
		}
	}
};

export default config;
