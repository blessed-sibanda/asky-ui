<template>
  <div class="row">
    <div class="col-md-8">
      <h1 class="h5 text-uppercase">Groups</h1>
      <div v-for="group in groups" :key="group.id">
        <group :group="group" />
      </div>
    </div>
    <div class="col-md-4">
      <section style="z-index: 1;" class="sticky-top">
        <h6>Popular Questions</h6>
        <div v-for="question in questions" :key="question.id">
          <div class="card mb-2 px-3 py-2">
            <router-link
              :to="{ name: 'questionDetail', params: { id: question.id } }"
            >
              <span class="fw-light">{{ question.title }}</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Group from '../../components/Group.vue';
import { mapState } from 'vuex';
export default {
  components: { Group },
  computed: { ...mapState(['questions', 'groups']) },
};
</script>
