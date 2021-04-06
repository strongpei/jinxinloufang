<template>
  <div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  const p = new Promise((resolve,reject)=>{
    const time = Date.now()
    if (time %2 ==0) {
      resolve('这是一个偶数')
    } else {
      reject('这是一个奇数')
    }
  })
  p.then(
    value=>{
      console.log('这是成功的回调',value)
    },
    reason=>{
      console.log('这是一个失败的回调',reason)
    }
  )
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
