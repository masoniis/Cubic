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
</script>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 3, y: -1, z: 5 }}>
			<OrbitControls autoRotate />
		</PerspectiveCamera>

		<DirectionalLight shadow color={'white'} position={{ x: -15, y: 45, z: 20 }} />
		<HemisphereLight skyColor={'white'} groundColor={'#ac844c'} intensity={0.4} />

		<Group>
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry(0.15, $scale * 3, 0.15)}
				position={{ x: 0.5 }}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry(0.15, $scale * 3, 0.15)}
				position={{ x: -0.5 }}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
			<Mesh
				castShadow
				geometry={new BoxBufferGeometry($scale * 3, 0.15, 0.15)}
				position={{ y: 0.5 }}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
			<Mesh
				castShadow
				position={{ y: -0.5 }}
				geometry={new BoxBufferGeometry($scale * 3, 0.15, 0.15)}
				material={new MeshStandardMaterial({ color: '#ff3e00' })}
			/>
		</Group>
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
