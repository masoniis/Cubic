<script>
	import { MeshStandardMaterial, BoxBufferGeometry } from 'three';
	import { Mesh } from 'threlte';

	export let position;
	export let tween;
</script>

<Mesh
	castShadow
	geometry={new BoxBufferGeometry($tween * 0.6, $tween * 0.2, 0.15)}
	{position}
	rotation={{ z: 40 }}
	material={new MeshStandardMaterial({ color: '#c72e26' })}
/>
<Mesh
	castShadow
	geometry={new BoxBufferGeometry($tween * 0.6, $tween * 0.2, 0.15)}
	{position}
	rotation={{ z: -40 }}
	material={new MeshStandardMaterial({ color: '#c72e26' })}
/>
