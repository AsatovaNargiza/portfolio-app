<script setup></script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <h1 class="section__one-title title"><span>development</span>Tools</h1>

        <div class="section__one-images">
          <div class="section__one-image">
            <img src="@/assets/images/vue.png" alt="Vue" />
          </div>
          <div class="section__one-image">
            <img src="@/assets/images/tailwindcss.png" alt="Tailwindcss" />
          </div>
          <div class="section__one-image">
            <img src="@/assets/images/nodejs.png" alt="NodeJS" />
          </div>
          <div class="section__one-image">
            <img src="@/assets/images/github.png" alt="Github" />
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
    row-gap: 50px;
  }

  &-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 50px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &-image img {
    max-width: 100%;
  }
}
</style>
