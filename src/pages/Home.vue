<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <div class="section__one-information">
          <h1 class="section__one-title">
            Hi,
            <br />
            My name is <span>Nargiza</span>
            <br />
            I am a <span>&lt;developer/&gt;</span>
          </h1>
          <p class="section__one-text">
            I am aspiring junior front-end developer eager for new challenges and opportunities to grow. Passionate about creating intuitive user interfaces and continuously improving coding skills in a dynamic work environment.
          </p>
          <button @click="router.push('/development')" class="section__one-button button-secondary">More</button>
        </div>
        <div class="section__one-image">
          <img src="@/assets/images/web-developer.png" alt="Web Developer" />
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &-information {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &-title {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 48px;
    line-height: 52px;

    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }

    span {
      font-weight: 800;

      &:last-child {
        font-family: monospace;
      }
    }
  }

  &-button {
    width: max-content;
    margin-left: auto;
  }

  &-image {
    background-color: hsl(var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
