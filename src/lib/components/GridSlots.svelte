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
	import { turnX, winner } from '$stores';

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

	const winningCombo = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	function clickHandler(e) {
		squares[e].visible = false;

		if ($turnX === true) {
			squares[e].shape = 'x';
		} else {
			squares[e].shape = 'o';
		}

		$turnX = !$turnX;

		newsquares = squares;

		detectWin();
	}

	function detectWin() {
		const boardStatus = squares.map(({ shape }) => shape);
		console.log(boardStatus);

		for (let i = 0; i < winningCombo.length; i++) {
			const [a, b, c] = winningCombo[i];
			if (
				boardStatus[a] &&
				boardStatus[a] === boardStatus[b] &&
				boardStatus[a] === boardStatus[c]
			) {
				if (boardStatus[a] === 'x') {
					$winner = "x won"
				} else {
					$winner = "o won"
				}
			}
		}
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
				rotation={{ z: 40 }}
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
				rotation={{ z: -40 }}
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
				{position}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
		{/if}
	{/each}
</Group>
