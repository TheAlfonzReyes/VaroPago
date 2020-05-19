<template>
  <header id="headerRegister">
    <div id="SubHeaderRegister">
      <div class="centerRegister">
        <!-- Logo-->
        <div id="logoRegister">
          <img src="../assets/images/varopago.png" class="app-logo" alt="Logotipo" />

          <span id="brand">
            <strong>VaroPago</strong>
            <br />Hackathon
          </span>
        </div>
        <!-- Menu-->

        <div id="menuRegister">
          <h1>Bienvenido</h1>
          <h4>
            ¿Ya tienes cuenta?
            <a href="Home">Ingresa</a>
          </h4>
        </div>

        <div id="menuRegister">
          <h5>Pais de residencia</h5>
        </div>

        <form class="mid-formRegister" @submit.prevent="mostrarUsuario" >
          <label for="Pais"></label>

          <select class="form-groupRegister" type="text" id="Pais" name="Pais" v-model="user.Pais" >
            <option value="México">México</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Colombia">Colombia</option>
            <option value="Canada">Canada</option>
          </select>

          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Tu direccion de email"
            class="form-groupRegister"
          />

          <label for="Nombre"></label>
          <!-- DEBERIA SER type="text" -->
          <input
            class="form-groupRegister"
            type="name"
            id="Nombre"
            name="Nombre"
            v-model="user.Nombre"
            placeholder="Nombre"
          />
          <br />
          <br />

          <label for="pwd"></label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            v-model="user.pwd"
            minlength="8"
            placeholder="Tu contraseña"
            class="form-groupRegister"
          />

          <label for="pwd"></label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            minlength="8"
            placeholder="Confirmar Contraseña"
            class="form-groupRegister"
          />

          <div v-if="user.Pais && user.Nombre && user.email && user.pwd " >
            <input type="submit" value="Ingresar" id="EnviarRegister" />
          </div>
        </form>
      </div>
    </div>
  </header>
</template>



<script>
export default {
  name: "Register",

  data() {
    return {
      user: {
        Pais: "",
        email: "",
        Nombre: "",
        pwd: "",


        errors: [],
        
      }
    }
  },

  methods:{

    mostrarUsuario(){
      console.log(this.user);
    },


  /* Revisar el validador de contraseñas, TEST, aun no funciona*/ 
    checkForm: function (e){
      if (this.pwd && this. pwd){
        return true;
      }
      this.error = [];

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.age) {
        this.errors.push('La edad es obligatoria.');
      }

      e.preventDefault();
    }

  }   /* Cierre de Methods*/ 

};   /* Cierre del export*/ 
</script>