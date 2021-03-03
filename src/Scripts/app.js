import ModalBootstrap from "@/components/ModalBootstrap.vue";
import Vue2Filters from 'vue2-filters'

export default {
  name: "App",
  components: {
    ModalBootstrap,
  },
  data() {
    return {
      amount: "",
      mercuries: "0",
      msg:"test message",
      freddieMsg:'Por tí seré gaviota de tu bella mar',
      showModalBootstrap: true,
     
    };
  },
  filters: {
    caballes(cabs) {
      return (cabs * 1.23).toFixed(2);
    },
    mercs(mcs) {
      return (mcs * 1).toFixed(2);
    },
  },

  methods: {
    toggleModalBootstrap() {
      this.showModalBootstrap = !this.showModalBootstrap;
    },
    updateValue(event) {
      let value = event.target.value;
      console.log(value, this.amount);
      if (String(value).length <= 8) {
        this.amount = value;
        this.mercuries = value;
      }

      this.$forceUpdate();
    },
  },
  mixins: [Vue2Filters.mixin],
};
