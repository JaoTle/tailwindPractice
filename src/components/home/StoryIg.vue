<template>
    <div class="h-28 border-b p-5 relative">
        <ul class="flex justify-between">
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story1"/>
                  </div> 
                </div>
                <p class="text-xs">Your story</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story2"/>
                  </div> 
                </div>
                <p class="text-xs">User1</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story3"/>
                  </div> 
                </div>
                <p class="text-xs">User2</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story4"/>
                  </div> 
                </div>
                <p class="text-xs">User3</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story5"/>
                  </div> 
                </div>
                <p class="text-xs">User4</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story6"/>
                  </div> 
                </div>
                <p class="text-xs">User5</p>
            </li>
            <li>
                <div class="relative h-16 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex flex-row justify-center items-center">
                  <div class="absolute h-14 w-14 bg-white rounded-full p-1">
                    <img :src="story7"/>
                  </div> 
                </div>
                <p class="text-xs">User6</p>
            </li>
        </ul>
        <font-awesome-icon icon="fa-solid fa-circle-chevron-right" class="absolute top-1/2 right-2 text-white text-xl bg-black rounded-full shadow-xl shadow-black" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            story1 : require("@/assets/images/Profile-Pic-S.png"),
            story2 : require("@/assets/images/Profile-Pic-S-1.png"),
            story3 : require("@/assets/images/Profile-Pic-S-2.png"),
            story4 : require("@/assets/images/Profile-Pic-S-3.png"),
            story5 : require("@/assets/images/Profile-Pic-S-4.png"),
            story6 : require("@/assets/images/Profile-Pic-S-5.png"),
            story7 : require("@/assets/images/Profile-Pic-S-6.png")
        }
    },
}
</script>
