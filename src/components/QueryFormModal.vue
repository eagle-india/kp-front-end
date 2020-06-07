<template>
  <b-modal id="query-modal" hide-footer>
    <template v-slot:modal-title>
      Enter your query
    </template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="form.query"
        placeholder="Enter your Query..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-button type="submit" class="mt-3 mr-5" variant="primary"
        >Submit</b-button
      >

      <b-button type="reset" class="mt-3" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface TestDriveFormInterface {
  email: string;
  name: string;
  query: string;
}

@Component
export default class QueryModal extends Vue {
  form: TestDriveFormInterface = {
    email: "",
    name: "",
    query: "",
  };

  show = true;

  onSubmit(evt: Event) {
    evt.preventDefault();
    alert(JSON.stringify(this.form));
  }

  onReset(evt: Event) {
    evt.preventDefault();
    // Reset our form values
    this.form.email = "";
    this.form.name = "";
    this.form.query = "";
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }
}
</script>
