<template>
    <div>
         <van-nav-bar
        title="问答红包"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        origin-price="10.00"
        />
    </div>
</template>

<script setup>
    const onClickLeft = () => history.back();

</script>

<style>

</style>