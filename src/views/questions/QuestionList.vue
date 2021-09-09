<template>
  <div class="row">
    <div class="col-md-8">
      <h1 class="h5 text-uppercase">Questions</h1>
      <div v-for="question in questions" :key="question.id">
        <question :question="question" />
      </div>
    </div>
    <div class="col-md-4">
      <section style="z-index: 1;" class="sticky-top">
        <h6>Recommended Groups</h6>
        <div v-for="group in groups" :key="group.id">
          <div class="card mb-2 px-3 py-2">
            <router-link to="#">
              <strong>{{ group.name }}</strong>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Question from '../../components/Question.vue';
import { mapState } from 'vuex';
export default {
  components: { Question },
  computed: { ...mapState(['questions', 'groups']) },
  data() {
    return {};
  },
};
</script>

<style></style>
