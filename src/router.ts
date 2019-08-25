import Vue from 'vue';
import Router from 'vue-router';
import TopBooks from '@/Pages/TopBooks.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'index', redirect: { name: 'main' } },
  {
    path: '/main',
    name: 'main',
    component: TopBooks,
  },
  {
    path: '/books',
    name: 'books',
    component: () =>
      import(/* webpackChunkName: 'TopBooksOfAllTime' */ '@/Pages/TopBooksOfAllTime.vue'),
  },
  {
    path: '/books/:book_slug',
    name: 'book',
    component: () => import(/* webpackChunkName: 'Book' */ '@/Pages/Book.vue'),
    props: (route: any) => ({
      bookSlug: route.params.book_slug,
    }),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home,
  //   },
  //   // {
  //   //   path: '/about',
  //   //   name: 'about',
  //   //   // route level code-splitting
  //   //   // this generates a separate chunk (about.[hash].js) for this route
  //   //   // which is lazy-loaded when the route is visited.
  //   //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  //   // },
  // ],
});
