<template>
  <div class='TopBooks'>
    <top-actions />
    <main-content />
    <footer-links />
  </div>
</template>

<script>
import TopActions from '@/components/Common/TopActions';
import MainContent from '@/components/TopBooks';
import FooterLinks from '@/components/Common/FooterLinks';

export default {
  name: 'TopBooks',
  components: {
    TopActions,
    MainContent,
    FooterLinks,
  },
};
</script>
