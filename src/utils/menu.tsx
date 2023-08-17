/*
 * @Author: ao-lie lie.ao@firesoon.com
 * @Date: 2023-06-21 17:58:03
 * @LastEditors: ao-lie lie.ao@firesoon.com
 * @LastEditTime: 2023-06-21 18:01:06
 * @FilePath: \umi4-antd4\src\utils\menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
 
