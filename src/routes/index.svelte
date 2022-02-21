<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<div id="info">Test</div>

​<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Mesh geometry={new THREE.TetrahedronGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
+	<SC.OrbitControls enableZoom={true} />
​</SC.Canvas>

<style>
    #info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}
</style>