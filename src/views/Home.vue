<template>
    <Navbar/>
    <div class="w-full md:w-935 lg:w-935 mx-auto">
      <UserInfo/>
      <Story/>
      <Toggle/>
      <UserPosts/>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue'
import UserInfo from '../components/User_Info.vue'
import Story from '../components/StoryHighlight.vue'
import Toggle from '../components/Toggle.vue'
import UserPosts from '../components/UserPosts.vue'
export default {
  name: 'Home',
  components : {
    Navbar,
    UserInfo,
    Story,
    Toggle,
    UserPosts
  }
}
</script>
