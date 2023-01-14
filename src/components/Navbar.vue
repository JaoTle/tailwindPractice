<template>
    <div>
        <nav class="border-b-2">
            <div class="sm:w-full md:w-935 lg:w-935 mx-auto">
                <div class="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row h-32 md:h-16 py-2 items-center">
                    <div class="logo">
                        <img class="h-10" :src="logo" />
                    </div>
                    <div class="search">
                        <input class="border p-1 px-3 rounded-md" type="text" placeholder="Seacrh">
                    </div>
                    <ul class="menus flex space-x-5">
                        <li><a class="text-2xl"><font-awesome-icon icon="fa-solid fa-house" /></a></li>
                        <li><a class="text-2xl"><font-awesome-icon icon="fa-brands fa-facebook-messenger" /></a></li>
                        <li><a class="text-2xl"><font-awesome-icon icon="fa-regular fa-square-plus" /></a></li>
                        <li><a class="text-2xl"><font-awesome-icon icon="fa-regular fa-compass" /></a></li>
                        <li><a class="text-2xl"><font-awesome-icon icon="fa-regular fa-heart" /></a></li>
                        <li><a><img class="w-6"  :src="profile"/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {

    data() {
        return {
            logo : require('../assets/images/Instagram_logo.png'),
            profile : require('../assets/images/profile.png')
        }
    },
}
</script>
<style>
    
</style>