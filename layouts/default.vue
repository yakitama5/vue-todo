<template>
  <div>
    <Header></Header>
    <Nuxt class="main-contents" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'MyDefault',
};
</script>

<style>
body {
  background: #ffc3b9;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffc3b9;
  z-index: 1;
  padding: 15px 95px 0px 95px;
}

footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 0px 95px 15px 95px;
  padding-bottom: 15px;
  z-index: 1;
  background: #ffc3b9;
}

.main-contents {
  width: 100%;
  padding: 130px 95px 130px 95px;
  overflow: auto;
}
</style>
