<script setup>
import { computed, onMounted } from "vue";

import { format } from "date-fns";

import { useRepositories } from "@/store/useRepositories";

const repositories = useRepositories();

const getRepositories = repositories.getRepositories;

onMounted(() => {
  getRepositories();
});

const isLoading = computed(() => repositories.isLoading);
const value = computed(() => repositories.value);
const error = computed(() => repositories.error);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateGradient() {
  const angle = Math.random() * 360;

  const colorOne = getRandomColor();
  const colorTwo = getRandomColor();

  return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
}
</script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <h1 class="section__one-title title">Projects</h1>
        <p v-if="isLoading" class="loading">Loading...</p>
        <p v-else-if="error" class="error">
          Ooops... Here is the error : ( <br />
          {{ error }}
        </p>
        <div v-else class="section__one-block">
          <div v-for="(item, index) in value" :key="item.id" class="section__one-item">
            <div class="section__one-background" :style="{ backgroundImage: generateGradient() }">
              <span>{{ index + 1 }}</span>
            </div>

            <div class="section__one-information">
              <h3 class="section__one-subtitle subtitle">
                Name: <span>{{ item.name }}</span>
              </h3>
              <p class="section__one-text text">Date: {{ format(new Date(item.updated_at), "yyyy-MM-dd") }}</p>
            </div>

            <a :href="item.homepage" class="section__one-link">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section__one {
  padding: 30px 0;

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }

  &-block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &-item {
    background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 20px;
    border: 1px solid hsl(var(--border));
    border-radius: 8px;
  }

  &-background {
    height: 320px;
    display: flex;
    justify-content: flex-end;
    padding: 15px;

    span {
      width: 36px;
      height: 36px;
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      border-radius: 50%;
    }
  }

  &-information {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  &-subtitle {
    font-weight: 400;

    span {
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  &-link {
    height: 36px;
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 8px 16px;
    border-radius: 6px;
    transition-property: background-color;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: hsl(var(--destructive) / 0.9);
    }
  }
}
</style>
