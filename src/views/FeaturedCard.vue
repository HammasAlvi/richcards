<template >
    <div class="container">
        <div class="left-card-cont">
            <div class="left-card">
                <img src="../components/icons/upgrade-triple-rewards.webp" alt="big-card">
                <label>
                    <input type="checkbox" @click="counts++"> 
                    <span> Add to compare</span>
                </label>
                <div class="bottom-div">
                    <h2>Upgrade Tripple Cash Rewards Visa </h2>
                    <button><h2>Apply Now</h2></button>
                    <h3>RATES & FEES</h3>
                </div>
            </div>
        </div>
        <div class="right-cards-cont">

            <div class="right-card">
                <img src="../components/icons/upgrade-cash-rewards-visa.webp" alt="upgrade-card">
                <label>
                    <input type="checkbox" @click="counts++">
                    <span> Add to compare</span>
                </label>

                <div class="right-data">
                    <h2>Upgrade Cash <br> Rewards Visa</h2>
                    <button><h2>Apply Now</h2></button>
                    <h3>RATES & FEES</h3>
                </div>
            </div>

            <div class="right-card">
                <img src="../components/icons/bilt-mastercard.webp" alt="bilt-card">
                <label>
                    <input type="checkbox" @click="counts++">
                    <span> Add to compare</span>
                </label>

                <div class="right-data">
                    <h2>Upgrade Cash <br> Rewards Visa</h2>
                    <button><h2>Apply Now</h2></button>
                    <h3>RATES & FEES</h3>
                </div>
            </div>

            <div class="right-card">
                <img src="../components/icons/owners-rewards-card.webp" alt="owner-card">
                <label>
                    <input type="checkbox" @click="counts++">
                    <span> Add to compare</span>
                </label>

                <div class="right-data">
                    <h2>Upgrade Cash <br> Rewards Visa</h2>
                    <button><h2>Apply Now</h2></button>
                    <h3>RATES & FEES</h3>
                </div>
            </div>

            <div class="right-card">
                <img src="../components/icons/divvy-credit-card.jpg" alt="divvy-card">
                <label>
                    <input type="checkbox" @click="counts++">
                    <span> Add to compare</span>
                </label>

                <div class="right-data">
                    <h2>Upgrade Cash <br> Rewards Visa</h2>
                    <button><h2>Apply Now</h2></button>
                    <h3>RATES & FEES</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
    return{
        counts:0,
    }
   },
   props: {
    counts: {
        type:number,
        default:0,
        Required:true
    }
  }
}
</script>

<style src="../assets/cards.css"></style>