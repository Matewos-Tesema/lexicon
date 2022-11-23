<template>
  <div class="container">
    <Navbar />
    <Hero />
    <Footer />
  </div>  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Footer,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family:Arial, Helvetica, sans-serif;
  height: 100%;
  background-color: antiquewhite;
 }
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}
 header {
  background-image: url('../src/assets/hero.jpg');
  background-size: cover;

 }
 h1 {
  padding-top: 15rem;
  color: rgb(240, 162, 240);
  font-size: 1.5rem;
  font-weight:bold;
 }
ul {
  display: inline-flex;
  list-style: none;
  font-size: larger;
  margin: 2rem;
}
ul a {
  text-decoration: none;
  color: #fcf9f9;
  background-color: #0b2f2f;
  padding: 5px;
  border-radius: 5px;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
button {
  font-size: large;
  font-weight: bold;
  background-color: #59e3e3;
  padding:10px;
  margin-top: 3rem;
  margin-bottom: 15rem;
  border-radius: 5px;
  
}

</style>
