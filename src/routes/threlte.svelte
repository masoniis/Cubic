<script>
	import { CircleBufferGeometry, MeshStandardMaterial, BoxBufferGeometry, DoubleSide } from 'three';
	import {
		Canvas,
		DirectionalLight,
		HemisphereLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera,
		Group
	} from 'threlte';
    import Grid from "$lib/components/Grid.svelte"
    import GridSlots from '$lib/components/GridSlots.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const scale = tweened(0, {
		duration: 1100,
		easing: cubicOut
	});

	onMount(() => {
		scale.set(1);
	});

	function reverse() {
		scale.set($scale * -1);
	}

	let show = true;
	function click() {
		console.log('BAR CLICKED I REPEAT BAR CLICKED');
		show = false;
	}
</script>

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
		<GridSlots />
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
