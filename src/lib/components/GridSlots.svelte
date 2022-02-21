<script>
	import { CircleBufferGeometry, MeshStandardMaterial, BoxBufferGeometry, DoubleSide } from 'three';
	import { Mesh, Group } from 'threlte';
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

	const squares = [
		{ position: { x: -1, y: 1 }, visible: true },
		{ position: { x: 0, y: 1 }, visible: true },
		{ position: { x: 1, y: 1 }, visible: true },
		{ position: { x: -1, y: 0 }, visible: true },
		{ position: { x: 0, y: 0 }, visible: true },
		{ position: { x: 1, y: 0 }, visible: true },
		{ position: { x: -1, y: -1 }, visible: true },
		{ position: { y: -1, x: 0 }, visible: true },
		{ position: { x: 1, y: -1 }, visible: true }
	];

	function clickHandler(e) {
		squares[e].visible = false;

		newsquares = squares;
	}

	$: newsquares = squares;
</script>

<Group>
	<!-- {#if box}
		<Mesh
			castShadow
			geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
			position={positions[0]}
			material={new MeshStandardMaterial({ color: '#ff3e00' })}
			interactive
			on:click={() => test()}
		/>
	{:else}
		<Mesh
			castShadow
			geometry={new CircleBufferGeometry(0.25, 72)}
			position={squares.positions[0]}
			material={new MeshStandardMaterial({ color: '#ff3e00' })}
			interactive
			on:click={() => test()}
		/>
	{/if} -->

	{#each newsquares as { position }, i}
		{#if squares[i].visible}
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
				{position}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
				interactive
				on:click={() => {
					clickHandler(i);
				}}
			/>
		{/if}
	{/each}
</Group>
