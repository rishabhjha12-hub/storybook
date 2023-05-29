<template>
  <div class="relative">
    <select
      v-model="selectedOption"
      class="block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    >
      <option value="" disabled>Select an option</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: "",
    };
  },
};
</script>

<style>
/* Add any additional styling for the component here */
</style>
