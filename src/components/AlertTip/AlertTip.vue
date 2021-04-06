<template>
  <div class="containerWrap">
    <div class="container">
      <div class="container-top">
        <i class="iconfont icon-jinggao"></i>
      </div>
      <div class="TT">{{Alert}}</div>
      <div class="btn" @click="fenfa">确认</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      Alert:String
    },
    methods: {
      fenfa(){
        this.$emit('fenfa')
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .containerWrap
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color black
    z-index 101
    background: rgba(0,0,0,0.5)
    display flex
    justify-content center
    align-items center
    .container
      width 65%
      height 25%
      display flex
      flex-direction column
      border-radius 4%
      align-items center
      background-color #fff
      position relative
      i
        color orange 
        font-size 3rem
      .TT
        margin 10px 0
      .btn 
        position absolute
        left 0
        bottom 0
        width 100%
        height 16%
        text-align center
        background-color green
        line-height 25px
        border-radius 0 0 5% 5%
        font-size 15px
        color #fff
</style>

