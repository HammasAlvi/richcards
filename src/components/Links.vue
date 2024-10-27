<template>
   <div class="wrapper">
    <h1>Featured Partner Credit Card Offers</h1>
    <div class="links-div">
      <div class="links">
        <RouterLink to="/" class="card-btns">Featured Cards</RouterLink>
      <RouterLink to="/IntroApr" class="card-btns">0% Intro Apr</RouterLink>
      <RouterLink to="/Balance" class="card-btns">Balance Transfer</RouterLink>
      <RouterLink to="/Bussiness" class="card-btns">Bussiness</RouterLink>
      <RouterLink to="/NoAnnual" class="card-btns">No Annual Fee</RouterLink>
      <RouterLink to="/LowApr" class="card-btns">Low Apr</RouterLink>
      <RouterLink to="/Secured" class="card-btns">Secured</RouterLink>
      <RouterLink to="/Travel" class="card-btns">Travel</RouterLink>
      <RouterLink to="/CashBack" class="card-btns">Cash Back</RouterLink>
      <RouterLink to="/BadCredit" class="card-btns">Bad Credit</RouterLink>
    </div>
  </div>
    <RouterView  />
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .wrapper {
  height: 40vw;
  margin: 100px 0 0 0;
  padding: 0 40px;

  h1 {
    font-size: 2.2rem;
    font-family: Roboto;
    color: #141690;
    margin-bottom: 50px;
  }
 .links-div{
    box-sizing: border-box;
    
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2px;
    scrollbar-width: none;
    

   
    
    .card-btns {
      
    padding: 12px 16px;
    letter-spacing: 1.25px;
    margin-right: 4px;
    margin-bottom: 14px;
    font-size: 1rem;
    background-color: #e7e7f4;
    color: #141690;
    border-radius: 8px;
    white-space: nowrap;
    font-family: Roboto;
    text-decoration: none;
  }
}
}

@media all and (max-width:450px){
  .links-div{
    overflow: auto;
    height: 80px;

    .links{
      z-index: 999;
    }
  }

 
} 
</style>