<script lang="ts">
	import GLS from '../../../assets/images/gls.webp';
	let minValue: number;
	let maxValue: number;
</script>

<div>
	<section class="bg-white dark:bg-gray-900">
		<div class="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					We can find the car you'll love !
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
				>
					From family SUVs and Sedans to Sports Cars, we've got them all.
				</p>
				<div class="sm:flex sm:space-x-20 space-y-10 sm:space-y-0">
					<div>
						<h1
							class=" text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-10"
						>
							From
							{#if minValue === null || minValue === undefined}
								{''}
							{:else}
								{minValue}$
							{/if}
						</h1>
						<input
							type="number"
							bind:value={minValue}
							placeholder="Minimum Budget"
							class=" bg-orange-600 input input-bordered w-48 placeholder:text-slate-800 placeholder:font-bold font-bold text-slate-800"
						/>
					</div>

					<div>
						<h1
							class=" text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-10 "
						>
							To
							{#if maxValue === null || maxValue === undefined}
								{''}
							{:else}
								{maxValue}$
							{/if}
						</h1>
						<input
							type="number"
							bind:value={maxValue}
							placeholder="Maximum Budget"
							class=" bg-orange-600 input input-bordered w-48 placeholder:text-slate-800 placeholder:font-bold font-bold text-slate-800"
						/>
					</div>
				</div>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex p-8">
				<img src={GLS} alt="mockup" />
			</div>
		</div>
	</section>
</div>
