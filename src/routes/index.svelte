<script>
	import {
		Canvas,
		DirectionalLight,
		HemisphereLight,
		OrbitControls,
		PerspectiveCamera
	} from 'threlte';
	import Grid from '$lib/components/Grid.svelte';
	import GridSlots from '$lib/components/GridSlots.svelte';
	import WinModal from '$components/WinModal.svelte';
	import { winner } from '$stores';

	let modal;

	$: {
		if ($winner != undefined) {
			console.log('winner detected');
			modal.toggleModal();
		}
	}

	let gridSlots;
</script>

<WinModal
	bind:this={modal}
	on:click={() => {
		gridSlots.reset();
	}}
>
	{$winner} won the game.
</WinModal>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 0, y: 0, z: 5.5 }}>
			<OrbitControls autoRotate enableZoom={false} />
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
