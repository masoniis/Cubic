<script>
	import {
		Canvas,
		DirectionalLight,
		HemisphereLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera,
		Group
	} from 'threlte';
	import Grid from '$lib/components/Grid.svelte';
	import { winner } from '$stores';
</script>

<h1 class="absolute block z-[100] top-20 text-center mx-auto container">STATUS: {$winner}</h1>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 3, y: -1, z: 5 }}>
			<OrbitControls />
		</PerspectiveCamera>

		<!-- Board Group -->
		<Grid />
	</Canvas>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>