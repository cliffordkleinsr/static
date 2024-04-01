<script lang="ts">
	import { openModal } from "$lib/modalOperations";

    let modal1:HTMLDialogElement
    let modal2:HTMLDialogElement
    let modal3:HTMLDialogElement
</script>
<div class="flex flex-col w-full h-full p-5 gap-5">
    <div class="card w-full bg-base-100 shadow-2xl ">
        <div class="card-body gap-6">
            <h2 class="card-title text-3xl px-20"> Services</h2>
            <div class="divider py-2 pt-5"></div>
            <div class="flex flex-wrap gap-8 justify-center pb-5">
                <div class="card w-[32rem] bg-base-100 shadow-2xl scale-75 hover:scale-100 transform transition ease-in-out duration-500">
                    <div class="card-body gap-6 tracking-normal">
                        <h2 class="card-title text-xl">GIS Map Intergration And Custom Database Generation</h2>
                        <div class="flex flex-wrap gap-[0.25rem]">
                            <!-- Open the modal using ID.showModal() method -->
                            <button class="btn bg-[#0c162c] text-white hover:bg-[#7E57C2] transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-500" on:click={()=>{openModal(modal1)}}>
                                learn More
                            </button>
                            <dialog bind:this={modal1} class="modal justify-center">
                                <div class="modal-box">
                                    <h1 class="font-mono">Removed For Production</h1>
                                
                                    <div class="modal-action">
                                        <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn btn-error">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <p>
                            Experience the cutting-edge synergy of GIS map integration and dynamic database generation!
                            Elevate your data management to unparalleled heights with our innovative solution.
                            <br>
                            Unlock the power to craft bespoke database schemas seamlessly fused with our advanced map
                            platform. Witness the seamless aggregation of data and the creation of unique, tailor-made
                            collections tied to precise addresses. Embark on a journey where innovation meets precision,
                            and possibilities are limitless.
                            <br>
                            NGO's, government organizations, and players in the digital economy, join us in
                            revolutionizing the way you interact with your data to impact the communities you serve!
                        </p>
                    </div>
                    <figure>
                        <img 
                            class="transform transition duration-500 ease-in-out hover:translate-y-20"
                            src="https://firebase.google.com/static/images/products/firestore/firestore-3.png"
                            alt="Cloud" 
                        />
                    </figure>
                </div>
    
                <div class="card w-[32rem] bg-base-100 shadow-xl scale-75 hover:scale-100 transform transition ease-in-out duration-500">
                    <div class="card-body gap-6 tracking-normal">
                        <h2 class="card-title text-xl">
                            Physical Addressing Signs with Plus Codes
                        </h2>
                        <div class="flex flex-wrap gap-[0.25rem]">
                            <!-- Open the modal using ID.showModal() method -->
                            <button class="btn bg-[#e7ecf6] text-black hover:bg-[#e7ecf6] transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-500" on:click={()=>{openModal(modal2)}}>
                                learn More
                            </button>
                            <dialog bind:this={modal2} class="modal justify-center">
                                <div class="modal-box">
                                    <h1 class="font-mono">Removed For Production</h1>
                                    <div class="modal-action">
                                        <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn btn-error">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <p>
                            SignHub excels in creating high-quality physical addressing signs designed to enhance
                            location accuracy and accessibility for businesses, residences, and public spaces. Our
                            solutions fully integrate with the Google Plus Codes platform, offering a comprehensive and
                            adaptable approach to improving the addressing system.
                        </p>
                    </div>
                    <figure>
                        <img 
                            class=" translate-y-24 transform transition duration-500 ease-in-out hover:translate-y-40"
                            src="https://lh3.googleusercontent.com/ZdtM1CwGp0KoGFr_7Fx_Hu40NTlQoWr6cW-sKtwjat29xKr0Vni-QnW11Uw7qIS5upPpzZlm1-Sy_pII2sxwtjEulKvUjL_e_Ie2U3Ca=rw-e365-w609"
                            alt="Cloud" 
                        />
                    </figure>
                </div> 
                
                <div class="card w-[32rem] bg-base-100 shadow-xl scale-75 hover:scale-100 transform transition ease-in-out duration-500">
                    <div class="card-body gap-6 tracking-normal">
                        <h2 class="card-title text-xl">
                            Custom and Mass Addressing
                        </h2>
                        <div class="flex flex-wrap gap-[0.25rem]">
                            <!-- Open the modal using ID.showModal() method -->
                            <button class="btn bg-[#9BBA54] text-white hover:bg-[#9BBA54] transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-500" on:click={()=>{openModal(modal3)}}>
                                learn More
                            </button>
                            <dialog bind:this={modal3} class="modal justify-center">
                                <div class="modal-box">
                                    <h1 class="font-mono">Removed For Production</h1>
                                    <div class="modal-action">
                                        <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn btn-error">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <p>
                            Understanding the diverse needs of the African continent and business landscape, we provide
                            solutions to produce mass signage projects to the specifications of our partners and
                            clients. Our team collaborates closely to ensure every sign meets unique specifications and
                            branding, contributing to the development of addressing infrastructure.
                        </p>
                    </div>
                    <figure>
                        <img
                            class="transform transition duration-500 ease-in-out hover:translate-y-20" 
                            src="https://lh3.googleusercontent.com/RpkSQPjynMQaawgUHyEvU_4Sv4PeKTFJJsQUX93mON2rMvQ9RmNaNnk4DWYbUGNQd15RgKjFqzAAXJkd9FRiqTtAOAEY-wiBKPuF2lo=e365-pa-nu-s0"
                            alt="Cloud" 
                        />
                    </figure>
                </div>  
            </div>
        </div>
    </div>
</div>
