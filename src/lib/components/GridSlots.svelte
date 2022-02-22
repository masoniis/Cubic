<script>
	import {
		CircleBufferGeometry,
		CylinderBufferGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		DoubleSide
	} from 'three';
	import { Mesh, Group } from 'threlte';
	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { turnX, winner } from '$stores';
	import Oicon from '$components/O.svelte';
	import Xicon from '$components/X.svelte';


	const squares = [
		{ position: { x: -1, y: 1 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: 0, y: 1 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: 1, y: 1 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: -1, y: 0 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: 0, y: 0 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: 1, y: 0 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: -1, y: -1 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { y: -1, x: 0 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) },
		{ position: { x: 1, y: -1 }, visible: true, shape: null, tween: tweened(0, {duration: 500, easing: cubicOut}) }
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
		if ($winner === 'x won' || $winner === 'o won') {
		} else {
			squares[e].visible = false;

			
			tweener(e);

			if ($turnX === true) {
				squares[e].shape = 'x';
			} else {
				squares[e].shape = 'o';
			}

			$turnX = !$turnX;

			newsquares = squares;

			detectWin();
		}
	}

	function tweener(e) {
		squares[e].tween.set(1)

		newsquares = squares;
	}

	function detectWin() {
		const boardStatus = squares.map(({ shape }) => shape);

		for (let i = 0; i < winningCombo.length; i++) {
			const [a, b, c] = winningCombo[i];
			if (
				boardStatus[a] &&
				boardStatus[a] === boardStatus[b] &&
				boardStatus[a] === boardStatus[c]
			) {
				if (boardStatus[a] === 'x') {
					$winner = 'x won';
				} else {
					$winner = 'o won';
				}
			}
		}

		if (boardStatus.every((element) => element !== null)) {
			return ($winner = 'There was a draw!');
		}
	}

	export function reset() {
		for (let i = 0; i < squares.length; i++) {
			squares[i].shape = null;
			squares[i].visible = true;
			squares[i].tween = tweened(0, {duration: 500, easing: cubicOut});
			$winner = undefined;

		}

		newsquares = squares;
	}

	$: newsquares = squares;
</script>

<Group>
	{#each newsquares as { position, shape, tween }, i}
		{#if squares[i].visible}
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry(0.6, 0.6, 0.15)}
				{position}
				material={new MeshStandardMaterial({ color: '#d1c2c0' })}
				interactive
				on:click={() => {
					clickHandler(i);
				}}
			/>
		{:else if shape === 'x'}
			<Xicon {position} tween={tween} />
		{:else}
			<Oicon {position} tween={tween} />
		{/if}
	{/each}
</Group>
