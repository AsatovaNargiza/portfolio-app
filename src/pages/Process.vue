<script setup></script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <div class="section__one-information">
          <h1 class="section__one-title title">
            <span>development</span>Process
          </h1>
          <p class="section__one-text text">
            Front-end development involves creating wireframes, coding UI with HTML, CSS, and JavaScript, ensuring responsive design, optimizing performance, and performing cross-browser testing for a seamless user experience.
            
          </p>
        </div>
        <div class="section__one-images">
          <div class="section__one-image">
            <img src="@/assets/images/test.png" alt="Test" />
          </div>
          <div class="section__one-image">
            <img src="@/assets/images/theme.png" alt="Theme" />
          </div>
          <div class="section__one-image">
            <img src="@/assets/images/components.png" alt="Components" />
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

  &-information {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &-text {
    max-width: 855px;
    width: 100%;
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
