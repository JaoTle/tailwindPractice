<template>
    <div class="flex flex-col">
        <div class="posthead h-16 flex flex-row items-center justify-between px-5 py-1 ">
            <div class="flex items-center space-x-2">
                <div class="relative h-12 w-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                    <div class="absolute h-10 w-10 bg-white rounded-full p-1">
                    <img :src="profile"/>
                    </div> 
                </div>
                <a class="text-sm">User1</a>
            </div>
            <a><font-awesome-icon icon="fa-solid fa-ellipsis" /></a>
        </div>
        <img :src="post">
        <div class="actions-icons h-12 flex flex-row justify-between p-3">
            <div class="actions1 space-x-3">
                <font-awesome-icon icon="fa-regular fa-heart" class="text-2xl"/>
                <font-awesome-icon icon="fa-regular fa-comment" class="text-2xl"/>
                <font-awesome-icon icon="fa-regular fa-paper-plane" class="text-2xl"/>
            </div>
            <div class="action">
                <font-awesome-icon icon="fa-regular fa-bookmark" class="text-2xl"/>
            </div>
        </div>
        <div class="post-details text-left px-3 pb-4 border-b">
            <p class="text-xs font-semibold">1,069 likes</p>
            <div class="text-xs flex flex-inline space-x-1">
                <p class="font-semibold">User1</p>
                <p>Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</p>
                <p class="text-gray-400">..more</p>
            </div>
            <p class="text-xs text-gray-400 py-1">View all 100 comments</p>
            <p class="text-xxs text-gray-400">1 HOUR AGO</p>
        </div>
        <div class="h-12 pt-1 px-2 flex flex-row justify-between items-center">
            <div class="flex items-center space-x-2">
                <font-awesome-icon icon="fa-regular fa-face-smile" class="text-xl"/>
                <p class="text-xs">Add a comment...</p>  
            </div>
            <p class="text-xs font-semibold text-blue-200">Post</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile : require('@/assets/images/Profile-Pic-S-1.png'),
            post : require('@/assets/images/Post.png')
        }
    },
}
</script>
<style>
    
</style>