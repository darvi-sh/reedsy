<template>
  <div class='app'>
    <transition name='fade' mode='out-in'>
      <router-view :key='$route.fullPath' />
    </transition>
  </div>
</template>

<script>
import TopBooks from '@/Pages/TopBooks.vue';
import '@/styles/_index.scss';

export default {
  name: 'app',
  components: {
    TopBooks,
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: $lightkhaki;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active {
  transition: all 150ms ease;
}
.fade-leave-active {
  transition: all 150ms cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
