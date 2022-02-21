<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const scale = tweened(0, {
		duration: 1100,
		easing: cubicOut
	});

	onMount(() => {
		scale.set(3);
	});

	const raycaster = new THREE.Raycaster();
</script>

<flex class="flex justify-center">
	<div class="text-3xl w-full text-center top-4 bg-slate-200 rounded-full max-w-2xl py-4 z-[100] block absolute">
		Scale animaiton: {$scale}
	</div>
</flex>

<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Group>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[0.15, $scale, 0.15]}
			position={[0.5, 0, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[0.15, $scale, 0.15]}
			position={[-0.5, 0, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[$scale, 0.15, 0.15]}
			position={[0, 0.5, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[$scale, 0.15, 0.15]}
			position={[0, -0.5, 0]}
		/>
	</SC.Group>
	<SC.PerspectiveCamera position={[3, 1, -5]} />
	<SC.OrbitControls enableZoom={true} />
</SC.Canvas>
