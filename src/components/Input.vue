<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      v-model="inputValue"
      :class="[
        'shadowcn-input',
        {
          'shadowcn-input--error': hasError,
        },
        'rounded-md',
        'border-gray-300',
        'focus:ring-2',
        'focus:ring-blue-300',
        'focus:border-blue-300',
        'block',
        'w-full',
        'px-4',
        'py-2',
      ]"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      :aria-invalid="hasError"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="hasError" class="text-red-500 text-sm mt-1">{{
      errorMessage
    }}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    ariaLabel: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  computed: {
    hasError() {
      return this.errorMessage !== "";
    },
  },
};
</script>

<style scoped>
.shadowcn-input {
  border: 1px solid #e2e8f0;
  background-color: #edf2f7;
}

.shadowcn-input--error {
  border-color: #e53e3e;
  background-color: #fef2f2;
}
</style>
