<!-- CarPage.svelte -->
<script lang="ts">
	import type { Car } from '$lib/server/GetCars';
	import type { PageData } from './$types';
	export let data: PageData;
	const carArray: Car[] | undefined = data.props?.data;
    console.log(carArray)
</script>

<h1>Cars Page</h1>

{#if carArray && carArray.length > 0}
    <ul>
        {#each carArray as car}
            <li>
                <strong>{car.make} {car.model}</strong> ({car.year_make})
            </li>
        {/each}
    </ul>
{:else}
    <p>No cars available.</p>
{/if}
