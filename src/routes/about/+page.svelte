<script lang="ts">
    import { fade } from 'svelte/transition'
  
</script>
<div class="text-start w-full h-full pt-5">
    <h2 class="text-3xl px-20 pt-5">
        About Us  
    </h2>
    <div class="divider py-[2rem] pt-7"></div>
</div>

<div class="flex min-[320px]:flex-wrap sm:flex-wrap lg:flex-nowrap gap-4 px-10 pb-6 justify-center" transition:fade>
    <div class="card lg:card-side bg-base-100 shadow-2xl lg:w-[50em] lg:h-[40em] sm:w-[29rem]">
        <div class="min-[320px]:w-[20rem] sm:w-[28rem] lg:w-[225em] rounded-md px-2">
            <figure>
                <img
                class="hover:scale-105 hover:translate-x-5 transition duration-500 ease-in-out transform"
                    src='https://images.unsplash.com/photo-1579196173525-5043ea2f84c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Album"
                />
            </figure>
        </div>
        <div class="card-body gap-5 py-10">
            <h2 class="card-title text-xl">Who We Are</h2>
            <p class="tracking-normal">
                <strong class="text-[#0c162c]">SignHub International Limited</strong> is a trailblazer in digital
                addressing services, revolutionizing the way locations are identified and managed.
                Our commitment to effective governance, economic growth, and social development drives us to create
                uniquely tailored address-based platforms and databases.
            </p>
        </div>
    </div>
    <div class="flex flex-col gap-5 min-[320px]:items-center">
        <div class="card min-[320px]:w-[20rem] lg:w-[29rem] shadow-xl image-full scale-95 transition ease-in-out duration-500 transform hover:scale-100">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1552937075-967cf58b74a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFmcmljYSUyMGNlbnRyaWN8ZW58MHx8MHx8fDA%3D"
                    alt="Durban" 
                />
            </figure>
            <div class="card-body gap-5">
                <h2 class="card-title text-xl">Our Mission</h2>
                <p class="text-sm">
                    <strong>Empowering communities through innovative addressing solutions</strong>, SignHub
                    International Limited is committed to revolutionizing digital addressing services.
                    your dedicated partner, we actively contribute to effective governance, economic growth, and social
                    development by providing uniquely tailored address-based platforms
                    and databases. <strong>Our mission is to transform addressing systems</strong>, laying the
                    foundation for empowered communities and sustainable development.
                </p>
            </div>
        </div>
        <div class="card min-[320px]:w-[20rem] lg:w-[29rem] bg-base-100 shadow-xl image-full scale-95 transition ease-in-out duration-500 transform hover:scale-100">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1551656222-71345ab13814?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoes" 
                />
            </figure>
            <div class="card-body gap-5">
                <h2 class="card-title text-xl">Our Vision</h2>
                <p class="text-sm">
                    In the digital era, <strong>SignHub International Limited envisions a world where every location is
                    uniquely identified</strong>,
                    fostering seamless connectivity and inclusive development. <strong>We aspire to be the global leader
                    in pioneering addressing solutions</strong>,
                    leveraging open-source Google Plus Codes to create alphanumeric signs and customized addressing
                    platforms.
                    <strong>Our vision is to shape the future, where governments and organizations invest in and
                    maintain comprehensive geospatial databases</strong>,
                    thereby empowering communities and driving positive change for generations to come.
                </p>
            </div>
        </div>
    </div>
    <div class="card w-[29rem] bg-base-100 shadow-2xl">
        <figure>
            <img
                class="hover:scale-110 transition duration-500 ease-in-out transform"
                src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes" 
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title text-xl">Digital Addressing Services with Google Plus Codes</h2>
            <p class="text-sm">
                Our core strength lies in digital addressing, utilizing the accuracy and openness of Google Plus Codes.
                These codes ensure that every location is uniquely and accurately addressed, eliminating ambiguity and
                enhancing efficiency. Plus Code signs serve as universal markers for seamless location recognition.
            </p>
        </div>
    </div>
</div>
<div class="divider py-[2rem] pt-4"></div>
<div class="flex-flex-col pt-1 pb-5 px-10">
    <div class="card card-side bg-base-100 shadow-2xl rounded-lg">
        <!-- <div class="w-64 rounded-md">
            <figure><img src="https://images.unsplash.com/photo-1582909184950-f5d85d232510?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Movie" /></figure>
       </div>  -->
        <div class="card-body tracking-normal gap-6 items-center text-center">
            <h2 class="card-title text-xl">The SignHub Advantage</h2>
            <p>
                SignHub International Limited brings a wealth of experience, expertise, and innovative technologies to
                the forefront of digital addressing solutions. Our services encompass the development and maintenance of
                databases based on leveraging physical addresses, creating a solid foundation for various sectors and
                initiatives.
            </p>
        </div>
        <!-- <div class="w-64 rounded-md">
            <figure><img src="https://images.unsplash.com/photo-1582909184950-f5d85d232510?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Movie" /></figure>
       </div> -->
    </div>
</div>
