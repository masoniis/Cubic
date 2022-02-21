<script>
	import { CircleBufferGeometry, MeshStandardMaterial, BoxBufferGeometry, DoubleSide } from 'three';
	import {
		Mesh,
		Group
	} from 'threlte';
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
</script>

<Group>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry(0.15, $scale * 2.8, 0.15)}
		position={{ x: 0.5 }}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry(0.15, $scale * 2.8, 0.15)}
		position={{ x: -0.5 }}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		geometry={new BoxBufferGeometry($scale * 2.8, 0.15, 0.15)}
		position={{ y: 0.5 }}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
	<Mesh
		castShadow
		position={{ y: -0.5 }}
		geometry={new BoxBufferGeometry($scale * 2.8, 0.15, 0.15)}
		material={new MeshStandardMaterial({ color: '#ff3e00' })}
	/>
</Group>
