<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Mesh } from 'three';

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

	const raycaster = new THREE.Raycaster();
</script>

<flex
	class="flex flex-col mx-auto relative w-full top-4 bg-slate-50 z-[100] max-w-2xl py-4 text-2xl"
>
	<div class="w-full text-center rounded-full max-w-2xl z-[100] block">
		Scale animaiton: {$scale}
	</div>

	{#if $scale === 1 || $scale === -1}
		<button
			on:click={() => {
				reverse();
			}}
			class="z-[100]"
		>
			Reverse Animation
		</button>
	{/if}
</flex>

<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Group>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[0.15, $scale * 3, 0.15]}
			position={[0.5, 0, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[0.15, $scale * 3, 0.15]}
			position={[-0.5, 0, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[$scale * 3, 0.15, 0.15]}
			position={[0, 0.5, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			scale={[$scale * 3, 0.15, 0.15]}
			position={[0, -0.5, 0]}
		/>
	</SC.Group>

	<SC.Group>
		<SC.Mesh geometry={new THREE.BoxGeometry()} scale={[0.6 * $scale, 0.6 * $scale, 0.15]} />
	</SC.Group>
	<SC.PerspectiveCamera position={[3, 1, -5]} />
	<SC.OrbitControls enableZoom={true} />
</SC.Canvas>
