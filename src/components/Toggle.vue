<template>
  <button
    :class="[
      'rounded-full w-12 h-6 focus:outline-none transition-colors',
      { 'bg-gray-300': !isActive, 'bg-green-500': isActive }
    ]"
    :style="{ backgroundColor: activeColor }"
    @click="toggle"
    :aria-pressed="isActive.toString()"
    role="switch"
  >
    <span
      :class="[
        'rounded-full block w-6 h-6 transform transition-transform',
        { 'translate-x-6': isActive }
      ]"
      :style="{ backgroundColor: activeButtonColor }"
    ></span>
  </button>
</template>

<script>
export default {
  props: {
    bgButtonColor: {
      type: String,
      default: 'black',
    },
    bgcolor: {
      type: String,
      default: 'grey',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    activeButtonColor() {
      return this.bgButtonColor;
    },
    activeColor() {
      return this.bgcolor;
    },
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
