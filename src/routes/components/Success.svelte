<script>
    export let emailInput;

    const handleDismiss = () => {
        const SignUp = document.getElementById("sign-up");
        const Success = document.getElementById("success");

        SignUp.classList.remove("hidden");
        SignUp.classList.add("grid");
        Success.classList.remove("grid");
        Success.classList.add("hidden");
    }

</script>

<main class="hidden h-screen place-items-center" id="success">

    <!-- Success Message -->
    <div class="flex flex-col p-10 space-y-6 bg-white rounded-3xl" id="successCard">

        <!-- Success Icon -->
        <img src=".\images\icon-success.svg" class="w-1/6" alt="">

        <!-- Subscribing Message -->
        <h2 class="text-5xl font-bold text-darkSlateGrey">Thanks for subscribing!</h2>

        <!-- Paragraph -->
        <p class="text-sm">
            A confirmation email has been sent to <span class="font-bold">{emailInput}</span>. 
            Please open it and click the button inside to confirm your subscription.
        </p>

        <!-- Button -->
        <button on:click={handleDismiss} class="bg-darkSlateGrey w-90 h-12 text-white rounded-lg hover:bg-gradient-to-r from-red-500 via-red-400 to-orange-400">Dismiss message</button>

    </div>
</main>

<style>
    
    #successCard {
        height: 25.6rem;
        width: 24.9rem;
    }
</style>