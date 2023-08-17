export default [
  { path: "/login", component: "login" },
  {
    path: "/",
    component: "@/layouts/index",
    routes: [
      { redirect: "/", component: "index" },
      { path: "/", component: "index" },
      { path: "/docs", component: "docs" },
    ],
  },
];
