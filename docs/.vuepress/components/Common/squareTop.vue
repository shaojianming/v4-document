<template>
  <div>
    <div class="line line1">
      <div class="square  white"></div>
      <div class="square blue"></div>
      <div class="square white"></div>
      <div class="square sky"></div>
      <div class="square white"></div>
    </div>
    <div class="line line2">
      <div class="square sky"></div>
      <div class="square white"></div>
      <div class="square yellow"></div>
      <div class="square white"></div>
      <div class="square depBlue"></div>
    </div>
    <div class="line line3">
      <div class="square white"></div>
      <div class="square blue"></div>
      <div class="square white"></div>
      <div class="square white"></div>
      <div class="square white"></div>
    </div>
    <div class="line line4">
      <div class="square white"></div>
      <div class="square white"></div>
      <div class="square sky"></div>
      <div class="square white"></div>
      <div class="square white"></div>
    </div>
    <div class="line line5">
      <div class="square blue"></div>
      <div class="square white"></div>
      <div class="square white"></div>
      <div class="square white"></div>
      <div class="square white"></div>
    </div>
  </div>
</template>
<style>
.square {
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.white {
  background: none;
}

.blue {
  background: blue;
}

.yellow {
  background: yellow;
}

.sky {
  background: #409EFF;
}

.depBlue {
  background: rgb(27, 53, 145);
}

.line{
  width: 100%;
  height: 60px;
}

.line > div {
  display: inline-block;
}

</style>