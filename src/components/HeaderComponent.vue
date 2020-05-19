<template>
    <header id="header">
            <div class="center">
                <!-- Logo-->
                <div id="logo">
                    <img src="../assets/images/varopago.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>VaroPago </strong> <br> 
                        Hackathon
                    </span>
                </div>
                 <!-- Menu-->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="../Home">Resumen </router-link>
                         </li>
                         <li>
                              <router-link to="../Register">Actividad </router-link>
                         </li>
                         <li>
                             <router-link to="../Login">Niveles </router-link>
                         </li>
                         <li>
                              <router-link to="#">Cuentas </router-link>
                         </li>
                         <li>
                              <a href="../Home/Alfonso">Transacciones  </a>
                         </li>
                         <li>
                             <router-link :to="{name:'HomeName',params:{id:'SoyelID'}}">Mi perfil </router-link>
                         </li>
                         <li>
                             <router-link to="../Login">Cerrar sesión </router-link>
                         </li>
                    </ul>
                </nav>
                <!--Limpiar los Floats-->
                    <div class="clearfix"></div>
                   
            </div>
        </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null
    };
  },
}
</script>