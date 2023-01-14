<template >
    <div class="flex flex-col md:flex-row lg:flex-row md:h-40 lg:h-40 mt-10">
        <div class="profilepic w-full md:w-80 lg:w-80 mb-5 md:mb-0 lg:mb0 flex justify-center">
            <img class="h-20" :src="profile_pic"/>
        </div>
        <div class="profileinfo w-full space-y-5">
            <div class="info-top flex items-center justify-center md:justify-start lg:justify-start space-x-5">
                <h2 class="text-2xl">Lixtle</h2>
                <button class="bg-sky-500 py-1 px-5 text-white rounded-md">Follow</button>
                <a> <font-awesome-icon icon="fa-solid fa-ellipsis" /></a>
            </div>
            <div class="info-middle flex  justify-center md:justify-start lg:justify-start space-x-5">
                <p>1.245 posts</p>
                <p>4M followers</p>
                <p>0 following</p>
            </div>
            <div class="info-bottom text-center lg:text-left md:text-left">
                <p>Tle</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile_pic : require('../assets/images/user_profile.png')
        }
    },
}
</script>
<style >
    
</style>