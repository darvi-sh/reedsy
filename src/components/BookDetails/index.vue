<template>
  <div class='book'>
    <router-link class='back-btn text-darkgold' :to='`/books`'>
      &lt; Books list
    </router-link>

    <div class='title-votes-wrapper'>
      <div class="title">
        <h1 class='text-darkgold'>
          {{ this.book.title }}
        </h1>
        <em>{{ this.book.author }}</em>
      </div>

      <div class='upvote'>
        <span class='upvote-count'>
          Upvoted {{ this.book.upvotes }} times
        </span>
        <button
          :class="['vote-btn', { outlined: this.book.upvoted }]"
          @click='vote(!this.book.upvoted)'
        >
          {{ this.book.upvoted ? 'Upvoted' : 'Upvote' }}
        </button>
      </div>
    </div>


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

<style lang='scss' scoped>
.book {
  .back-btn {
    font-size: 12px;
  }

  .title-votes-wrapper {
    margin-top: 1rem;
    display: grid;
    justify-content: space-between;
    grid-template-columns: minmax(auto, 3fr) minmax(220px, 1fr);
    grid-auto-flow: dense;

    .title {
      grid-column: 1/3;

      h1 {
        margin: 0;
      }
    }

    .upvote {
      font-size: 14px;
      text-align: right;
      grid-column: 3/4;

      .upvote-count {
        margin: 5px;
      }
    }
  }

  .cover {
    @extend .round;
    @extend .shadowed;

    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>