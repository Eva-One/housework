<template>
  <div>
    <h3>Bob</h3>
    <ul>
      <li><router-link to="/contacts/bob/tel">Tel</router-link></li>
      <li><router-link to="/contacts/bob/fax">Fax</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>