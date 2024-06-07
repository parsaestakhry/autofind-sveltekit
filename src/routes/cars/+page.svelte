<!-- CarPage.svelte -->
<script lang="ts">
	import type { Car } from '$lib/server/GetCars';
	import Card from '../../components/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const carArray: Car[] | undefined = data.props?.data;
    
</script>



{#if carArray && carArray.length > 0}
    <ul class="flex flex-wrap justify-center mt-2">
        {#each carArray as car}
            <li>
                <Card model={car.model} make={car.make} milage={car.milage} color={car.Color} fuel_type={car.fuel_type} year_make={car.year_make}/>
            </li>
        {/each}
    </ul>
{:else}
    <p>No cars available.</p>
{/if}
