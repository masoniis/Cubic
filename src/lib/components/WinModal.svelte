<script>
	import { slide, fade } from 'svelte/transition';
	import { winner } from '$stores';

	let showModal;
	let background;

	export function toggleModal() {
		showModal = !showModal;
	}

	$: if ($winner === 'X won the game.') {
		background = 'bg-red-400';
	} else if ($winner === 'O won the game.') {
		background = 'bg-blue-300';
	} else {
        background = 'bg-slate-200'
    }
</script>

{#if showModal}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 100 }}
		class="w-screen h-screen fixed bg-black/50 z-[1000]"
	>
    <flex class="flex flex-col relative justify-center vertical-center gap-4">
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto z-[101] {background} rounded-md w-fit grid p-4 shadow-2xl"
		>
			<p class="text-center text-3xl">
				<slot />
			</p>
		</modal>
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto z-[101] bg-zinc-100 rounded-md max-w-lg p-4 grid shadow-2xl"
		>
			<button
				on:click={() => (showModal = false)}
				on:click
				class="self-center p-2 shadow-sm text-2xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
			>
				@ Rematch
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
