<script>
	import tesla from '../assets/images/tesla.jpg'
    import diesel from '../assets/images/diesel.jpg'
    import petrol from  '../assets/images/petrol.jpg'
    import CarouselCard from './CarouselCard.svelte';

</script>

<div class="carousel carousel-center p-10  bg-ghost rounded-box flex mx-auto ">
	<div class="flex space-x-3">
		<a href="/cars/categories/hatchback" class="carousel-item">
			<CarouselCard name={'Electric'} pic={tesla} />
		</a>
		<a href="/cars/categories/sedan"  class="carousel-item">
			<CarouselCard name={'Diesel'} pic={diesel} />
		</a>
		<a href="/cars/categories/suv" class="carousel-item">
			<CarouselCard name={'Gas'} pic={petrol} />
		</a>
		
	</div>
</div>
