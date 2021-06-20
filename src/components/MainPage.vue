<template>
  <div class="main-page">
    <top-menu/>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu';
export default {
  name: 'MainPage',
  components: {TopMenu},
  props: {
    msg: String
  }
}
</script>

