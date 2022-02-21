<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';

	let board;
	const scale = tweened(0, {
        duration: 800,
        easing: cubicOut
    });

	onMount(() => {
		board = true;

        scale.set(3)
	});

</script>

<div id="info">{$scale}</div>

{#if board}
	<wrapper in:fade={{ duration: 1 }}>
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
	</wrapper>
{/if}

<style>
	#info {
		position: absolute;
		top: 10px;
		width: 100%;
		text-align: center;
		z-index: 100;
		display: block;
	}
</style>
