<template>
  <div class='TopBooksOfAllTimePage'>
    <router-link class='back-btn text-darkgold text-14' :to='`/main`'>
      &lt; Main page
    </router-link>

    <h1 class='text-mediumgold title' align='center'>
      Top books of all time
    </h1>
    <main-content />
  </div>
</template>

<script>
import MainContent from '@/components/TopBooksOfAllTime';

export default {
  name: 'TopBooksOfAllTimePage',
  components: {
    MainContent,
  },
};
</script>

<style lang='scss' scoped>
.TopBooksOfAllTimePage {
  max-width: 650px;
  margin: 0 auto;
  box-shadow: 0 0 10px #dddddd;

  .back-btn {
    margin: 15px;
    display: inline-block;
  }

  .title {
    margin: 0;
    padding-top: 15px;
  }
}
</style>