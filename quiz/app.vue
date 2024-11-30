<template>
  <div id="app">
    <span class="title">ToDoApp</span>
    <div class="container">
      <TodoList/>
    </div>
  </div>
</template>

<script lang="ts">


import {TodoList} from "#components";

export default {
  components: {
    TodoList
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;500;600;700&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: max-content;
  height: 100vh;

  background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%) repeat;

  margin: 0;
  padding: 0;
  width: 100%;
}

.title {
  position: absolute;
  right: 90px;

  width: 322px;
  height: 139px;

  font-family: 'Inknut Antiqua', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 165px;

  color: #FFFFFF;
}

.container {
  margin-top: 100px;
}

</style>