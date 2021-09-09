<template>
  <auth>
    <h1 class="h2">Login</h1>
    <b-form>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-pwd">
        <b-form-input
          id="input-pwd"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </auth>
</template>

<script>
import Auth from './Auth.vue';
export default {
  components: { Auth },
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: [],
      },
    };
  },
  methods: {},
};
</script>
