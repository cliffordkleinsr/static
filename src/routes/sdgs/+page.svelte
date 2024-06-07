<script lang="ts">

    let modal: HTMLDialogElement
    const items = [
        {name: 'No Poverty', icon: '<iconify-icon class="mx-auto" icon="material-symbols-light:family-restroom-rounded" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Zero Hunger', icon: '<iconify-icon icon="ph:bowl-steam-fill" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Good Health', icon: '<iconify-icon icon="fluent:heart-pulse-checkmark-20-filled" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Quality Education', icon: '<iconify-icon icon="zondicons:education" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Gender Equality', icon: '<iconify-icon icon="material-symbols:transgender" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Clean Water', icon: '<iconify-icon icon="ic:sharp-water-damage" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Industry and Innovation', icon: '<iconify-icon icon="game-icons:cargo-ship" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Economic Growth', icon: '<iconify-icon icon="mdi:finance" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Sustainable Building', icon: '<iconify-icon icon="mingcute:building-4-fill" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {name: 'Climate Action', icon: '<iconify-icon icon="fluent:earth-leaf-16-filled" width="3rem" height="3rem"></iconify-icon>', description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        
    ]
</script>

<div class="flex flex-col gap h-screen m-5">
<div class="grid grid-cols-6 gap-5 m-5 max-w-3.5xl mx-auto">
    {#each items as item, ix}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex flex-col shadow-xl w-36 h-36 rounded-lg gap-2 hover:scale-150 hover:translate-x-11 transition hover:backdrop-blur-md">
        <div class="flex gap-2 text-start m-2">
            <h1 class="text-4xl">{ix+1}</h1>
            <h1 class="font-sans text-xs w-10 h-5">{(item.name).toUpperCase()}</h1>
        </div>
        <div class="mx-auto">
            {@html item.icon}
        </div>
        <div class="absolute bottom-0 left-0 w-full bg-slate-50 text-[10px] transform translate-y-3/4 transition duration-300 ease-in-out group-hover:translate-y-0 rounded-b-lg text-center">
            {item.description}
          </div>
    </div>
    {/each}
</div>
</div>