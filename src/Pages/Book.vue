<template>
  <div class='book'>
    <book-details :book-slug='bookSlug' />
  </div>
</template>

<script>
import BookDetails from '@/components/BookDetails';

export default {
  name: 'Book',
  props: ['bookSlug'],
  components: {
    BookDetails,
  },
};
</script>

<style lang='scss' scoped>
.book {
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