<script lang="ts">
	import '../app.pcss'
  import 'iconify-icon'
  import { page } from '$app/stores'
	import { Footer } from '$lib/components/ui/Footer';
</script>
<header data-theme="pastel">
    <div class="navbar bg-base-200">
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
              <li><a href="/learn">Our Signs</a></li>
            </ul>
          </div>
          <div class="w-40">
            <a href="/"><img src="https://i.postimg.cc/43b0vYLV/image-removebg-preview.png" alt="Tailwind-CSS-Avatar-component"/></a>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-1">
            <li><a class="{$page.url.pathname === '/'? 'bg-slate-200':''} rounded-md" href="/">Home</a></li>
            <li><a class="{$page.url.pathname === '/about'?'bg-slate-200':''} rounded-md" href="/about">About</a></li>
            <li><a class="{$page.url.pathname === '/services'?'bg-slate-200':''} rounded-md" href="/services  ">Services</a></li>
            <li><a class="{$page.url.pathname === '/learn'?'bg-slate-200':''} rounded-md" href="/learn  ">Learn More</a></li>
            <li><a class="{$page.url.pathname === '/learn'?'bg-slate-200':''} rounded-md" href="/sdgs  ">SDGS</a></li>
          </ul>
        </div>
        <div class="navbar-end">
            <ul class="menu menu-horizontal px-1 hidden lg:contents">
              <li><a class="{$page.url.pathname === '/signs'?'bg-slate-100':''} rounded-md text-md" href="/signs">Our Signs</a></li>
            </ul>
        </div>
      </div>
</header>
<slot />
<Footer/>