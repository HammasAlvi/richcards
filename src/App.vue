<template>
  <HeaderComp class="header-comp" />
  <MainComp />
  <Links />
  <SecMain />
  <Articles />
  <a href="#topest">
    <button class="up">-></button>
  </a>
  
  <div class="counter">
    <button class="count-btn">
      <img src="./components/icons/menu.png" alt="menu">
    </button>
    
    <div class="parent-counter">
      <div class="count-cont">
        <div class="count-line">
          <div class="counts">
            <h2>{{ counts }}</h2>
          </div>
          <h2 id="count-h2">Cards</h2>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import HeaderComp from './components/Header.vue';
import MainComp from './components/Main.vue';
import SecMain from './components/SecMain.vue';
import Articles from './components/Articles.vue';
import Links from './components/Links.vue';
import FooterComp from './components/Footer.vue';

export default {
  components: {
    HeaderComp, MainComp, Links, SecMain, Articles, FooterComp
  },
  props: {
    counts: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style src="./assets/app.css"></style>
