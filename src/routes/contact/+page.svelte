<script lang="ts">
    import { slide } from 'svelte/transition'
    import { sineInOut } from 'svelte/easing'

    let toast:boolean = false
    const showToast = () =>{
        toast = true
        setTimeout(() => {
            toast = false
        }, 2000)
    }
</script>
<div class="flex flex-col p-5">
    <div class="card w-full h-full bg-base-100 shadow-xl">
        <div class="card-body lg:px-20">
            <div class="space-y-5">
                <h2 class="card-title text-3xl">Our Ethos</h2>
                <p class=" italic">"Our commitment to Sustainability, Social Responsibility, and Inclusivity"</p>
            </div>
            <div class="divider py-2 pt-5"></div>
            <div class="flex flex-col gap-9">
                <p>
                    Learn about SignHub's dedication to sustainability and social responsibility. Our open-source
                    platforms, such as Google Plus Codes, contribute to a greener and more eco-friendly approach to
                    digital addressing. We focus on reducing waste, promoting recycling, fostering youth employment, and
                    supporting diversity and inclusivity in our workforce.
                </p>
                <h2 class="text-xl font-semibold">
                    Start Your Journey with SignHub
                </h2>
                <p>
                    SignHub International Limited invites you to start your journey with us as your digital addressing
                    partner. Experience the transformative power of accurate, inclusive, and sustainable addressing
                    solutions. Contact us to learn more about how SignHub is reshaping the future of digital addressing.
                </p>
                
                <form class="pt-5 space-y-6" action="" method="post">
                    <h1 class="text-xl font-semibold">
                        Tell us More
                    </h1>
                    <div class="divider py-2 pt-5"></div>
                    <div class="flex-flex-col space-y-6">
                        <div class="flex lg:flex-nowrap w-96 gap-9 flex-wrap">
                            <label class="input input-bordered flex items-center gap-2">
                                <input type="text" class="grow" placeholder="Name" />
                                <iconify-icon icon="system-uicons:user-male"  style="color: black"></iconify-icon>
                            </label>
                            <label class="input input-bordered flex items-center gap-2">
                                <input type="text" class="grow" placeholder="Mail" />
                                <iconify-icon icon="system-uicons:mail"  style="color: black"></iconify-icon>
                            </label>
                        </div>
                        <div class="flex flex-nowrap w-96 gap-9">
                            <label class="input input-bordered flex items-center gap-2">
                                <input type="text" class="grow" placeholder="Phone" />
                                <iconify-icon icon="mdi-light:phone"  style="color: black"></iconify-icon>
                            </label>
                        </div>
                        <textarea placeholder="Tell Us More" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                    {#if toast}
                        <div role="alert" class="alert alert-success lg:w-1/6 scale-90" transition:slide={{duration:350, axis:'x', easing:sineInOut}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Your Message has been sent</span>
                        </div>
                    {/if}
                    <button on:click|preventDefault={showToast} class="btn bg-[#9BBA54] hover:bg-[#9BBA54] text-white lg:w-1/3">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>