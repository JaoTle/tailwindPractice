<template>
    <Navbar/>
    <div class="w-full md:w-935 lg:w-935 mx-auto flex space-x-3">
      <div class="mt-5 mb-2 w-614 h-full border">
        <StoryIg/>
        <PostFeed/>
      </div>
      <div class="mt-5 w-2/6 h-96">
        <Suggest class="invisible md:visible lg:visible"/>
      </div>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue'
import StoryIg from '../components/home/StoryIg.vue'
import PostFeed from '../components/home/PostFeed.vue'
import Suggest from '../components/home/Suggestion.vue'
export default {
  name: 'Home',
  components : {
    Navbar,
    StoryIg,
    PostFeed,
    Suggest
  }
}
</script>
