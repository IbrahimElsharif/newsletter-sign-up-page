<script>
    import {createEventDispatcher} from "svelte";
    import Success from "./components/Success.svelte";

    const dispatch = createEventDispatcher();

    let emailInput;

    function checkEmail() {
        emailInput = document.getElementById("emailInput").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const SignUp = document.getElementById("sign-up");
        const Success = document.getElementById("success");
    
        if (emailRegex.test(emailInput)) {
            //console.log("Valid email:", emailInput);
            SignUp.classList.remove("grid");
            SignUp.classList.add("hidden");
            Success.classList.remove("hidden");
            Success.classList.add("grid");
            document.getElementById("not-valid").innerHTML = "";
            document.getElementById("emailInput").classList.remove("bg-red-150", "border-red-400", "placeholder:text-red-500");
            document.getElementById("emailInput").style.color = "";
            // Perform actions with the valid email input
        } else {
            console.log("Invalid email.");
            document.getElementById("not-valid").innerHTML = "Valid email required";
            document.getElementById("emailInput").classList.add("bg-red-150", "border-red-400", "placeholder:text-red-500");
            document.getElementById("emailInput").style.color = "rgb(239, 68, 68)";
            // Perform actions when the email input is invalid
        }
    }
    

    /*const handleSubmit = () => {
        const Email = document.getElementById("emailInput").value;
        const SignUp = document.getElementById("sign-up")
        const Success = document.getElementById("success")
        SignUp.classList.remove("grid");
        SignUp.classList.add("hidden");
        Success.classList.remove("hidden");
        Success.classList.add("grid");
    }*/

</script>

<Success {emailInput} />

<main class="grid h-screen place-items-center" id="sign-up">

    <!-- Sign Up Card -->
    <div class=" bg-white flex rounded-3xl" id="card">

        <!-- Text Side -->
        <div id="text-side" class="my-16 flex flex-col space-y-6 pl-10 ">

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
                <p id="not-valid" class="float-right text-red-500 pr-24 text-xs md:pr-2"></p>
                <input type="email" name="email-input" placeholder="email@company.com" id="emailInput" class="block w-96 h-12 pl-5 rounded-lg border-solid border-2 md:w-88">
            </form>
            
            <!-- Submit -->
            <button type="submit" on:click={checkEmail} class="bg-darkSlateGrey w-96 h-12 text-white rounded-lg hover:bg-gradient-to-r from-red-500 via-red-400 to-orange-400 md:w-88">Subscribe to monthly newsletter</button>
        </div>

        <!-- Image -->
        <div id="image" class="mx-4 my-auto">
            <img src=".\images\illustration-sign-up-desktop.svg" alt="">
        </div>
    </div>

</main>

<style>

    #card {
        width: 55rem;
    }
    
    @media (max-width: 980px) {
        #card {
            width: 45rem;
        }

        #image {
            height: 400px;
        }

        #text-side {
            width: 60%;
        }
    }
</style>
