<template>
    <div class="sections2 flex flex-col p-2">
        <div class="switch-account flex justify-between items-center">
            <div class="flex space-x-2 items-center">
                <img :src="profile1"/>
                <div class="flex flex-col space-y-1">
                    <p class="text-xs font-semibold">shirleyromero</p>
                    <p class="text-xs text-gray-400">Shirley Romero</p>
                </div>
            </div>
            <p class="text-xs font-semibold text-blue-500">Switch</p>
        </div>
        <div class="suggest py-4 flex flex-col space-y-2">
            <div class="text-head flex items-center justify-between">
                <p class="text-sm text-gray-400 font-semibold">Suggestions For You</p>
                <p class="text-xs font-semibold">See All</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <img :src="profile2" class="h-10"/>
                    <div class="flex flex-col space-y-1 text-left">
                        <p class="text-xs font-semibold">terylucas</p>
                        <p class="text-xs text-gray-400">Followed by terylucas + 2 more</p>
                    </div>
                </div>
                <p class="text-xs font-semibold text-blue-500">Follow</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <img :src="profile3" class="h-10"/>
                    <div class="flex flex-col space-y-1 text-left">
                        <p class="text-xs font-semibold">lauramatthews</p>
                        <p class="text-xs text-gray-400">Followed by lauramatthews + 2 more</p>
                    </div>
                </div>
                <p class="text-xs font-semibold text-blue-500">Follow</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <img :src="profile4" class="h-10"/>
                    <div class="flex flex-col space-y-1 text-left">
                        <p class="text-xs font-semibold">harryprescott</p>
                        <p class="text-xs text-gray-400">Followed by harryprescott + 2 more</p>
                    </div>
                </div>
                <p class="text-xs font-semibold text-blue-500">Follow</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <img :src="profile5" class="h-10"/>
                    <div class="flex flex-col space-y-1 text-left">
                        <p class="text-xs font-semibold">ednamanz</p>
                        <p class="text-xs text-gray-400">Followed by ednamanz + 2 more</p>
                    </div>
                </div>
                <p class="text-xs font-semibold text-blue-500">Follow</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <img :src="profile6" class="h-10"/>
                    <div class="flex flex-col space-y-1 text-left">
                        <p class="text-xs font-semibold">christinasterling</p>
                        <p class="text-xs text-gray-400">Followed by christinasterling + 2 m...</p>
                    </div>
                </div>
                <p class="text-xs font-semibold text-blue-500">Follow</p>
            </div>
        </div>
        <div class="others text-xs text-gray-400 flex flex-wrap text-left">
            <p class="pr-2">About</p>
            <p class="pr-2">Press</p>
            <p class="pr-2">API</p>
            <p class="pr-2">Jobs</p>
            <p class="pr-2">Privacy</p>
            <p class="pr-2">Terms</p>
            <p class="pr-2">Locations</p>
            <p class="pr-2">Top Accouts</p>
            <p class="pr-2">Hashtags</p>
            <p class="pr-2">Language</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile1 : require('@/assets/images/Profile-Pic-S-1.png'),
            profile2 : require('@/assets/images/Profile-Pic-S.png'),
            profile3 : require('@/assets/images/Profile-Pic-S-2.png'),
            profile4 : require('@/assets/images/Profile-Pic-S-3.png'),
            profile5 : require('@/assets/images/Profile-Pic-S-4.png'),
            profile6 : require('@/assets/images/Profile-Pic-S-5.png'),
        }
    },
}
</script>
