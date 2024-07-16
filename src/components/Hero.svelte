<script>
	export let header;
	import skytop from '../assets/images/skytop.jpg';
	import Engine from 'phosphor-svelte/lib/Engine';
	import LabelCheckBox from './LabelCheckBox.svelte';
	import CarProfile from 'phosphor-svelte/lib/CarProfile';
	import GasPump from 'phosphor-svelte/lib/GasPump';
	import  Gear  from 'phosphor-svelte/lib/Gear';
</script>

<div class="hero h-60  bg-black">
	<div class="hero-overlay bg-opacity-70"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-lg">
			<h1 class="mb-5 text-4xl font-bold text-slate-100 mt-5 ">{header} is a Great taste!</h1>
			<p class="mb-5 text-slate-200 text-lg font-bold">
				now it's time to find what model you like:
			</p>
			<!-- <div class="navbar bg-ghost text-primary-content rounded-lg">
				<div class="flex flex-wrap justify-center">
					<div class="dropdown">
						<div
							tabindex="0"
							role="button"
							class="btn m-1 text-lg bg-orange-600 text-slate-900 font-bold hover:bg-orange-700"
						>
							Engine <Engine size={22} weight="bold" />
						</div>
						<ul class="dropdown-content menu bg-slate-700 rounded-box z-[1] w-44 p-2 shadow">
							<li>
								<LabelCheckBox item={'Inline-3'} />
							</li>
							<li>
								<LabelCheckBox item={'Inline-4'} />
							</li>
							<li>
								<LabelCheckBox item={'Inline-5'} />
							</li>
							<li>
								<LabelCheckBox item={'Inline-6'} />
							</li>
							<li>
								<LabelCheckBox item={'V6'} />
							</li>
							<li>
								<LabelCheckBox item={'V8'} />
							</li>
							<li>
								<LabelCheckBox item={'V10'} />
							</li>
							<li>
								<LabelCheckBox item={'V12'} />
							</li>
							<li>
								<LabelCheckBox item={'W12'} />
							</li>
							<li>
								<LabelCheckBox item={'W16'} />
							</li>
						</ul>
					</div>
					<div class="dropdown">
						<div
							tabindex="0"
							role="button"
							class="btn m-1 text-lg bg-orange-600 text-slate-900 font-bold hover:bg-orange-700"
						>
							Type <CarProfile size={22} weight="bold" />
						</div>
						<ul class="dropdown-content menu bg-slate-700 rounded-box z-[1] w-44 p-2 shadow">
							<li>
								<LabelCheckBox item={'Coupe'} />
							</li>
							<li>
								<LabelCheckBox item={'HatchBack'} />
							</li>
							<li>
								<LabelCheckBox item={'Sedan'} />
							</li>
							<li>
								<LabelCheckBox item={'SUV'} />
							</li>
							<li>
								<LabelCheckBox item={'Wagon'} />
							</li>
							<li>
								<LabelCheckBox item={'Truck'} />
							</li>
						</ul>
					</div>
					<div class="dropdown">
						<div
							tabindex="0"
							role="button"
							class="btn m-1 text-lg bg-orange-600 text-slate-900 font-bold hover:bg-orange-700"
						>
							Fuel <GasPump size={22} weight="bold" />
						</div>
						<ul class="dropdown-content menu bg-slate-700 rounded-box z-[1] w-44 p-2 shadow">
							<li>
								<LabelCheckBox item={'Gas'} />
							</li>
							<li>
								<LabelCheckBox item={'Diesel'} />
							</li>
							<li>
								<LabelCheckBox item={'Electric'} />
							</li>
						</ul>
					</div>
					<div class="dropdown">
					<div
						tabindex="0"
						role="button"
						class="btn m-1 text-lg bg-orange-600 text-slate-900 font-bold hover:bg-orange-700"
					>
						Transmission <Gear size={22} weight="bold" />
					</div>
					<ul class="dropdown-content menu bg-slate-700 rounded-box z-[1] w-44 p-2 shadow">
						<li>
							<LabelCheckBox item={'Automatic'} />
						</li>
						<li>
							<LabelCheckBox item={'Manual'} />
						</li>
					</ul>
				</div>
				</div>
			</div> -->
		</div>
	</div>
</div>


