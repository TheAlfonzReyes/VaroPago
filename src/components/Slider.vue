<template>
  <div id="slider" class="slider-big">
    <div id="sliderLeft">
      <h1>Informacion Personal</h1> 
      <div class="bordesito"></div>
      <h2>Nombre legal completo: {{id_desde_url}} </h2>

      <h1>Nombre de usuario</h1>
      <h2>Fecha de nacimiento</h2>
      <h1>******************</h1>
      <h1>Direccion personal</h1>
      <div class="bordesito"></div>

      <h2>Pais</h2>
      <h1>******************</h1>
      <h2>Direccion</h2>
      <h1>******************</h1>
       
       
    </div>

    <div id="sliderRight">
      <h1> <br></h1>
      <div class="bordesito"></div>
      <h2>Apellidos legales completo</h2>

      <h1>Apellido de usuario</h1>
      <h2>Telefono</h2>
      <h1>******************</h1>
      <h1><br></h1>
      <div class="bordesito"></div>

      <h2>Ciudad</h2>
      <h1>******************</h1>
      <h2>Codigo Postal</h2>
      <h1>******************</h1>
      
    
    </div>

    
  </div>

</template>

<script>
export default {
  name: "Slider",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null
    };
  },
};
</script>