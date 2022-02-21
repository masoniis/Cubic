<script>
	import {
		Canvas,
		OrbitControls,
		PerspectiveCamera,
	} from 'threlte';
	import Grid from '$lib/components/Grid.svelte';
</script>

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