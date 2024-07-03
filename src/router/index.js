import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Development from "@/pages/Development.vue";
import Why from "@/pages/Why.vue";
import Process from "@/pages/Process.vue";
import Style from "@/pages/Style.vue";
import Tools from "@/pages/Tools.vue";
import Projects from "@/pages/Projects.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Development",
      path: "/development",
      component: Development,
    },
    {
      name: "Why",
      path: "/development/why",
      component: Why,
    },
    {
      name: "Process",
      path: "/development/process",
      component: Process,
    },
    {
      name: "Style",
      path: "/development/style",
      component: Style,
    },
    {
      name: "Tools",
      path: "/development/tools",
      component: Tools,
    },
    {
      name: "Projects",
      path: "/projects",
      component: Projects,
    },
  ],
});
