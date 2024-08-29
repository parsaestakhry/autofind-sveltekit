<script>
	import { Garage, GasPump, Key } from 'phosphor-svelte';
	import intropic from '../assets/images/intro-pic.jpg';
	import CarLogos from '../components/CarLogos.svelte';
	import Carousel from '../components/Carousel.svelte';
	import CarProfile from 'phosphor-svelte/lib/CarProfile';
	import CarouselCard from '../components/CarouselCard.svelte';
	import FuelCarousel from '../components/FuelCarousel.svelte';
	import DemoHero from '../components/DemoHero.svelte';
</script>

<div class="min-h-screen bg-gray-900">
	<DemoHero/>
	<div class="relative h-80 sm:h-80">
		
		<!-- <img class="h-full w-screen object-cover object-right " src={intropic} alt="family-car" />
		<div class="absolute inset-0 items-center justify-start text-wrap text-center font-extrabold">
			<h1
				class="mx-10 mt-16 flex items-center justify-center sm:text-7xl text-slate-50 sm:mt-20 text-5xl"
			>
				Your Next Car Is Here.
			</h1>
			<h3
				class="mx-10 mt-5 flex items-center justify-center text-2xl text-slate-50 sm:mt-10 sm:text-4xl"
			>
				Waiting to be in your garage
			</h3>
			<div class="mt-6 flex-col items-center justify-center space-x-2 space-y-2 sm:hidden">
				<a
					href="/buy"
					class="btn border-none bg-orange-600 text-xl font-extrabold text-slate-900 hover:bg-orange-600"
				>
					Buy a Car
				</a>
				<a
					href="/sell"
					class="btn border-none bg-orange-600 text-xl font-extrabold text-slate-900 hover:bg-orange-600"
				>
					Sell a Car
				</a>
			</div>
			<div class="-mt-10 mr-20 hidden flex-col items-end justify-end space-y-3 sm:flex">
				<a
					href="/buy"
					class="h-18 btn w-48 border-none bg-orange-600 text-2xl font-extrabold text-slate-900 hover:bg-orange-700"
				>
					Buy a Car
				</a>
				<a
					href="/sell"
					class="h-18 btn w-48 border-none bg-orange-600 text-2xl font-extrabold text-slate-900 hover:bg-orange-700"
				>
					Sell a Car
				</a>
			</div>
		</div> -->
	</div>

	<div class="flex items-center justify-center sm:mt-10 sm:space-x-4">
		<div class="mx-10 justify-center text-center sm:mr-10">
			<CarProfile class="mx-auto mt-2" size={70} color="#fafafa" />
			<h2 class="mb-3 text-4xl sm:text-5xl font-extrabold text-slate-50">We have what you are looking for.</h2>
		</div>
	</div>
	<Carousel />
	<CarLogos />
	<div class="mx-10 justify-center text-center sm:mr-10 mt-20 ">
		<h2 class="mb-3 sm:text-5xl text-4xl  font-extrabold text-slate-50">With your way of Fueling your Car <GasPump class="mx-auto mt-5 " size={80} color="#fafafa" /> </h2>
	</div>
	<div class="flex justify-center" >
		<FuelCarousel/>
	</div>
	
</div>
