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
	import GridSlots from '$lib/components/GridSlots.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { winner } from '$stores';

	let gridSlots;


</script>

<h1 class="absolute block z-[100] top-20 text-center mx-auto container">STATUS: {$winner}</h1>
<button on:click={() => {gridSlots.reset()}} class="absolute block z-[100] top-28 text-center mx-auto container">
	RESET
</button>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 3, y: -1, z: 5 }}>
			<OrbitControls />
		</PerspectiveCamera>

		<DirectionalLight shadow color={'white'} position={{ x: -15, y: 45, z: 20 }} />
		<HemisphereLight skyColor={'white'} groundColor={'#ac844c'} intensity={0.4} />

		<!-- Board Group -->
		<Grid />

		<!-- Board groups -->
		<GridSlots bind:this={gridSlots} />
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
