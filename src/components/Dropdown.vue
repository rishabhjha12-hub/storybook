<template>
  <div class="relative">
    <input
      v-model="searchTerm"
      type="text"
      class="border border-black-200 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Select..."
      @click="openDropdown"
    />
    <div
      v-if="dropdownOpen"
      class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
    >
      <ul class="py-1">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          {{ option.value }}
        </li>
      </ul>
    </div>
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
      searchTerm: "",
      dropdownOpen: false,
    };
  },
  computed: {
    filteredOptions() {
      if (this.searchTerm) {
        return this.options.filter((option) =>
          option.value.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.options;
      }
    },
  },
  methods: {
    openDropdown() {
      this.dropdownOpen = true;
    },
    selectOption(option) {
      this.selectedOption = option.value;
      this.searchTerm = option.value;
      this.dropdownOpen = false;
    },
  },
};
</script>

<style>
/* Add any additional styling for the component here */
</style>
