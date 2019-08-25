<template>
  <header class='top-actions'>
    <div class='container'>
      <a class='top-logo'>Logo</a>
      <nav class='top-menu'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <router-link :to='`/books`'>Just added</router-link>
          </li>
          <li class='active'>
            <a>Top books</a>
          </li>
          <li>
            <a>Upcoming</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopActions',
};
</script>

<style lang='scss' scoped>
.top-actions {
  max-width: 1020px;
  margin: 0 auto;

  .container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 15px 30px 0;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-flow: row;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .top-logo {
      background-color: silver;
      display: inline-block;
      min-width: 100px;
      max-width: 200px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
    }

    .top-menu {
      ul {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 15px;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          padding: 5px;
          font-weight: bold;
          text-align: center;
          border-radius: 5px;

          a {
            color: $superdarkgrey;
          }

          &.active {
            background-color: $gold;
            padding: 5px 10px;

            a {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>