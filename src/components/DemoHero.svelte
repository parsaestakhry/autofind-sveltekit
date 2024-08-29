<script>
	import { CarBattery } from 'phosphor-svelte';
import longHatch from '../assets/images/longhatch.jpg';
</script>

<div class="relative bg-gray-900 min-h-screen  ">
	<div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
		<div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<CarBattery size={55} color="#f7f7f7" />
				<!-- <div class="hidden sm:mt-32 sm:flex lg:mt-16">
					<div
						class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					>
						Anim aute id magna aliqua ad ad non deserunt sunt. <a
							href="#"
							class="whitespace-nowrap font-semibold text-indigo-600"
							><span class="absolute inset-0" aria-hidden="true"></span>Read more
							<span aria-hidden="true">&rarr;</span></a
						>
					</div>
				</div> -->
				<h1 class="mt-24 text-4xl font-bold tracking-tight text-slate-50 sm:mt-10 sm:text-6xl">
					Destination to find your next car !
				</h1>
				<p class="mt-6 text-xl text-wrap leading-8 text-gray-400">
					either choose it from the large collection of our cars or let us help you
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="/buy"
						class="rounded-md bg-orange-600 px-3.5 py-2.5 text-xl font-bold text-slate-800 shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Buy a car </a
					>
					<a
						href="/sell"
						class="rounded-md bg-orange-600 px-3.5 py-2.5 text-xl font-bold text-slate-800 shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Sell a car</a
					>
				</div>
			</div>
		</div>
		<div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
			<img
				class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				src={longHatch}
				alt=""
			/>
		</div>
	</div>
</div>
