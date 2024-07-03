<script setup></script>

<template>
  <section class="section__one">
    <div class="container">
      <div class="section__one-content">
        <h1 class="section__one-title title"><span>development</span>Why</h1>
        <p class="section__one-text text">
          I chose programming because I love solving problems and creating innovative solutions. Being a woman in tech inspires me to break stereotypes and pave the way for more diversity in the field.
        </p>
        <div class="section__one-image">
          <img src="@/assets/images/why.png" alt="Why" />
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

  &-image img {
    max-width: 100%;
  }
}
</style>
