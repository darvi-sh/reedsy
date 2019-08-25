<template>
  <div class='bookPage'>
    <router-link class='back-btn text-darkgold text-14' :to='`/books`'>
      &lt; Books list
    </router-link>

    <book-details :book-slug='bookSlug' />
  </div>
</template>

<script>
import BookDetails from '@/components/BookDetails';

export default {
  name: 'BookPage',
  props: ['bookSlug'],
  components: {
    BookDetails,
  },
};
</script>

<style lang='scss' scoped>
.bookPage {
  max-width: 650px;
  margin: 0 auto;
  box-shadow: 0 0 10px #dddddd;
  background-color: white;
  padding: 25px;
  box-sizing: border-box;

  .title {
    margin: 0;
    padding-top: 15px;
  }
}
</style>