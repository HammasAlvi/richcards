<template>
    <div class="sec-container">
        <h1 id="cate-heading">Looking for a Specific Category? Start Here</h1>
        <div class="opt-categories">
           
                <div><h2>0% Intro Apr Cards</h2></div>
                <div><h2>Cash Back Cards</h2></div>
                <div><h2>Travel Cards</h2></div>
                <div><h2>Low Apr Cards</h2></div>
                <div><h2>Balance Transfer Cards</h2></div>
                <div><h2>Bussiness Cards</h2></div>
                <div><h2>Secured Cards</h2></div>
                <div><h2>Students Card</h2></div>
           
        </div>

        <div class="written-content">
            <div class="written-one">
                <h1>Versatility is Our Specialty</h1>
                <p>There are several ways of searching for the right credit card based on your needs. BestCards makes it easy to navigate our site and browse by category, issuer, credit needed, or payment network. You can also use our intuitive search tool to quickly locate the card review or resource you’re looking for.</p>
            </div>

            <div class="written-two">
                <div class="info-cont">
                    <h1>Compare Multiple Options</h1>
                    <p>With hundreds of cards to choose from, it can be hard to easily find the ideal selection. If you’re in between multiple cards or don’t know how to decide, take advantage of our intuitive comparison tool. With it, you can select various choices and view them side-by-side. Bestcards’ convenient comparison feature neatly lines up the most essential data: APRs, fees, and other crucial facts.</p>
                </div>
                <img src="../components/icons/comparecards.webp" alt="compare">
            </div>

            <div class="written-three">
                <img src="../components/icons/active-web.webp" alt="active">
                <div class="info-cont">
                  <h1>We’re Active All Over the Web</h1>
                  <p>Though BestCards.com is your one-stop destination, our reach extends into other resources where we provide valuable information and insight. You can locate our content on Quora, Reddit, and more. Plus, our social media channels give you another outlet where you’ll see daily posts about a wide spectrum of topics.</p>
                </div>
            </div>

            <div class="written-four">
                <div class="info-cont">
                   <h1>We Are Here For You</h1>
                   <p>Our ultimate goal is to help you get what you need quickly, easily, and with accurate information backing it up. Whether you’re aiming to pay off debt, earn more rewards, build your credit profile, or understand how a credit card works, here you’ll find the necessary resources and the tools to make those goals happen. Trust in BestCards to help you find the best card for your lifestyle.</p>
                </div>
                <img src="../components/icons/hereforyou.webp" alt="here for you">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        
    }
    .sec-container{
        box-sizing: border-box;
        margin-top:10vw;
            font-family: Roboto;
            font-size: 18px;
            color: #141690;

            #cate-heading{
                margin-left:20%;
            }
        
        .opt-categories{
            margin-top: 20px;
            width: 100%;
            display: flex;
            text-align: center;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
            font-family: Roboto;
            color: #141690;
            
            div{
                background-color: #f1f1ff;
                text-align: center;
                height: auto;
                padding: 8px;
                width: 282px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgb(0 0 0 / 9%);

                h2{
                    margin-top:36px;
                    font-size: 22px;

                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }

        
    }
    .written-content{
        padding: 90px 50px 26px 50px;

        .written-one{
            margin-bottom: 20px;
            
            h1{
                color: #141690;
            }
            p{
                line-height: 2;
                font-size: 14px;
                color:black;
            }
        }

        .written-two{
            padding: 10px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 16px;

         
            h1{
                color: #141690;
            }
            p{
                line-height: 2;
                font-size: 16px;
                font-weight: 300;
                color:black;
            }
            img{
                height: 246px;
                width: 400px;
            }
        }

        .written-three{
            padding: 10px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 16px;

            h1{
                color: #141690;
            }
            p{
                line-height: 2;
                font-size: 16px;
                font-weight: 300;
                color:black;
            }
            img{
                height: 246px;
                width: 400px;
            }
        }

        .written-four{
            padding: 10px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 16px;

            h1{
                color: #141690;
            }
            p{
                line-height: 2;
                font-size: 16px;
                font-weight: 300;
                color:black;
            }
            img{
                height: 246px;
                width: 400px;
            }
        }
    }

    @media screen and (max-width:450px) {
        .sec-container{
            margin-top: 1300px;

            #cate-heading{
                margin: 0;
                text-align: center;
                font-size: 28px;
            }

            .opt-categories{
                margin-bottom: 20px;

                div{
                    padding: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    h2{
                        margin: 0;
                    }
                }
            }

            .written-content{
                padding: 20px;

                h1{
                    font-size: 26px;
                    margin-bottom: 40px;
                }

                p{
                    font-size: 15px;
                }

                .written-two , .written-four{
                    flex-wrap: wrap;
                    flex-direction: column-reverse;
                }
                .written-three{
                    flex-wrap: wrap;
                    flex-direction: column;
                }
               

            }
        }
        
    }
</style>