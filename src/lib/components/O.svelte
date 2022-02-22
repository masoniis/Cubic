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

	const scale = tweened(0, {
		duration: 1100,
		easing: cubicOut
	});

	onMount(() => {
		scale.set(0);
	});

	const squares = [
		{ position: { x: -1, y: 1 }, visible: true, shape: null, tween: 0 },
		{ position: { x: 0, y: 1 }, visible: true, shape: null, tween: tweened(0, { duration: 1000 }) },
		{ position: { x: 1, y: 1 }, visible: true, shape: null, tween: tweened(0, { duration: 1000 }) },
		{
			position: { x: -1, y: 0 },
			visible: true,
			shape: null,
			tween: tweened(0, { duration: 1000 })
		},
		{ position: { x: 0, y: 0 }, visible: true, shape: null, tween: tweened(0, { duration: 1000 }) },
		{ position: { x: 1, y: 0 }, visible: true, shape: null, tween: tweened(0, { duration: 1000 }) },
		{
			position: { x: -1, y: -1 },
			visible: true,
			shape: null,
			tween: tweened(0, { duration: 1000 })
		},
		{
			position: { y: -1, x: 0 },
			visible: true,
			shape: null,
			tween: tweened(0, { duration: 1000 })
		},
		{ position: { x: 1, y: -1 }, visible: true, shape: null, tween: tweened(0, { duration: 1000 }) }
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

			scale.subscribe((value) => {
				squares[e].tween = value;
			});

			console.log(squares[e].tween);

			scale.set(1);

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
			$winner = undefined;
		}

		newsquares = squares;
	}

	$: newsquares = squares;

    export let position;
    export let tween;
</script>

<Mesh
	castShadow
	rotation={{ x: 1.56 }}
	geometry={new CylinderBufferGeometry($tween * 0.25, $tween * 0.25, 0.15, 72)}
	{position}
	material={new MeshStandardMaterial({ color: '#4c79c7' })}
/>
