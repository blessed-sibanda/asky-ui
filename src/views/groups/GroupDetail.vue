<template>
  <two-column-layout>
    <div slot="main">
      <h1 class="h2">{{ group.name }}</h1>
      <img src="../../assets/group-banner.jpg" class="group-banner" alt="" />
      <div class="lead text-justify">
        {{ group.description }}
      </div>
    </div>
    <div slot="sidebar">
      <group-info />
    </div>
  </two-column-layout>
</template>

<script>
import TwoColumnLayout from '../../components/TwoColumnLayout.vue';
import GroupInfo from '../../components/GroupInfo.vue';
import { mapState, mapMutations } from 'vuex';
export default {
  components: { TwoColumnLayout, GroupInfo },
  computed: {
    ...mapState({ group: 'selectedGroup' }),
  },
  methods: { ...mapMutations(['setGroup']) },
  mounted() {
    this.setGroup(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.setGroup(to.params.id);
    next();
  },
};
</script>

<style>
img.group-banner {
  object-fit: cover;
  height: 55vh;
  width: 100%;
  border-radius: 0;
}
</style>
