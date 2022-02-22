<script>
	import { CylinderBufferGeometry, MeshStandardMaterial } from 'three';
	import { Mesh } from 'threlte';

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
