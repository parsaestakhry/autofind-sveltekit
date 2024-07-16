<script lang="ts">
	export let item : string;
	let yes = false;
	import { selectedItems } from '../store/store';
	import { get } from 'svelte/store';
	function toggleSelection() {
		let currentSelection = get(selectedItems);

		if (yes) {
			selectedItems.set([...currentSelection, item]);
		} else {
			selectedItems.set(currentSelection.filter((i) => i !== item));
		}
	}
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text -my-10 w-16 font-bold text-md">{item}</span>
		<input type="checkbox" bind:checked={yes} class="checkbox ml-8" />
	</label>
</div>
