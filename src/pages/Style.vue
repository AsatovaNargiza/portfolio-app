<script setup></script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <h1 class="section__one-title title"><span>development</span>Style</h1>
        <p class="section__one-text text">
          Styles in front-end development ensure visually appealing, responsive, and accessible interfaces, enhancing user experience and maintaining brand consistency across devices and platforms. 
        </p>
        <div class="section__one-image">
          <img src="@/assets/images/dry-kiss.png" alt="Dry Kiss" />
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

  &-text {
    max-width: 855px;
    width: 100%;
  }

  &-image {
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }
}
</style>
