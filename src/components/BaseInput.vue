<template>
      <div>
        <label v-if="label">{{ label }}</label>
         <input :value="value" v-bind="$attrs" v-on="listeners">
      </div>
    </template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  inheritAttrs: false,

})
export default class BaseInput extends Vue {
  @Prop() label!: string;

  @Prop() value: string|number = '';

  get listeners() {
    return {
      ...this.$listeners,
      input: this.updateValue,
    };
  }

  updateValue(event: any) {
    this.$emit('input', event.target.value);
  }
}
</script>
