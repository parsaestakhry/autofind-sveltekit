<script lang="ts">
	import CarPage from '../../../components/CarPage.svelte';
	import type { Car } from '$lib/server/GetCars';
	export let data;
	import Money from 'phosphor-svelte/lib/Money';
	import BookMarkSimple from 'phosphor-svelte/lib/BookmarkSimple';
	const carArray: Car[] | undefined = data.cars;
	let flag = false;
	function bookmark() {
		flag = !flag;
	}
	let carImages = {
		front: '',
		rear: '',
		driver: '',
		passenger: ''
	};
	const loadCarImages = () => {
		// Assuming your files are stored with names like "front-image.jpg" in "uploads/username/registration"
		const basePath = `../../../../uploads/${data.username}/${carArray[0].registration}`;
		carImages.front = `${basePath}/front.jpg`;
		carImages.rear = `${basePath}/rear.jpg`;
		carImages.driver = `${basePath}/driver.jpg`;
		carImages.passenger = `${basePath}/passenger.jpg`;
	};

	loadCarImages();

	let isOpen = false;

	// Function to toggle the visibility of the content
	function toggleCollapse() {
		isOpen = !isOpen;
	}
</script>

<div>
	
	<div class="bg-gray-900 min-h-screen ">
		<div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<!-- Product -->
			<div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
				<!-- Product image -->
				<div class="lg:col-span-4 lg:row-end-1">
					<div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
						<img src={carImages.front} alt={carArray[0].model} class="object-cover object-center" />
					</div>
				</div>

				<!-- Product details -->
				<div
					class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-3 lg:row-end-2 lg:mt-0 lg:max-w-none"
				>
					<div class="flex flex-col-reverse">
						<div class="mt-4">
							<h1 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
								{carArray[0].make} : {carArray[0].model}
							</h1>
							<h2 id="information-heading" class="sr-only">Product information</h2>
						</div>
					</div>

					<p class="mt-6 text-gray-500">
						{carArray[0].description}
					</p>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
						<button
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-extrabold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Buy</button
						>
						<button
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-700 px-8 py-3 text-base font-extrabold text-slate-100 hover:bg-indigo-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Bid</button
						>
					</div>

					<div class="mt-10 border-t border-gray-200 pt-7">
						<h3 class="text-xl font-extrabold text-slate-100">Basic Information</h3>
						<div class=" mt-4 text-lg font-bold text-slate-100">
							<ul role="list">
								<li>Engine : {carArray[0].engine_model}</li>
								<li>type : {carArray[0].type}</li>
								<li>Color : {carArray[0].Color}</li>
								<li>fuel : {carArray[0].fuel_type}</li>
								<li>milage : {carArray[0].milage}</li>
								<li>Year : {carArray[0].year_make}</li>
								<li>Transmission : {carArray[0].gearbox}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
