<script>
	import { Key } from 'phosphor-svelte';
import intropic from '../assets/images/intro-pic.jpg';
	import CarLogos from '../components/CarLogos.svelte';
	import Carousel from '../components/Carousel.svelte';
	import CarProfile from 'phosphor-svelte/lib/CarProfile';
</script>

<div class="min-h-screen bg-gray-900">
	<div class="relative h-80 sm:h-80">
		<!-- <img class="h-full w-screen object-cover object-right " src={intropic} alt="family-car" /> -->
		<div class="absolute inset-0 text-center text-wrap  items-center justify-start font-extrabold">
			<h1 class="mt-16 text-6xl mx-10 text-slate-50 sm:mt-20 sm:text-7xl flex justify-center items-center ">
				Your Next Car Is Here.</h1>
			<div class="mt-6 space-x-2 flex-col items-center justify-center space-y-2 sm:hidden">
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
		</div>
	</div>
	<div class="sm:mt-10 flex items-center justify-center sm:space-x-4">
		<div class="mx-10 justify-center text-center sm:mr-10">
			<CarProfile class="mx-auto" size={80} color="#fafafa" />
			<h2 class="mb-3 text-5xl font-extrabold text-slate-50">We have what you are looking for.</h2>
		</div>
	</div>
	<Carousel />
	<CarLogos/>
</div>
