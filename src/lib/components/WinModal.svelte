<script>
	import { slide, fade } from 'svelte/transition';
	import { winner } from '$stores';

	let showModal = true;
	let background;

	export function toggleModal() {
		showModal = !showModal;
	}

	$: if ($winner === 'X') {
		background = 'bg-red-400';
	} else {
		background = 'bg-blue-300';
	}
</script>

{#if showModal}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 100 }}
		class="w-screen h-screen fixed bg-black/40 z-[1000]"
	>
    <flex class="flex flex-col relative justify-center vertical-center gap-4">
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto z-[101] {background} rounded-md w-fit grid p-4"
		>
			<p class="text-center text-3xl">
				<slot />
			</p>
		</modal>
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto z-[101] bg-zinc-100 rounded-md max-w-lg p-4 grid"
		>
			<button
				on:click={() => (showModal = false)}
				on:click
				class="self-center p-2 border border-transparent shadow-sm text-2xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Rematch
			</button>
		</modal>
    </flex>
	</div>

{/if}

<style>
	.vertical-center {
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>
