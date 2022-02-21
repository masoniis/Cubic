<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
    import {onMount} from 'svelte';

    let board;

    onMount(() => {
        board = true;
    });

</script>

<div id="info">Test</div>

{#if board}
<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Group>
		<SC.Mesh geometry={new THREE.BoxGeometry()} scale={[0.15, 3, 0.15]} position={[0.5, 0, 0]} />
		<SC.Mesh geometry={new THREE.BoxGeometry()} scale={[0.15, 3, 0.15]} position={[-0.5, 0, 0]} />
		<SC.Mesh geometry={new THREE.BoxGeometry()} scale={[3, 0.15, 0.15]} position={[0, 0.5, 0]} />
		<SC.Mesh geometry={new THREE.BoxGeometry()} scale={[3, 0.15, 0.15]} position={[0, -0.5, 0]} />
	</SC.Group>
	<SC.PerspectiveCamera position={[3, 1, -5]} />
	<SC.OrbitControls enableZoom={true} />
</SC.Canvas>
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
