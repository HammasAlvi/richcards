<template>
  <header id="topest">
    <nav class="nav-bar">
      <div class="logo">
        <img src="../components/icons/best-logo.webp" alt="best-logo" />
      </div>

      <div class="header-info">
        <div class="info">Whats' New</div>

        <div class="info2">
          Browse Cards
          <img src="../components/icons/chevron.png" alt="dropdown" />

          <div class="mega-cont">
            <div class="mega-dropdown">
              <div class="cate-cont">

                <div class="categories">
                  <button id="cate-btn" @mouseover="catenone" ref="creditbtn">
                    Categories
                    <img src="../components/icons/next.png" alt="arrow" />
                  </button>

                  <div class="cate-list" ref="catelist">
                    <ul class="cate-ul">
                      <li>0% Into APR</li>
                  <li>Secured</li>
                  <li>Student</li>
                  <li>Low APR</li>
                  <li>Gas Reward</li>
                  <li>Balance Transfer</li>
                  <li>Credit Union</li>
                  <li>Cash Back</li>
                  <li>Auto Reward</li>
                  <li>No Foreign Transfer Fee</li>
                  <li>Bussiness</li>
                  <li>Fintech</li>
                  <li>Travel</li>
                  <li>Airline</li>
                  <li>No Annual Fee</li>
                  <li>Crypto</li>
                  <li>Dining</li>
                  <li>Hotel</li>
                  <li>Debit & Prepaid</li>
                  <li>Retail</li>
                    </ul>
                  </div>
                </div>

                <div class="cards-issuers">
                  <button id="issue-btn" @mouseover="cateblock" ref="issuebtn">
                    Card Issuers
                    <img src="../components/icons/next.png" alt="arrow">
                  </button>

                  <div class="issue-list" ref="issuelist">
                    <ul class="issue-ul">
                  <li>American Express</li>
                  <li>Barclay</li>
                  <li>Chase</li>
                  <li>U.S. Bank</li>
                  <li>noneover</li>
                  <li>Bank of America</li>
                  <li>Capital One</li>
                  <li>Citibank</li>
                  <li>Wells Fargo</li>
                  <li>View All</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="info3">
          Resources 
          <img src="../components/icons/chevron.png" alt="dropdown" />
          <div class="resources-list">
            <ul class="resources-ul">
              <li>Credit Card Payoff Calculator</li>
              <li>Credit Utilization Calculator</li>
              <li>Monthly Budget Calculator</li>
            </ul>
          </div>
        </div>

        <div class="info4">
          News & Articles
          <img src="../components/icons/chevron.png" alt="dropdown" />
          <div class="arti-cont">
            <ul class="arti-ul">
              <li>Credit Card News</li>
              <li>Best Credit Cards</li>
              <li>Credit Card Advices</li>
              <li>Credit Card Basics</li> 
            </ul>
          </div>
        </div>

        <div class="info5">
          Become a Member
          <img src="../components/icons/chevron.png" alt="dropdown" />
          <div class="mem-cont">
            <ul class="mem-ul">
              <li>Sign Up</li>
              <li>Log In</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


    <!-- Burger menu for responsive -->

    <div class="burger-menu">
      <img src="../components/icons/best-logo.webp" alt="best-logo" />

      <div class="burger">
        <img
          src="../components/icons/menu.png"
          alt="burger-menu"
          @click="block()"
          ref="burger"
        />
        <img
          src="../components/icons/cross.png"
          alt="cross-menu"
          style="display: none"
          v-on:click="hidden()"
          ref="cross"
        />
      </div>
      <div class="burger-header" ref="blockheader" v-on:click="block()">
        <div class="list-cont">
          <ul class="burger-list">
            <li>What's New</li>
            <li>
              Browse Cards
              <img src="../components/icons/arrow-up.png" alt="arrow" />
            </li>
            <li>
              Resources
              <img src="../components/icons/arrow-up.png" alt="arrow" />
            </li>
            <li>
              News & Articles
              <img src="../components/icons/arrow-up.png" alt="arrow" />
            </li>
            <li>
              Become a Member
              <img src="../components/icons/arrow-up.png" alt="arrow" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isactiver: false,
    };
  },
  methods: {
    block() {
      this.$refs.blockheader.style.display = "block";
      this.$refs.burger.style.display = "none";
      this.$refs.cross.style.display = "block";
    },
    hidden() {
      this.$refs.blockheader.style.display = "none";
      this.$refs.burger.style.display = "block";
      this.$refs.cross.style.display = "none";
    },
    cateblock() {
      this.$refs.catelist.style.display = "none";
      this.$refs.issuelist.style.display = "block";
      this.$refs.issuebtn.ClassList.add = "shadow"

    },
    catenone() {
      this.$refs.catelist.style.display = "block";
      this.$refs.issuelist.style.display = "none";
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.nav-bar {
  height: auto;
  padding: 14px;
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img {
      height: 44px;
    }
  }

  .header-info {
    display: flex;
    align-items: center;
    gap: 54px;

    div {
      color: #5b66b3;
      font-weight: 300;

      img {
        height: 12px;
      }

      &:hover {
        cursor: pointer;
        color: #1f223a;
      }
    }

    .info2 {
      position: relative;

      &:hover .mega-cont {
        animation: fade-in 0.8s ease-in-out;
        display: block;
      }

      .mega-cont {
        display: none;
        z-index: 999;
        position: absolute;
        top: 15px;

        transform: translate(-50%);
        padding: 20px;
        height: 290px;
        width: 1030px;
        

        .mega-dropdown {
          border-radius: 0 0 12px 12px;
          height: 250px;
          padding: 10px;
          width: 995px;
          background: #fff;
          cursor: auto;

          .cate-cont {
            display: flex;
            gap: 36px;

            .categories {
              width: 32%;

              &:hover #cate-btn{
                  box-shadow:  0  0 10px grey;

                }

              #cate-btn {

                padding: 10px;
                background-color: #fff;
                outline: none;
                border: none;
                border-radius: 11px;
                width: 100%;
                height: 3.5vw;
                text-align: start;
                font-family: Roboto;
                font-size: 21px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &:hover{
                  box-shadow:  0  0 10px grey;
                }

              

                img{
                  transform: rotate(90deg);
                  height: 16px;
                }

                &:hover{
                  cursor: pointer;
                }
              }

              .cate-list{
                z-index: 1000;
                margin-top: 8px;
                height: 14vw;
                width: auto;

                

                .cate-ul{
                  font-family: Roboto;
                  height: 179px;
                  width: 975px;
                  display: grid;
                  grid-template-rows: 1.5fr 1.5fr 1.5fr 1.5fr;
                  grid-template-columns: repeat(5,1fr);
                  list-style: none;
                  align-items: center;
                  z-index: 999;
                  color: black;
                  cursor: pointer;

                

                  li{

                    &:hover{
                      cursor:pointer;
                      color: #1b0db9e3;
                    }
                  }
                }

              
              }
            }

            .cards-issuers{
              height: 0px;
              width: 32%;

              &:hover #issue-btn{
                  box-shadow:  0  0 10px grey;
                }

              #issue-btn{
                padding: 8px;
                background-color: #fff;
                outline: none;
                border: none;
                border-radius: 11px;
                width: 100%;
                height: 3.5vw;
                text-align: start;
                font-family: Roboto;
                font-size: 21px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &:hover{
                  box-shadow:  0  0 10px grey;
                }

                img{
                  height: 16px;
                }

                &:hover{
                  cursor: pointer;
                }
              }

              .issue-list{
                display: none;

                .issue-ul{
                  margin-top: auto;
                  font-family: Roboto;
                  height: 10vw;
                  width: 975px;
                  display: grid;
                  grid-template-rows: 1fr 1fr;
                  grid-template-columns: repeat(5,1fr);
                  list-style: none;
                  align-items: center;
                  z-index: 999;
                  color: black;
                  cursor: pointer;
                  transform: translate(-30%);

                  li{
                    
                    &:hover{
                      cursor:pointer;
                      color: #1b0db9e3;
                    }
                  }
                }
              }
            }
            
          }
        }
      }
    }

    .info3{
      position:relative;

      .resources-list{
        transform: translate(-30%);
        position:absolute;
        top: 20px;
        cursor: auto;
        color: #1b0db9e3;
        width: max-content;
        background-color: #fff;
        z-index: 999;
        border-radius:  0 0 12px 12px;
        display: none;

        .resources-ul{
          list-style: none;
          padding: 10px;

          li{
            width: max-content;
            margin: 32px 100px  32px 12px;

            &:hover{
              cursor: pointer;
              color: #5b66b3;
            }
          }
        }
      }

      &:hover .resources-list{
        display: block;
        animation: fade-in 0.5s ease-in-out;
 
      }
    }


    .info4{
      position:relative;

      .arti-cont{
        transform: translate(-30%);
        position:absolute;
        top: 20px;
        cursor: auto;
        color: #1b0db9e3;
        width: max-content;
        background-color: #fff;
        z-index: 999;
        border-radius:  0 0 12px 12px;
        display: none;

        .arti-ul{
          list-style: none;
          padding: 10px;

          li{
            width: max-content;
            margin: 32px 100px  32px 12px;

            &:hover{
              cursor: pointer;
              color: #5b66b3;
            }
          }
        }
      }

      &:hover .arti-cont{
        display: block;
        animation: fade-in 0.5s ease-in-out;
 
      }
    }

    .info5{
      position:relative;

      .mem-cont{
        transform: translate(-16%);
        position:absolute;
        top: 20px;
        cursor: auto;
        color: #1b0db9e3;
        width: max-content;
        background-color: #fff;
        z-index: 999;
        border-radius:  0 0 12px 12px;
        display: none;

        .mem-ul{
          list-style: none;
          padding: 10px;

          li{
            width: max-content;
            margin: 32px 100px  32px 12px;

            &:hover{
              cursor: pointer;
              color: #5b66b3;
            }
          }
        }
      }

      &:hover .mem-cont{
        display: block;
        animation: fade-in 0.5s ease-in-out;
 
      }
    }

  }
}

.burger-menu {
  display: none;
  position: relative;
  z-index: 999; // Ensure this is high enough

  .burger {
    img {
      margin: 8px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .burger-header {
    box-shadow: 0 8px 12px rgb(48, 46, 46);
    position: absolute;
    transform: translate(-89.5%);
    top: 60px;
    padding: 10px;
    height: 220px;
    border-radius: 0 0 14px 14px;
    width: 450px;
    background-color: #fff;
    z-index: 1000; // Set this higher than .burger-menu
    display: none; // Initially hidden

    // You can add styles for when the burger is active here
    .list-cont {
      margin: 12px;
      .burger-list {
        list-style-type: none;
        display: flex;
        font-family: Roboto;
        font-size: 13px;
        color: #1b0db9e3;
        flex-direction: column;
        gap: 18px;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;

          img {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
}

.shadow{
  box-shadow: 0 0 6px grey;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media screen and (max-width: 450px) {
  .nav-bar {
    display: none;
  }
  .burger-menu {
    display: block;
  }
}
</style>
