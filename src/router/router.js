import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name:"FeatureCards",
      component: () => import("../views/FeaturedCard.vue")
    },
    {
      path: "/IntroApr",
      name: "IntroApr",
      component: () => import("../views/IntroApr.vue")
    },
    {
      path: "/Balance",
      name: "Balance",
      component: () => import("../views/BalanceTransfer.vue")
    },
    {
      path: "/Bussiness",
      name: "Bussiness",
      component: () => import("../views/Bussiness.vue")
    },
    {
      path: "/NoAnnual",
      name: "NoAnnual",
      component: () => import("../views/NoAnnual.vue")
    },
    {
      path: "/LowApr",
      name: "LowApr",
      component: () => import("../views/LowApr.vue")
    },
    {
      path: "/Secured",
      name: "Secured",
      component: () => import("../views/Secured.vue")
    },
    {
      path: "/Travel",
      name: "Travel",
      component: () => import("../views/Travel.vue")
    },
    {
      path: "/CashBack",
      name: "CashBack",
      component: () => import("../views/CashBack.vue")
    },
    {
      path: "/BadCredit",
      name: "BadCredit",
      component: () => import("../views/BadCredit.vue")
    }
  
  ]
});

export default router;