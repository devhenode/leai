<!-- @format -->

<template>
  <button :class="computedClasses" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Button",
    },
    buttonClass: {
      type: String,
      default: "btn-ring",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
  computed: {
    computedClasses() {
      return [
        "inline-block",
        "border-2",
        "rounded-lg",
        "py-2",
        "px-4",
        "text-white",
        "hover:bg-pink-600",
        "focus:outline-none",
        "transition",
        "duration-300",
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
      ];
    },
  },
};
</script>

<style scoped>
/* You can define additional styles here if needed */
</style>
