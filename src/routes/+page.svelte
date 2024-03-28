<script>
	import { PinContainer } from "$lib/components/ui/ThreeDPin";
	import { CardContainer, CardItem, CardBody} from "$lib/components/ui/ThreeDCardEffect"
	import Afr from "$lib/imgs/centric.jpg"
	import OWa from "$lib/imgs/owash.png"
	import plus from "$lib/imgs/pscode.png"
	import { TextGenerateEffect } from "$lib/components/ui/TextGenerateEffect";

	let isMouseEntered = false
</script>
<div class="hero sm:h-[20em] lg:h-[29rem]"
	style="background-image: url('https://images.unsplash.com/photo-1604072390964-b26e6a6fac29?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
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
<div class="flex flex-col w-full pt-9 py-5">
	<div class="text-xl font-semibold text-center">
		<p class="text-xl text-[#0c162c]">OVERVIEW</p>
	</div>
	<div class="flex flex-wrap justify-center px-4 md:space-x-[10em] lg:space-x-[22em] items-center pt-5">
		<PinContainer title="PQ97+2F" href="https://aceternity.sveltekit.io">
			<div
				class="flex h-80 sm:w-[27rem] md:w-[27rem] lg:w-[45rem] flex-col p-4 tracking-tight text-slate-100/50"
			>
				<!-- <h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Aceternity UI</h3> -->
				<div class="!m-0 !p-0 text-sm">
					<span class="text-slate-800 tracking-normal">
						<strong class=" text-lg text-[#0c162c]">SignHub International Limited</strong> is at the forefront of transforming digital addressing services with a revolutionary approach.
						We leverage the power of open-source <iconify-icon icon="simple-icons:pluscodes"></iconify-icon> Plus Codes to provide accurate, cost-effective, and inclusive digital addressing solutions.
						Explore our website to discover how our expertise and commitment to innovation are reshaping the way locations are identified and accessed.
					</span>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="avatar mt-2 flex w-full justify-center">
					<div class="w-36 rounded-full ring ring-tertiary ring-offset-base-100 ring-offset-2">
						<img src={OWa}/>
					</div>
				</div>
				<!-- <div
					class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
					
				/> -->
			</div>
		</PinContainer>
		<CardContainer bind:isMouseEntered className="flex inter-var md:pr-32 lg:pr-80 xl:pr-0">
			<CardBody
				className="bg-gray-50 relative group/card mt-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-500 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
			>
				<CardItem
					{isMouseEntered}
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					Addresses for everyone.
				</CardItem>
				<CardItem
					{isMouseEntered}
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
				Digital addressing, for the entire world
				</CardItem>
				<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
					<img
						src="{plus}"
						height="1000"
						width="1000"
						class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
			</CardBody>
		</CardContainer>
	</div>

	<div class="divider py-[2rem] pt-2"></div>

	<div class="flex flex-col items-center pl-4 pb-10">
		<div class="flex sm:flex-wrap lg:flex-nowrap sm:px-0 lg:px-10 gap-9">
			<div class="space-y-8">
				<div class="flex flex-col gap-5">
					<div class="flex flex-wrap gap-[0.23em]">
						<a href="/about">
							<h1 class="text-xl text-[#0c162c]">
								About Us 
							</h1>
						</a>
						<iconify-icon class="pt-[0.45em]" icon="line-md:question-circle"  style="color: rgb(66 133 244/1)"/>
					</div>
					<p>Learn about SignHub's mission, vision, and commitment to empowering communities through innovative addressing solutions.</p>	
				</div>
				<div class="space-y-4">
					<div class="flex flex-wrap gap-[0.23em]">
						<a href="/services">
							<h1 class="text-xl text-[#0c162c]">
								Services 
							</h1>
						</a>
						<iconify-icon class="pt-[0.45em]" icon="line-md:rss" style="color: rgb(66 133 244/1)"/>
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
								<h1 class="text-xl text-[#0c162c]">
									Learn More 
								</h1>
							</a>
							<iconify-icon class="pt-[0.45em]" icon="line-md:document-report" style="color: rgb(66 133 244/1)"/>
						</div>
						<p> 
							Dive into the benefits and advantages of our address-based databases, and discover the various types and
							applications of these databases.
						</p>
					</div>
					<div class="space-y-4">
						<div class="flex flex-wrap gap-[0.23em]">
							<a href="/highlights">
								<h1 class="text-xl text-[#0c162c]">
									Project Highlights 
								</h1>
							</a>
							<iconify-icon class="pt-[0.45em]" icon="line-md:compass-loop" style="color: rgb(66 133 244/1)"/>
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
							<h1 class="text-xl text-[#0c162c]">
								Let`s Connect 
							</h1>
						</a>
						<iconify-icon class="pt-[0.45em]" icon="line-md:telegram" style="color: rgb(66 133 244/1)"/>
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


