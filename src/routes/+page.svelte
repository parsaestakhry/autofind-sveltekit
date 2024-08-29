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

	<div class="flex items-center justify-center sm:mt-20 sm:space-x-4">
		<div class="mx-10 justify-center text-center sm:mr-10  ">
			<CarProfile class="mx-auto mt-10" size={80} color="#fafafa" />
			<h2 class="mb-3 text-4xl sm:text-5xl font-extrabold text-slate-50 mt-10 ">We have what you are looking for.</h2>
		</div>
	</div>
	<Carousel />
	<CarLogos />
	<div class="mx-10 justify-center text-center sm:mr-10 mt-20 ">
		<h2 class="mb-3 sm:text-5xl text-4xl  font-extrabold text-slate-50"> <GasPump class="mx-auto mb-5 " size={80} color="#fafafa" />  With your way of Fueling your Car </h2>
	</div>
	<div class="flex justify-center" >
		<FuelCarousel/>
	</div>
	
</div>
