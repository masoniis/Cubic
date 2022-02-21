<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<h1 class="text-4xl"> HEY </h1>

<SC.Canvas>
	<SC.Mesh geometry={new THREE.BoxGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
</SC.Canvas>