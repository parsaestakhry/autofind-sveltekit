<script lang="ts">
	import CarPage from '../../../components/CarPage.svelte';
	import type { Car } from '$lib/server/GetCars';
	export let data;
	import Money from 'phosphor-svelte/lib/Money';
	import BookMarkSimple from 'phosphor-svelte/lib/BookmarkSimple';
	import PencilSimpleLine from 'phosphor-svelte/lib/PencilSimpleLine';
	import Engine from 'phosphor-svelte/lib/Engine';
	import CarSimple from 'phosphor-svelte/lib/CarSimple';
	import Palette from 'phosphor-svelte/lib/Palette';
	import GasPump from 'phosphor-svelte/lib/GasPump';
	import Gauge from 'phosphor-svelte/lib/Gauge';
	import Calendar from 'phosphor-svelte/lib/Calendar';
	import GearSix from 'phosphor-svelte/lib/GearSix';
	import Info from 'phosphor-svelte/lib/Info';
	import PhoneOutGoing from 'phosphor-svelte/lib/PhoneOutgoing';
	import BidCard from '../../../components/BidCard.svelte';
	import { onMount } from 'svelte';
	interface bidItem {
		username: string;
		bid_amount: string;
	}
	const carArray: Car[] | undefined = data.cars;
	let bidValue: number;
	const username = data.username;
	const registration = carArray[0].registration;
	let flag = false;
	let bidArray: bidItem[] = [];
	let image: any;
	let imageSrc: any;
	const sleep = (ms: number | undefined) => new Promise((f) => setTimeout(f, ms));

	onMount(async () => {
		const response = await fetch('/api/handle-image', {
			method: 'POST',
			body: JSON.stringify({ registration }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			// Create a URL from the image blob
			const blob = await response.blob();
			imageSrc = URL.createObjectURL(blob);
			console.log(imageSrc);
		}
	});

	let isOpen = false;
	let fill = false;

	async function saveCar(registration: string, username: string | null) {
		const response = await fetch('/api/save-car', {
			method: 'POST',
			body: JSON.stringify({ registration, username, fill }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		fill = !fill;
		//console.log(await response.json())
	}

	async function submitBid() {
		const response = await fetch('/api/bid', {
			method: 'POST',
			body: JSON.stringify({ bidValue, username, registration }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	onMount(() => {
		async function getBids() {
			const response = await fetch('/api/get-bids', {
				method: 'POST',
				body: JSON.stringify({ registration }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			bidArray = await response.json();
			//console.log(bidArray[0].bid_amount)
		}
		getBids();
	});
</script>

<div>
	<div class="bg-gray-900">
		<div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<!-- Product -->
			<div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
				<!-- Product image -->
				<div class="lg:col-span-4 lg:row-end-1">
					<div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
						<img src={imageSrc} alt={carArray[0].model} class="object-cover object-center" />
					</div>
				</div>

				<!-- Product details -->
				<div
					class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
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
					<input
						bind:value={bidValue}
						type="number"
						placeholder="Enter Bid Here:"
						class="input input-lg input-bordered w-full max-w-xs bg-black placeholder:text-2xl"
					/>
					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
						<button
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-extrabold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Contact Seller <PhoneOutGoing size={25} weight="bold" class="ml-2 mt-1" />
						</button>
						<button
							on:click={() => submitBid()}
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-700 px-8 py-3 text-base font-extrabold text-slate-100 hover:bg-indigo-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Bid <PencilSimpleLine size={22} class="ml-2" weight="bold" />
						</button>

						{#if fill === false}
							<button
								on:click={() => saveCar(carArray[0].registration, data.username)}
								type="button"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-extrabold text-slate-100 hover:bg-indigo-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
								>Save <BookMarkSimple size={25} class="ml-2" weight="bold" />
							</button>
						{:else}
							<button
								on:click={() => saveCar(carArray[0].registration, data.username)}
								type="button"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-extrabold text-slate-100 hover:bg-indigo-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
								>Saved <BookMarkSimple size={25} class="ml-2" weight="fill" />
							</button>
						{/if}
					</div>

					<div class="mt-10 border-t border-gray-200 pt-7">
						<h3 class="flex text-xl font-extrabold text-slate-100">
							Basic Information <Info size={25} class="ml-2 mt-1" weight="bold" />
						</h3>
						<div class=" mt-4 text-lg font-bold text-slate-100">
							<ul role="list">
								<li class="flex">
									Engine : {carArray[0].engine_model}
									<Engine size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									Type : {carArray[0].type}
									<CarSimple size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									Color : {carArray[0].color}
									<Palette size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									Fuel : {carArray[0].fuel_type}
									<GasPump size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									mileage : {carArray[0].mileage}
									<Gauge size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									Year : {carArray[0].year_make}
									<Calendar size={25} class="mb-2 ml-2" weight="bold" />
								</li>
								<li class="flex">
									Transmission : {carArray[0].gearbox}
									<GearSix size={25} class="mb-2 ml-2" weight="bold" />
								</li>
							</ul>
						</div>
					</div>

					<div class="mt-10 border-t border-gray-200 pt-10">
						<h3 class="text-sm font-medium text-slate-100">License</h3>
						<p class="mt-4 text-sm text-gray-500">
							This Car has been uploaded and verified by Caruns.com for more information please <a
								href="/"
								class="font-medium text-indigo-600 hover:text-indigo-500">Read full license</a
							>
						</p>
					</div>

					<div class="mt-10 border-t border-gray-200 pt-10">
						<h3 class="text-sm font-medium text-slate-100">Share</h3>
						<ul role="list" class="mt-4 flex items-center space-x-6">
							<li>
								<a
									href="/"
									class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
								>
									<span class="sr-only">Share on Facebook</span>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="/"
									class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
								>
									<span class="sr-only">Share on Instagram</span>
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="/"
									class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
								>
									<span class="sr-only">Share on Twitter</span>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path
											d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
					<div class="">
						{#each bidArray as item}
							<BidCard userBid={item.username} amount={item.bid_amount} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
