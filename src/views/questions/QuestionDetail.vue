<template>
  <two-column-layout>
    <div slot="main">
      <h1 class="h3">{{ question.title }}</h1>
      <div class="lead text-justify">
        {{ question.body }}
      </div>
    </div>
    <div slot="sidebar">
      <h6>Similar Questions</h6>
      <div v-for="question in questions" :key="question.id">
        <div class="card py-2 px-3 mb-2">
          <router-link
            class="fw-bold"
            :to="{ name: 'question', params: { id: question.id } }"
            >{{ question.title }}</router-link
          >
        </div>
      </div>
    </div>
  </two-column-layout>
</template>

<script>
import TwoColumnLayout from '../../components/TwoColumnLayout.vue';
import { mapState, mapMutations } from 'vuex';
export default {
  components: { TwoColumnLayout },
  computed: {
    ...mapState({ question: 'selectedQuestion', questions: 'questions' }),
  },
  methods: { ...mapMutations(['setQuestion']) },
  mounted() {
    this.setQuestion(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.setQuestion(to.params.id);
    next();
  },
};
</script>

<style></style>
