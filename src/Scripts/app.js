import ModalBootstrap from "@/components/ModalBootstrap.vue";

export default {
  name: "App",
  components: {
    ModalBootstrap
  },
  data() {
    return {
      title: "Currency Converter",
      subtitle: "EUR to USD",
      alternativeTitle: "You have closed the modal",
      input: "",
      input2: "",
      showModalBootstrap: true
    }
  },
  methods: {
    toggleModalBootstrap() {
      this.showModalBootstrap = !this.showModalBootstrap
    }
  },
};