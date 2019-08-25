<template>
  <div>
    <router-link :to='`/books`'>
      &lt; Go back
    </router-link>

    <br />

    Upvoted {{ this.book.upvotes }} times

    <button
      :class="['vote-btn', { outlined: this.book.upvoted }]"
      @click='vote(!this.book.upvoted)'
    >
      {{ this.book.upvoted ? 'Upvoted' : 'Upvote' }}
    </button>

    <h1 class='text-darkgold'>
      {{ this.book.title }}
    </h1>
    <em>{{ this.book.author }}</em>

    <img class='cover' :src='this.book.cover' />

    <h4>Synopsis</h4>
    <p>{{ this.book.synopsis }}</p>

    <div>
      <strong class='rating'> Rating: {{ this.book.rating }}/10 </strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  props: ['bookSlug'],
  data() {
    return {
      book: {
        author: '',
        cover: '',
        rating: 0,
        slug: '',
        synopsis: '',
        title: '',
        upvoted: false,
        upvotes: 0,
      },
    };
  },
  created() {
    this.fetchBook(this.bookSlug);
  },
  methods: {
    async fetchBook(bookSlug) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/books/${bookSlug}`);
      this.book = await res.json();
    },
    vote: (val) => {
      // console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.cover {
  @extend .round;
  @extend .shadowed;

  display: block;
  margin: 0 auto;
}
</style>