<template>
  <footer class="app-footer">
    <p class="footer-text">Copyright © <strong>Carlos Mur</strong> — InfoPaíses v{{ version }}</p>
  </footer>
</template>

<script>
import packageInfo from '../../package.json';

export default {
  name: 'AppFooter',
  data() {
    return {
      version: packageInfo.version,
    };
  },
};
</script>
