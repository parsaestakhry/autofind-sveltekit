<script>
	import nissan from '../../../assets/images/pngimg.com - nissan_PNG52.png';
	import ArrowDown from 'phosphor-svelte/lib/ArrowDown';
	import ArrowUp from 'phosphor-svelte/lib/ArrowUp';

	let flag = false;

	function toggleArrow() {
		flag = !flag;
	}
</script>

<div>
	<section class="bg-white dark:bg-gray-900 min-h-screen">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					Choose the make and model
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
				>
					Also you can specify the year and engine and more!
				</p>
				<details class="dropdown">
					<summary
						class="btn m-1 bg-orange-600 text-slate-800 text-xl font-bold hover:bg-orange-700"
						on:click={toggleArrow}
						>Made By ...
						{#if flag}
							<ArrowUp size={22} weight="bold" />
						{:else}
							<ArrowDown size={22} weight="bold" />
						{/if}
					</summary>
					<ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</details>
				<a
					href="#"
					class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
				>
					Speak to Sales
				</a>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
				<img src={nissan} alt="mockup" />
			</div>
		</div>
	</section>
</div>
