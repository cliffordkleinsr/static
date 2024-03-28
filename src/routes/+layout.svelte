<script lang="ts">
	import '../app.pcss'
  import 'iconify-icon'
  import { page } from '$app/stores'
	import { Footer } from '$lib/components/ui/Footer';
	import { onDestroy } from 'svelte';

  let isDayTime:boolean

  // Function to determine if it's day or night
  function checkTime() {
      const currentHour = new Date().getHours()
      isDayTime = currentHour >= 6 && currentHour < 18 // Assuming day is from 6 AM to 6 PM
  }

  // Call the checkTime function initially
  checkTime()

  // Update the isDayTime variable every minute
  const interval = setInterval(checkTime, 180 * 60000)

  // Clean up the interval when the component is unmounted
  onDestroy(() => clearInterval(interval))
  // console.log(interval)
</script>
<header data-theme="light">
    <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <!-- sidebar content -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/learn">Learn More</a></li>
            </ul>
          </div>
          <div class="w-44 min-[320px]:w-32">
            <img src="https://i.postimg.cc/43b0vYLV/image-removebg-preview.png" alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-1">
            <li><a class="{$page.url.pathname === '/'?' bg-slate-100':''} rounded-md hover:underline decoration-2 decoration-sky-500 underline-offset-8" href="/">Home</a></li>
            <li><a class="{$page.url.pathname === '/about'?'bg-slate-100':''} rounded-md hover:underline decoration-2 decoration-sky-500 underline-offset-8" href="/about">About</a></li>
            <li><a class="{$page.url.pathname === '/services'?'bg-slate-100':''} rounded-md hover:underline decoration-2 decoration-sky-500 underline-offset-8" href="/services  ">Services</a></li>
            <li><a class="{$page.url.pathname === '/learn'?'bg-slate-100':''} rounded-md hover:underline decoration-2 decoration-sky-500 underline-offset-8" href="/learn  ">Learn More</a></li>
          </ul>
        </div>
        <div class="navbar-end min-[320px]:pr-5">
              {#if isDayTime}
                  <iconify-icon icon="meteocons:clear-day" width="22" height="22"></iconify-icon> 
              {:else}
                <iconify-icon icon="meteocons:clear-night" width="22" height="22"></iconify-icon>
              {/if}
            <a href="/">
              <ul class="menu menu-horizontal px-1">
                <li><a class="{$page.url.pathname === '/signs'?'bg-slate-100':''} rounded-md text-md hover:underline decoration-2 decoration-sky-500 underline-offset-8" href="/signs">Our Signs</a></li>
              </ul>
            </a>
        </div>
      </div>
</header>
<slot />


<Footer/>