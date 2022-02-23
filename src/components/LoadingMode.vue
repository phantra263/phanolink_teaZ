<template>
  <div class="wrap-loading">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingMode"
}
</script>

<style lang="scss" scoped>
.wrap-loading {
  height: calc(100vh - 45px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, silver, teal);
  margin: auto;
  position: absolute;
  width: 100%;
  z-index: 10;
  opacity: .9;
  .loader {
    width: 16em;
    height: 8em;
    position: absolute;
    top: 30%;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: inherit;
      height: 0.2em;
      background-color: rgba(217, 217, 217, 1);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      width: 50%;
      height: inherit;
      border: 0.2em solid rgba(217, 217, 217, 1);
      border-radius: 50%;
      left: 25%;
    }
    span {
      position: absolute;
      width: 5%;
      height: 10%;
      background-color: white;
      border-radius: 50%;
      bottom: 0.2em;
      left: -5%;
      animation: 2s linear infinite;
      transform-origin: 50% -3em;
      animation-name: run, rotating;
      &:nth-child(2) {
        animation-delay: 0.075s;
      }
      &:nth-child(3) {
        animation-delay: 0.15s;
      }
    }
  }
}

@keyframes run {
  0% {left: -5%;}
  10%, 60% {left: calc((100% - 5%) / 2);}
  70%, 100% {left: 100%;}
}

@keyframes rotating {
  0%, 10% {transform: rotate(0deg);}
  60%, 100% {transform: rotate(-1turn);}
}

</style>
