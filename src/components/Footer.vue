<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <small class="footer__copyright">
          &copy; {{ new Date().getFullYear() }}. All Rights Reserved.
        </small>

        <ul class="footer__list">
          <li class="footer__list-item item">
            <RouterLink to="/" class="footer__list-link link">
              Terms &amp; Conditions
            </RouterLink>
          </li>
          <li class="footer__list-item item">
            <RouterLink to="/" class="footer__list-link link">
              Privacy Policy
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 15px 0;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 15px;
    }
  }

  &__copyright {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  &__list {
    display: flex;
    align-items: center;

    &-item {
      @media (max-width: 768px) {
        padding: 8px 12px;
      }
    }

    &-link:hover {
      text-decoration: underline;
      text-underline-offset: 8px;
    }
  }
}
</style>
