<script lang="ts">
	import { PinContainer } from "$lib/components/ui/ThreeDPin";
	import { TextGenerateEffect } from "$lib/components/ui/TextGenerateEffect";

	
</script>
<div class="hero h-[20em] sm:h-[20em] lg:h-[29rem]"
	style="background-image: url('https://africanews.space/wp-content/uploads/2021/05/mega-constellation-satellites-on-the-horizon.jpg');">
	<div class="hero-overlay"></div>
	<div class="hero-content text-white mt-5">
		<div class="flex flex-col h-full space-y-4">
			<h1 class="text-4xl font-semibold">
				<TextGenerateEffect words={'Welcome to SignHub International Limited'} />
			</h1>
			<p class="italic"><TextGenerateEffect words={'“Your Digital Address”'}/></p>
		</div>
	</div>
</div>
<div class="flex flex-col w-full pt-5 gap-4">
	<div class="text-xl font-semibold text-center">
		<p class="text-xl text-[#0c162c] font-bold">OVERVIEW</p>
	</div>
	<div class="flex flex-wrap justify-center px-4 md:space-x-[10em] lg:space-x-[22em] pt-5 pb-5">
		<PinContainer title="PQ97+2F" href="https://aceternity.sveltekit.io">
			<div
				class="flex h-80 w-[340px] sm:w-[27rem] md:w-[27rem] lg:w-[65rem] flex-col p-4 tracking-tight text-slate-100/50"
			>
				<div class="!m-0 !p-0 text-sm">
					<span class="text-slate-800 tracking-normal text-sm">
						<strong class=" text-lg text-[#0c162c]">SignHub International Limited</strong> is at the forefront of transforming digital addressing services with a revolutionary approach.
						We leverage the power of open-source <iconify-icon icon="simple-icons:pluscodes"></iconify-icon> Plus Codes to provide accurate, cost-effective, and inclusive digital addressing solutions.
						Explore our website to discover how our expertise and commitment to innovation are reshaping the way locations are identified and accessed.
					</span>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="avatar mt-2 flex w-full justify-center">
					<div class="w-20 lg:w-36 rounded-full ring ring-tertiary ring-offset-base-100 ring-offset-2">
						<img src="https://i.postimg.cc/9M0km4ZT/owash.png"/>
					</div>
				</div>
			</div>
		</PinContainer>
	</div>
	<div class="divider py-[2rem] pt-5"></div>

	<div class="flex flex-col items-center pl-4 pb-10">
		<div class="flex flex-wrap sm:flex-wrap lg:flex-nowrap sm:px-0 lg:px-10 gap-9">
			<div class="space-y-8">
				<div class="flex flex-col gap-5">
					<div class="flex flex-wrap gap-[0.23em]">
						<a href="/about">
							<h1 class="text-xl text-[#0c162c] hover:underline decoration-2 decoration-sky-900 underline-offset-8">
								About Us 
							</h1>
						</a>
					</div>
					<p>Learn about SignHub's mission, vision, and commitment to empowering communities through innovative addressing solutions.</p>	
				</div>
				<div class="space-y-4">
					<div class="flex flex-wrap gap-[0.23em]">
						<a href="/services">
							<h1 class="text-xl text-[#0c162c] hover:underline decoration-2 decoration-sky-900 underline-offset-8">
								Services 
							</h1>
						</a>
					</div>
					<p>
						Explore our comprehensive range of services, including geospatial expertise, physical addressing signs,
						custom addressing projects, and more.
					</p>
				</div>
				</div>
				<div class="space-y-8">
					<div class="flex flex-col gap-5">
						<div class="flex flex-wrap gap-[0.23em]">
							<a href="/learn">
								<h1 class="text-xl text-[#0c162c] hover:underline decoration-2 decoration-sky-900 underline-offset-8">
									Learn More 
								</h1>
							</a>
						</div>
						<p> 
							Dive into the benefits and advantages of our address-based databases, and discover the various types and
							applications of these databases.
						</p>
					</div>
					<div class="space-y-4">
						<div class="flex flex-wrap gap-[0.23em]">
							<a href="/highlights">
								<h1 class="text-xl text-[#0c162c] hover:underline decoration-2 decoration-sky-900 underline-offset-8">
									Project Highlights 
								</h1>
							</a>
						</div>
						<p>
							See the impact of our collaboration with Google Certified Partners and our successful projects in South
							Africa and Kenya.
						</p>
					</div>
				</div>
				<div class="space-y-8">
					<div class="flex flex-col gap-5">
						<div class="flex flex-wrap gap-[0.25em]">
						<a href="/contact">
							<h1 class="text-xl text-[#0c162c] hover:underline decoration-2 decoration-sky-900 underline-offset-8">
								Let`s Connect 
							</h1>
						</a>
						</div>
						<p> 
							See the impact of our collaboration with Google Certified Partners and our successful projects in South
							Africa and Kenya.
						</p>
					</div>
				</div>
		</div>
	</div>
</div>


