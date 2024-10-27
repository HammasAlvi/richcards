<template >
  <main>
    <div class="search-cont">
      <div class="links">
        <h3>Advertiser Disclouser</h3>
        <h3>Editoral Disclouser</h3>
      </div>

      <div class="cont-container">
        <div class="left-cont">
          <h1>Browse the Best Credit Cards & Offers For Everyone</h1>
          <p>
            BestCards.com is the go-to source for choosing your next credit
            card. No matter what your needs are or what your lifestyle is,
            you’ll find the knowledge you’re looking for here.
          </p>

          <div class="search-bar">
            <input type="text" placeholder="Search For Your Next Card" />
            <button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div class="right-cont">
          <img src="../components/icons/right-image.webp" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  padding: 0;
  margin: 0;
}

.search-cont {
  padding: 80px 24px 40px 28px;
  height: auto;
  width: 100%;
  background-color: blue;

  .links {
    position: relative;
    bottom: 70px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;

    h3 {
      margin: 8px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 20px;
        height: 2px;
        width: 100%;
        background-color: white;
      }

      &:hover {
        cursor: pointer;
        color: #c2b4b4;
      }
    }
  }
  .cont-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-cont {
      padding: 10px;
      height: 28.6vw;
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      h1 {
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        font-size: 3rem;
        font-weight: 600;
        line-height: 1.5em;
      }

      p {
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
      }

      .search-bar {
        width: 100%;
        display: flex;
        margin-top: 8px;

        input {
          height: 4.6vw;
          padding: 1rem;
          line-height: 2;
          border: 1px solid #ffffff;
          outline: none;
          width: 250%;
          font-size: 1rem;
          font-family: "Roboto", sans-serif;
          border-radius: 10px 0 0 10px;
          display: inline-block;
        }

        button {
          width: 20%;
          height: 4.6vw;
          background-color: #ffffff;
          border-radius: 0 10px 10px 0;
          outline: none;
          border: 1px solid #ffffff;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            display: inline-block;
            height: 3.6vw;
            width: 100%;
            border-radius: 0 12px 12px 0;
            background-color: blue;
            text-align: center;
            padding: 0 9px;

            &:hover {
              cursor: pointer;
            }

            svg {
              margin: 11px 0 0 0;
            }
          }
        }
      }
    }

    .right-cont {
      
        img{
            height: 302px;
            width:305px;
        }
    }
  }
}

@media all and (max-width: 450px) {
  .search-cont {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 100vw;

    .links {
      font-size: 12px;
    }

    .cont-container {
      position: relative;
      bottom: 60px;

      .left-cont {
        display: flex;
        gap: 20px;
        width: 100%;

        h1 {
          font-size: 1.75rem;
        }

        p {
          line-height: 1.4rem;
          font-weight: 300;
          font-size: 14px;
        }

        .search-bar {
          input {
            height: 12.4vw;
            padding: 1rem;
          }

          button {
            height: 56px; // Adjust this value as needed
            padding: 18px 4px 18px 18px; // You can keep padding if you want, but set a height too
            background-color: #ffffff;
            border-radius: 0 10px 10px 0;
            outline: none;
            border: 1px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
              display: inline-block;
              height: 10vw; // Consider adjusting this too
              width: 100%;
              border-radius: 0 12px 12px 0;
              background-color: blue;
              text-align: center;
              padding: 0 12px;

              svg {
                margin: 12px 0 0 0;
              }
            }
          }
        }
      }

      .right-cont {
        display: none;
      }
    }
  }
}

</style>