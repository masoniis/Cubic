<script>
	import { slide, fade } from 'svelte/transition';
	import { winner } from '$stores';

	let showModal = true;
	let background;

	export function toggleModal() {
		showModal = !showModal;
	}

	$: if ($winner === 'x') {
		background = 'bg-red-400';
	} else {
        background = 'bg-blue-300'
    }
</script>

{#if showModal}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 100 }}
		class="w-screen h-screen fixed bg-black/40 z-[1000]"
	>
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto vertical-center relative z-[101] {background} rounded-md max-w-lg p-10 grid"
		>
			<p class="col-span-2 text-center">
				<slot />
			</p>
		</modal>
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto vertical-center relative z-[101] bg-zinc-100 rounded-md max-w-lg p-10 grid grid-cols-2 grid-rows-2"
		>
			<button
				on:click={() => (showModal = false)}
				on:click
				class="col-span-2 self-center p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Restart Match
			</button>
		</modal>
	</div>
{/if}

<style>
	.vertical-center {
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>
