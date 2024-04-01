<script lang="ts">
	import { openModal } from "$lib/modalOperations";

    let modal1: HTMLDialogElement
    let modal2: HTMLDialogElement
    let modal3: HTMLDialogElement
</script>

<div class="flex flex-col p-5">
    <div class="card w-full bg-base-100 shadow-2xl antialiased">
        <div class="card-body lg:px-20">
            <h2 class="card-title text-3xl">Learn More</h2>
            <div class="divider pt-5"></div>
            <div class="flex flex-wrap sm:flex-wrap lg:flex-nowrap gap-7">
                <div class="flex flex-col gap-9">
                    <div class="space-y-8">
                        <h1 class="text-2xl">
                            Key Benefits of Address-Based Databases
                        </h1>
                        <p>
                            Explore the numerous benefits of our address-based databases, from improved service delivery to
                            disaster response, economic development, and social welfare programs. Our databases play a
                            crucial role in urban planning, healthcare, education, postal services, and the informal sector,
                            fostering growth and inclusivity.
                        </p>
                        <!-- Open the modal using ID.showModal() method -->
                        <button class="btn bg-[#0c162c] text-white hover:bg-[#2f394e]" on:click={()=>{openModal(modal1)}}>Explore</button>
                        <dialog bind:this={modal1}  class="modal">
                                <img class="w-[57em]" src="https://i.ibb.co/k49DCDz/image.png" alt="">
                                <div class="modal-action">
                                    <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn text-white bg-red-700 border-red-700 hover:bg-red-700">Close</button>
                                    </form>
                                </div>
                        </dialog>
                    </div>
                    <div class="divider pt-1"></div>
                    <div class="space-y-8">
                        <h1 class="text-2xl">
                            Additional Advantages of Address-Based Databases
                        </h1>
                        <p>
                            Learn how accurate address databases contribute to land ownership and property rights,
                            transportation and infrastructure planning, utilities and service provision, environmental
                            management, local governance, public health, and disaster preparedness. Address-based databases
                            support data-driven decision-making and public engagement
                        </p>
                        <!-- Open the modal using ID.showModal() method -->
                        <button class="btn bg-[#0c162c] text-white hover:bg-[#2f394e]" on:click={()=>{openModal(modal2)}}>Explore</button>
                        <dialog bind:this={modal2}  class="modal">
                                <img class="w-[57em]" src="https://i.ibb.co/rxx8b1R/image.png" alt="">
                                <div class="modal-action">
                                    <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn bg-red-700 border-red-700 hover:bg-red-700 text-white">Close</button>
                                    </form>
                                </div>
                        </dialog>
                    </div> 
                </div>
                <div class="flex flex-col gap-9">
                    <div class="space-y-5">
                         <h1 class="text-2xl">
                            Types of Databases Based on Physical Addresses
                        </h1>
                        <p>
                            Discover the various types of databases we specialize in, including GIS, census and demographic
                            databases, tax and revenue collection databases, emergency response databases, healthcare and
                            health records databases, and more. These databases are essential for efficient governance and
                            resource allocation.
                        </p>
                        <!-- Open the modal using ID.showModal() method -->
                        <button class="btn bg-[#0c162c] text-white hover:bg-[#2f394e]" on:click={()=>{openModal(modal3)}}>Explore</button>
                        <dialog bind:this={modal3}  class="modal">
                                <img class="w-[57em]" src="https://i.ibb.co/Y2TKKS8/image.png" alt="">
                                <div class="modal-action">
                                    <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn text-white bg-red-700 border-red-700 hover:bg-red-700">Close</button>
                                    </form>
                                </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div class="divider pt-5"></div>
            <div class="pt-10 space-y-8">
                <h1 class="text-2xl">
                    Company Profile
                </h1>
                <p>
                    Download Our latest company profile
                </p>
                <div class="flex flex-nowrap gap-5">
                    <a href="/"><button class="btn bg-[#0C162C] hover:bg-[#2f394e] text-white ">EN<iconify-icon icon="mdi:folder-google-drive" width=18 height=18></iconify-icon></button></a>
                    <a href="/"><button class="btn bg-[#0C162C] hover:bg-[#2f394e] text-white">FR<iconify-icon icon="mdi:folder-google-drive" width=18 height=18></iconify-icon></button></a>
                    <a href="/"><button class="btn bg-[#0C162C] hover:bg-[#2f394e] text-white">SW<iconify-icon icon="mdi:folder-google-drive" width=18 height=18></iconify-icon></button></a>
                    <a href="/"><button class="btn bg-[#0C162C] hover:bg-[#2f394e] text-white">PT<iconify-icon icon="mdi:folder-google-drive" width=18 height=18></iconify-icon></button></a>
                </div>
                

            </div>
            <div class="divider pt-5"></div>
            <div class="pt-10 space-y-8">
                <h1 class="text-2xl">
                    Our Collaboration with Google Certified Partners
                </h1>
                <p>
                    Understand the strength of our commitment to excellence through our partnership with Google
                    Certified
                    Partners. This alliance maximizes the potential of open-source Plus Codes and Google Cloud,
                    enhancing
                    database management and technology distribution.
                </p>
                <div class="flex lg:flex-nowrap gap-5 flex-wrap">
                    <!-- <img src="https://i.ibb.co/k2g11mj/image-removebg-preview.png" alt=""> -->
                    <iconify-icon icon="logos:google" width="130" height="130"></iconify-icon>
                </div>
            </div>
        </div>
    </div>
    
</div>
