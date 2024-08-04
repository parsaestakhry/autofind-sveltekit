<script>
	import { CarBattery, InstagramLogo, XLogo } from 'phosphor-svelte';
</script>

<footer class="footer footer-center bg-orange-600 p-10 text-primary-content">
	<aside>
		<CarBattery size={80} />
		<p class="font-bold">
			CARUNS Ltd.
			<br />
			Providing the ride of your life
		</p>
		<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a>
				<XLogo size={50} />
			</a>
			<a>
				<InstagramLogo size={50} />
			</a>
		</div>
	</nav>
</footer>
