<template >
<SlideOne  class="SlideOne"/>
<SlideRes class="SlideRes" />
</template>
<script>
import SlideOne from './SlideOne.vue';
import SlideRes from './SlideRes.vue';
export default {
    components:{
        SlideOne , SlideRes
    }
}
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.SlideRes{
    display: none;
}


@media all and (max-width:450px) {
    .SlideOne{
        display: none;
    }
    .SlideRes{
        display: block;
    }
}
    
</style>