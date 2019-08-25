<template>
  <div class='TopBooksOfAllTime'>
    <h1 class='text-mediumgold title' align='center'>
      Top books of all time
    </h1>
    <main-content />
  </div>
</template>

<script>
import MainContent from '@/components/TopBooksOfAllTime';

export default {
  name: 'TopBooksOfAllTime',
  components: {
    MainContent,
  },
};
</script>

<style lang='scss' scoped>
.TopBooksOfAllTime {
  max-width: 650px;
  margin: 0 auto;
  box-shadow: 0 0 10px #dddddd;

  .title {
    margin: 0;
    padding-top: 15px;
  }
}
</style>