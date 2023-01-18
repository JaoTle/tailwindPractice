<template >
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div class="post-items relative">
            <font-awesome-icon icon="fa-solid fa-clone" class="absolute right-5 top-5 text-white text-xl" />
            <img :src="post1" class="w-full">
        </div>
        <div class="post-items relative">
            <font-awesome-icon icon="fa-solid fa-film" class="absolute right-5 top-5 text-white text-xl"/>
            <img :src="post2" class="w-full"> 
        </div>
        <div class="post-items">
            <img :src="post3" class="w-full">
        </div>
        <div class="post-items">
            <img :src="post4" class="w-full">
        </div>
        <div class="post-items">
            <img :src="post5" class="w-full">
        </div>
        <div class="post-items">
            <img :src="post6" class="w-full">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            post1 : require("@/assets/images/Small-Post.png"),
            post2 : require("@/assets/images/Small-Post-1.png"),
            post3 : require("@/assets/images/Small-Post-2.png"),
            post4 : require("@/assets/images/Small-Post-3.png"),
            post5 : require("@/assets/images/Small-Post-4.png"),
            post6 : require("@/assets/images/Small-Post-5.png"),
        }
    },
}
</script>
