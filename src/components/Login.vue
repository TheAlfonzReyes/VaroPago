<template>
  <header id="headerLogin">
    <div class="centerLogin">
      <!-- Logo-->
      <div id="logoLogin">
        <img src="../assets/images/varopago.png" class="app-logo" alt="Logotipo" />
        
        <span id="brand">
          <strong>VaroPago</strong>
          <br />Hackathon
        </span>
      </div>
      <!-- Menu-->
      <div id="menuLogin">
        <h1>Bienvenido</h1>
        <h4>
          ¿Aun no tienes cuenta?
          <a href="Register">Registrate</a>
        </h4>
      </div>

        
      <form class="mid-formLogin">
           
        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Tu direccion de email"  class="form-groupLogin"/>
        <br />
        <br />
           
         
        <label for="pwd"></label>
        <input type="password" id="pwd" name="pwd" minlength="8"  placeholder="Tu contraseña"  class="form-groupLogin"/>
        <br />
        <br />
         
         <div > 
             <input type="submit" value="Ingresar"  id="EnviarLogin"/>
             
         </div>
        
      </form>
        
    </div>
  </header>
</template>



<script>
export default {
  name: "Login"
};
</script>