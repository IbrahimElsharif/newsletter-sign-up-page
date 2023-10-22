<script>
    import Success from "./components/Success.svelte";

    //const Email = document.getElementById("email-input").nodeValue;

    

</script>

<Success />

<main class="grid h-screen place-items-center ">

    <!-- Sign Up Card -->
    <div class=" bg-white flex w-3/5  rounded-3xl">

        <!-- Text Side -->
        <div class="my-20 flex flex-col space-y-6 pl-10 ">

            <!-- Header -->
            <h1 class="text-6xl font-bold">Stay updated!</h1>

            <!-- Paragraph -->
            <p>Stay updated! Join 60,000+ product managers receiving monthly updates on:</p>

            <!-- List Items -->
            <ul class="space-y-3">
                <li class="">
                    <img src=".\images\icon-list.svg" class="inline mr-2" alt="">
                    Product discovery and building what matters
                </li>
                <li>
                    <img src=".\images\icon-list.svg" class="inline mr-2" alt="">
                    Measuring to ensure updates are a success
                </li>
                <li>
                    <img src=".\images\icon-list.svg" class="inline mr-2" alt="">
                    And much more!
                </li>
            </ul>

            <!-- Email Input -->
            <form action="/" class="space-y-2">
                <label for="email-input">Email address</label>
                <input type="email" name="email-input" placeholder="email@company.com" id="email-input" class="block w-96 h-12  pl-5 rounded-lg border-solid border-2">
            </form>
            
            <!-- Submit -->
            <button type="submit" class="bg-darkSlateGrey w-96 h-12 text-white rounded-lg hover:bg-gradient-to-r from-red-500 via-red-400 to-orange-400 ">Subscribe to monthly newsletter</button>
        </div>

        <!-- Image -->
        <div class="mx-4 my-auto">
            <img src=".\images\illustration-sign-up-desktop.svg" alt="">
        </div>
    </div>

</main>

<style>

</style>
