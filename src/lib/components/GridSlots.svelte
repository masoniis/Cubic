<script>
	import {
		CircleBufferGeometry,
		CylinderBufferGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		DoubleSide
	} from 'three';
	import { Mesh, Group } from 'threlte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { turnX } from '$stores';

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
		{ position: { x: -1, y: 1 }, visible: true, shape: null },
		{ position: { x: 0, y: 1 }, visible: true, shape: null },
		{ position: { x: 1, y: 1 }, visible: true, shape: null },
		{ position: { x: -1, y: 0 }, visible: true, shape: null },
		{ position: { x: 0, y: 0 }, visible: true, shape: null },
		{ position: { x: 1, y: 0 }, visible: true, shape: null },
		{ position: { x: -1, y: -1 }, visible: true, shape: null },
		{ position: { y: -1, x: 0 }, visible: true, shape: null },
		{ position: { x: 1, y: -1 }, visible: true, shape: null }
	];

	function clickHandler(e) {
		squares[e].visible = false;

		if ($turnX === true) {
			squares[e].shape = 'x';
		}

		$turnX = !$turnX;

		newsquares = squares;
	}

	$: newsquares = squares;
</script>

<Group>
	{#each newsquares as { position, shape }, i}
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
		{:else if shape === 'x'}
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.2, 0.15)}
				{position}
				rotation={{ z: 45 }}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
				interactive
				on:click={() => {
					clickHandler(i);
				}}
			/>
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.2, 0.15)}
				{position}
				rotation={{ z: -45 }}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
				interactive
				on:click={() => {
					clickHandler(i);
				}}
			/>
		{:else}
			<Mesh
				castShadow
				geometry={new CylinderBufferGeometry(0.25, 0.25, 0.25, 72)}
				rotation={{ x: 90, z: 302 }}
				{position}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
		{/if}
	{/each}
</Group>
