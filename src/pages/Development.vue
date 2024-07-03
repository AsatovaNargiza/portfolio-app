<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const array = [
  {
    title: "why?",
    description:
      "I'm a multifaceted individual: a dedicated programmer, a proud woman, a loving mother, and a supportive wife, seamlessly balancing all roles with passion and commitment.",
    href: "/development/why",
  },
  {
    title: "process",
    description:
      "Front-end development involves designing user interfaces, coding with HTML, CSS, and JavaScript, ensuring responsiveness, optimizing performance, and testing for cross-browser compatibility to deliver a seamless user experience.",
    href: "/development/process",
  },
  {
    title: "style",
    description:
      "Using styles in front-end development enhances user experience by creating visually appealing, consistent, and responsive interfaces, ensuring accessibility and providing a cohesive brand identity across all platforms.",
    href: "/development/style",
  },
  {
    title: "tools",
    description:
      "I'm learning front-end tools like Tailwind CSS for styling, Vue.js for frameworks, GitHub for version control, and Node.js for backend integration, eager to expand my skill set further.",
    href: "/development/tools",
  },
];
</script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <h1 class="section__one-title title"><span>development</span>Home</h1>

        <div class="section__one-block">
          <div
            v-for="(item, index) in array"
            :key="index"
            class="section__one-item"
          >
            <div class="section__one-information">
              <h3 class="section__one-subtitle subtitle">
                {{ item.title }}
              </h3>
              <p class="section__one-text text">
                {{ item.description }}
              </p>
            </div>

            <button
              @click="router.push(item.href)"
              class="section__one-button button-outline"
            >
              More Details...
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section__one {
  min-height: calc(100vh - 132px);
  display: flex;
  align-items: center;
  padding: 30px 0;

  @media (max-width: 768px) {
    min-height: calc(100vh - 165px);
  }

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 100px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 50px;

    @media (max-width: 768px) {
      row-gap: 25px;
    }
  }

  &-information {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media (max-width: 768px) {
      row-gap: 15px;
    }
  }
}
</style>
