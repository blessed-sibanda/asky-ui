<template>
  <auth>
    <h1 class="h2">Sign Up</h1>
    <b-form>
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
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

      <b-form-group
        id="input-pwd2"
        label="Password Confirmation:"
        label-for="input-pwd2"
      >
        <b-form-input
          id="input-pwd2"
          type="password"
          placeholder="Re-enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign Up</b-button>
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
