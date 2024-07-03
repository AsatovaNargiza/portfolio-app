<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const path = computed(() => route.path);

const isOpen = ref(false);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};

const routes = [
  {
    id: 1,
    label: "Development",
    to: "/development",
  },
  {
    id: 2,
    label: "Projects",
    to: "/projects",
  },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <RouterLink to="/" class="header__logo" title="Home Page"
          >&lt; Nargiza /&gt;</RouterLink
        >

        <nav :class="['navbar', { active: isOpen }]">
          <ul class="navbar__list">
            <li
              v-for="route in routes"
              :key="route.id"
              class="navbar__list-item item"
            >
              <RouterLink
                :to="route.to"
                @click="handleOpen()"
                :class="[
                  'navbar__list-link',
                  'link',
                  { active: path.startsWith(route.to) },
                ]"
              >
                {{ route.label }}
              </RouterLink>
            </li>
          </ul>

          <button @click="handleOpen()" class="navbar__close">
            <img src="@/assets/icons/x.svg" alt="X" />
          </button>

          <a
            href="./cv.pdf"
            download="./cv.pdf"
            class="navbar__link-cv"
            
            >CV</a>

          <a
            href="https://github.com"
            class="navbar__link-github"
            target="_blank"
          >
            <img src="@/assets/icons/github.svg" alt="Github" />
          </a>
        </nav>

        <button @click="handleOpen()" class="header__menu button-icon">
          <img src="@/assets/icons/menu.svg" alt="Menu" />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 15px 0;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    transition-property: opacity;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.7;
    }
  }

  &__menu {
    display: none;

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }
}

.navbar {
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: hsl(var(--background));
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 100%;
    z-index: 50;
    padding: 15px;
    transition-property: left;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      left: 0;
    }
  }

  &__list {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &-link {
      position: relative;

      &::before {
        content: "";
        width: 0;
        height: 1px;
        background-color: hsl(var(--primary));
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(8px);
        transition-property: width;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover::before {
        width: 100%;
      }

      &.active::before {
        width: 100%;
      }
    }
  }

  &__link-cv {
    height: 36px;
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin: 0 30px 0 16px;
    padding: 8px 16px;
    border-radius: 6px;
    transition-property: background-color;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: hsl(var(--primary) / 0.9);
    }
  }

  &__link-github {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition-property: opacity;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 15px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__close {
    width: 36px;
    height: 36px;
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0.7;
    transition-property: opacity;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 1;
    }

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }
}
</style>
