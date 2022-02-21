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

	let show = true;
	function click() {
		console.log('BAR CLICKED I REPEAT BAR CLICKED');
		show = false;
	}

	const positions = [
		{ x: -1, y: 1 },
		{ x: 0, y: 1 },
		{ x: 1, y: 1 },
		{ x: -1, y: 0 },
		{ x: 0, y: 0 },
		{ x: 1, y: 0 },
		{ x: -1, y: -1 },
		{ y: -1, x: 0 },
		{ x: 1, y: -1 }
	];

	let geometry = BoxBufferGeometry;
	function test() {
		console.log('Clicked');
	}
</script>

<Group>
	<Mesh
		castShadow
		geometry={new geometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[0]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
		interactive
		on:click={() => test()}
	/>

	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[1]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>

	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[2]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>

	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[3]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[4]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[5]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[6]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[7]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 0.6, $scale * 0.6, 0.15)}
		position={positions[8]}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
</Group>
