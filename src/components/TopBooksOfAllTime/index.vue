<template>
  <div class='TopBooksOfAllTimeContent'>
    <div
      v-for='(book, index) in books'
      :key='book.slug'
      :class="['content', { 'bg-white': index % 2 === 0 }]"
    >
      <img :src='book.cover' class='cover' />

      <h3 class='book-title text-darkgold'>
        {{ index + 1 }}.
        <router-link :to='`./books/${book.slug}`'>
          {{ book.title }}
        </router-link>
        <small class='rating text-black'>
          ({{ book.rating }}/10)
        </small>
      </h3>
      <small>
        <em>{{ book.author }}</em>
      </small>

      <p class='synopsis'>{{ book.synopsis | truncate(200) }}</p>

      <br />

      <button
        :class="['vote-btn', { outlined: book.upvoted }]"
        @click='vote(!book.upvoted)'
      >
        {{ book.upvoted ? 'Upvoted' : 'Upvote' }}
      </button>

      Upvoted {{ book.upvotes }} times
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBooks',
  components: {},
  data() {
    return {
      books: [],
    };
  },
  filters: {
    truncate: (text, limit) => {
      return `${text.slice(0, limit)}...`;
    },
  },
  created() {
    this.fetchBooks(this.bookSlug);
  },
  methods: {
    async fetchBooks(bookSlug) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/books`);
      const books = await res.json();
      this.books = books.books;
    },
    vote: (val) => {
      // console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.TopBooksOfAllTimeContent {
  .content {
    padding: 25px 30px;
    font-size: 14px;
    overflow: hidden;

    .cover {
      float: right;
      max-width: 120px;
      border-radius: 5px;
      box-shadow: 0 2px 5px #cccccc;
    }

    .book-title {
      margin: 0;
      padding: 0;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .synopsis {
      margin-right: 15px;
    }
  }
}

.bg-white {
  background-color: white;
}

.rating {
  font-size: 80%;
  font-weight: normal;
}
</style>