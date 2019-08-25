<template>
  <div class='main'>
    <div class='container'>
      <h1>Top books</h1>

      <div class='featured-book'>
        <div class='recommended'>Recommended</div>

        <img src='@/assets/images/01-becoming.jpg' />

        <div class='book-info'>
          <h2 class='title'>Becoming</h2>
          <div class='author'>Michelle Obama</div>

          <div class='synopsis'>
            <p>
              In a life filled with meaning and accomplishment,
              Michelle Obama has emerged as one of the most iconic
              and compelling women of our era. As First Lady of
              the United States of America—the first African
              American to serve in that role—she helped create the
              most welcoming and inclusive White House in history,
              while also establishing herself as a powerful
              advocate for women and girls in the U.S. and around
              the world, dramatically changing the ways that
              families pursue healthier and more active lives, and
              standing with her husband as he led America through
              some of its most harrowing moments. Along the way,
              she showed us a few dance moves, crushed Carpool
              Karaoke, and raised two down-to-earth daughters
              under an unforgiving media glare.
            </p>
            <p>
              In her memoir, a work of deep reflection and
              mesmerizing storytelling, Michelle Obama invites
              readers into her world, chronicling the experiences
              that have shaped her—from her childhood on the South
              Side of Chicago to her years as an executive
              balancing the demands of motherhood and work, to her
              time spent at the world’s most famous address. With
              unerring honesty and lively wit, she describes her
              triumphs and her disappointments, both public and
              private, telling her full story as she has lived
              it—in her own words and on her own terms.
            </p>
          </div>
        </div>
      </div>

      <div class='top-voted'>
        <h2>Top voted</h2>

        <div class='books-list'>
          <div class='book'>
            <span class='position'>
              <span>1</span>
            </span>

            <img src='@/assets/images/02-where.jpg' />

            <div class='book-info'>
              <h3 class='title'>Where the Crawdads Sing</h3>
              <div class='author'>Delia Owens</div>

              <div class='synopsis'>
                <p>
                  For years, rumors of the "Marsh Girl" have
                  haunted Barkley Cove, a quiet town on the
                  North Carolina coast. So in late 1969, when
                  handsome Chase Andrews is found dead, the
                  locals immediately suspect Kya Clark, the
                  so-called Marsh Girl. But Kya is not what
                  they say. Sensitive and intelligent, she has
                  survived for years alone in the marsh that
                  she calls home, finding friends in the gulls
                  and lessons in the sand. Then the time comes
                  when she yearns to be touched and loved.
                  When two young men from town become
                  intrigued by her wild beauty, Kya opens
                  herself to a new life--until the unthinkable
                  happens.
                </p>
              </div>
            </div>
          </div>

          <div class='book'>
            <span class='position'>
              <span>2</span>
            </span>

            <img src='@/assets/images/03-girl.jpg' />

            <div class='book-info'>
              <h3 class='title'>
                Girl, Wash Your Face: Stop Believing the Lies
                About Who You Are so You Can Become Who You Were
                Meant to Be
              </h3>
              <div class='author'>Delia Owens</div>

              <div class='synopsis'>
                <p>
                  As the founder of the lifestyle website
                  TheChicSite.com and CEO of her own media
                  company, Rachel Hollis developed an immense
                  online community by sharing tips for better
                  living while fearlessly revealing the
                  messiness of her own life. Now, in this
                  challenging and inspiring new book, Rachel
                  exposes the twenty lies and misconceptions
                  that too often hold us back from living
                  joyfully and productively, lies we’ve told
                  ourselves so often we don’t even hear them
                  anymore.
                </p>
              </div>
            </div>
          </div>

          <div class='book'>
            <span class='position'>
              <span>3</span>
            </span>

            <img src='@/assets/images/04-educated.jpg' />

            <div class='book-info'>
              <h3 class='title'>Educated: A Memoir</h3>
              <div class='author'>Tara Westover</div>

              <div class='synopsis'>
                <p>
                  Born to survivalists in the mountains of
                  Idaho, Tara Westover was seventeen the first
                  time she set foot in a classroom. Her family
                  was so isolated from mainstream society that
                  there was no one to ensure the children
                  received an education, and no one to
                  intervene when one of Tara’s older brothers
                  became violent. When another brother got
                  himself into college, Tara decided to try a
                  new kind of life. Her quest for knowledge
                  transformed her, taking her over oceans and
                  across continents, to Harvard and to
                  Cambridge University. Only then would she
                  wonder if she’d traveled too far, if there
                  was still a way home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBooks',
};
</script>

<style lang='scss' scoped>
.main {
  background-color: white;
  max-width: 1020px;
  box-shadow: 0 5px 15px #cccccc;
  border-radius: 12px 12px 0 0;
  padding-bottom: 50px;
  margin: 0 auto;

  .container {
    margin: 0 auto;

    > h1 {
      padding: 30px 0 0 30px;
      font-size: 36px;
    }

    .featured-book {
      background-color: $lightkhaki;
      position: relative;
      display: grid;
      grid-auto-flow: column;
      padding: 30px 30px 0;

      .recommended {
        background-color: $gold;
        color: white;
        padding: 2px 7px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 0 0 10px;
      }

      > img {
        @extend .round;
        @extend .shadowed;

        max-width: 264px;
        margin-right: 18px;
      }

      .book-info {
        .title {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 36px;
          font-weight: 900;
        }
      }
    }

    .top-voted {
      padding: 30px;

      > h2 {
        font-size: 32px;
        font-weight: 900;
      }

      .books-list {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 20px;

        .book {
          background-color: $lightkhaki;
          position: relative;
          padding: 15px;

          .position {
            position: absolute;
            top: 8px;
            right: 8px;

            > span {
              border: 2px solid $gold;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              line-height: 28px;
              display: inline-block;
              text-align: center;
              color: $gold;
              font-size: 18px;
              font-weight: bold;
            }
          }

          > img {
            @extend .shadowed;

            max-width: 134px;
            margin: 0 auto;
            display: block;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>