<template>
    <div class="articles-cont">
        <div class="headings">
            <h1>Latest Articles</h1>
            <p>Stay up to date with top news and other informative articles from the credit card industry.</p>
        </div>

        <div class="slider-res">
            <div class="mega-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="slide-cont" v-for="(slide, slideIndex) in slides" :key="slideIndex">
                    <div class="slides">
                        <img :src="slide[0].image" :alt="slide[0].alt" />
                        <div class="credit-info">
                            <h2>{{ slide[0].category }}</h2>
                            <h1>{{ slide[0].title }}</h1>
                            <p>{{ slide[0].description }}</p>
                            <button @click="readArticle(slide[0].link)">Read Article</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btns">
                <span class="icons" @click="prev">
                    <img src="../components/icons/left-arrow.png" alt="left-arrow" />
                </span>
                <span class="checks" v-for="i in slides.length" :key="i" :class="{ active: currentIndex === i - 1 }"></span>
                <span class="icons" @click="next">
                    <img src="../components/icons/right-arrow.png" alt="right-arrow" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import ultimateguide from "../components/icons/ultimate-guide.webp"
import Miami from "../components/icons/miami-gp.webp"
import chicago from "../components/icons/chicago-con.webp"
import thankyou from "../components/icons/thankyou.jpg"
import women from "../components/icons/women.webp"

export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                [{
                    image:ultimateguide,
                    alt: 'Ultimate Guide',
                    category: 'Credit Card Advice',
                    title: 'The Ultimate Bilt Rent Day Guide – May ...',
                    description: 'Looking to get the most out of your Bilt Rewards? Earn double points and more with Bilt Rent Day – here’s how!',
                    link: '#'
                }],
                [{
                    image: Miami,
                    alt: 'Miami Grand Prix',
                    category: 'Credit Card News',
                    title: 'Enjoy Exclusive Miami Grand Prix with ...',
                    description: 'The Miami Grand Prix is returning, and Chase is giving Sapphire Reserve cardmembers a chance to enjoy ...',
                    link: '#'
                }],
                [{
                    image: chicago,
                    alt: 'Chicago',
                    category: 'Credit Card News',
                    title: 'EEEEEATSCON Chicago Presale Tix ...',
                    description: 'EEEEEATSCON Chicago is coming soon, with presale tickets available through May 15, 2024. This edition ...',
                    link: '#'
                }],
                [{
                    image: thankyou,
                    alt: 'ThankYou',
                    category: 'Credit Card Advice',
                    title: 'The Ultimate Bilt Rent Day Guide – May ...',
                    description: 'Eligible Citi cardholders can now transfer their Citi ThankYou Points to Accor and receive 50% bonus points ...',
                    link: '#'
                }],
                [{
                    image: women,
                    alt: 'Women',
                    category: 'Credit Card News',
                    title: 'Citi Adds Limited-Time Accor Transfer ...',
                    description: 'Chase and IHG have new limited-time offers on the IHG One Rewards credit cards. Here’s how to earn ...',
                    link: '#'
                }],
                [{
                    image: chicago,
                    alt: 'Card 1',
                    category: 'Credit Card Tips',
                    title: 'Chase Announces Latest EEEEEATSCON LA ...',
                    description: 'The latest edition of Chase Sapphire’s EEEEEATSCON LA is here. Find out all about the upcoming food ...',
                    link: '#'
                }]
            ]
        };
    },

    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        readArticle(link) {
            window.location.href = link; // Navigate to article link
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

.articles-cont {
    padding: 90px 50px 25px 50px;

    .headings {
        h1 {
            color: #141690;
            font-family: Roboto;
            font-size: 37px;
        }

        p {
            margin: 17px 0 34px 0;
            font-size: 17px;
            font-family: Roboto;
            font-weight: 300;
        }
    }

    .slider-res {
        position: relative;
        overflow: hidden;

        .mega-slide {
            display: flex;
            transition: transform 0.5s ease;

            .slide-cont {
                display: flex;
                width: 100%; // Each slide takes full width

                .slides {
                    margin: 1rem;
                    box-shadow: 0 4px 22px rgba(0, 0, 0, 0.1);
                    padding: 2px;
                    border-radius: 14px;
                    max-width: 450px; // Maximum width
                    width: 750px;
                    display: flex;
                    flex-direction: column;

                    img {
                        width: 100%;
                        border-radius: 10px 10px 0 0;
                        height: auto;
                        opacity: 1;
                        transition: opacity 0.5s ease-in-out;

                        &:hover {
                            cursor: pointer;
                            opacity: 0.5;
                        }
                    }

                    .credit-info {
                        padding: 1rem;
                        font-family: Roboto;
                        flex-grow: 1;

                        h2 {
                            color: rgba(0, 0, 0, 0.5);
                            font-size: 18px;
                            margin: 5px 0;
                            font-weight: 300;
                        }

                        h1 {
                            font-weight: 600;
                            font-size: 24px;
                            line-height: 1.5;
                            color: #141690;

                            &:hover {
                                cursor: pointer;
                                color: #0a0a90;
                            }
                        }

                        p {
                            margin: 18px 0;
                            color: #0f1e41;
                            font-weight: 300;
                            line-height: 1.75;
                        }

                        button {
                            height: auto;
                            width: 100%;
                            padding: 12px 16px;
                            border-radius: 6px;
                            color: #fff;
                            border: 1px solid #141690;
                            background-color: #141690;

                            &:hover {
                                cursor: pointer;
                                background-color: #0a0a90;
                            }
                        }
                    }
                }
            }
        }

        .btns {
            display: flex;
            align-items: center;
            justify-content: center;

            .icons {
                padding: 16px;

                &:hover {
                    cursor: pointer;
                }
            }

            .checks {
                display: inline-block;
                border-radius: 16px;
                margin: 8px;
                height: 15px;
                width: 15px;
                background-color: #c2c2c2;

                &.active {
                    background-color: #141690;
                }
            }
        }
    }
}
</style>
