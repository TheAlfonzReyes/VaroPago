<template>
  <div>
    <HeaderComponent></HeaderComponent>

    <Perfil></Perfil>

    <Slider></Slider>

    <Footer></Footer>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import Perfil from "../components/Perfil.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeDashBoard",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null
    };
  },

  components: {
    HeaderComponent,
    Perfil,
    Slider,
    Footer
  }
};
</script>