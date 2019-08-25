<template>
  <footer>
    <div class='container'>
      <nav>
        <ul>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang='scss' scoped>
footer {
  background-color: $superdarkgrey;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100vw;

  ul {
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;

    li {
      // display: inline-block;
    }
  }
}
</style>