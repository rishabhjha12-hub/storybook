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
        {{ option.value }}
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
      default: () => [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
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
