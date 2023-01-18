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
import UserInfo from '../components/user_profile/User_Info.vue'
import Story from '../components/user_profile/StoryHighlight.vue'
import Toggle from '../components/user_profile/Toggle.vue'
import UserPosts from '../components/user_profile/UserPosts.vue'
export default {
  components : {
    Navbar,
    UserInfo,
    Story,
    Toggle,
    UserPosts
  }
}
</script>
