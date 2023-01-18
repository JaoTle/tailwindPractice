<template >
    <div>
        <ul class="flex space-x-2 ml-16">
            <li class="py-3 px-5">
                <img :src="img_story" class="h-16 w-16 border-4 border-slate-100 rounded-full">
                <p>Highlight#1</p>
            </li>
            <li class="py-3 px-5">
                <img :src="img_story" class="h-16 w-16 border-4 border-slate-100 rounded-full">
                <p>Highlight#2</p>
            </li>
            <li class="py-3 px-5">
                <img :src="img_story" class="h-16 w-16 border-4 border-slate-100 rounded-full">
                <p>Highlight#3</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img_story : require('@/assets/images/user_profile.png')
        }
    },
}
</script>
