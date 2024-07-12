<script>
	import CarouselCard from './CarouselCard.svelte';
	import hatchback from '../assets/images/hatchback.jpg';
	import coupe from '../assets/images/coupe.jpg';
	import sedan from '../assets/images/sedan.jpg';
	import wagon from '../assets/images/wagon.jpg';
	import truck from '../assets/images/truck.jpg';
</script>

<div class="carousel carousel-center p-7 space-x-4 bg-ghost rounded-box flex sm:mx-20 mb-10">
	<div class="flex space-x-4">
		<a href="/cars/categories/hatchback" class="carousel-item">
			<CarouselCard name={'Hatchback'} pic={hatchback} />
		</a>
		<a href="/cars/categories/sedan"  class="carousel-item">
			<CarouselCard name={'Sedan'} pic={sedan} />
		</a>
		<a href="/cars/categories/coupe" class="carousel-item">
			<CarouselCard name={'Coupe'} pic={coupe} />
		</a>
		<a href="/cars/categories/wagon" class="carousel-item">
			<CarouselCard name={'Wagon'} pic={wagon} />
		</a>

		<a href="/cars/categories/truck" class="carousel-item">
			<CarouselCard name={'Truck'} pic={truck} />
		</a>
	</div>
</div>
