<template>
  <b-modal id="test-drive-modal" hide-footer>
    <template v-slot:modal-title>
      Book Your Test Drive Today
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

      <b-form-group
        id="input-group-3"
        label="Test Drive Date:"
        label-for="input-3"
      >
        <!-- <label for="example-datepicker">Choose a date</label> -->
        <b-form-datepicker
          id="example-datepicker"
          v-model="value"
          class="mb-2"
        ></b-form-datepicker>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="form.address"
        placeholder="Enter your Address..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="true"
            >I accept the terms and conditions</b-form-checkbox
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" class="mr-5" variant="primary">Book</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface TestDriveFormInterface {
  email: string;
  name: string;
  date: Date;
  address: string;
  checked: any;
}

@Component
export default class TestDriveFormModal extends Vue {
  form: TestDriveFormInterface = {
    email: "",
    name: "",
    date: new Date(),
    address: "",
    checked: [],
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
    this.form.date = new Date();
    this.form.address = "";
    this.form.checked = [];
    // Trick to reset/clear native browser form validation state
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }
}
</script>
