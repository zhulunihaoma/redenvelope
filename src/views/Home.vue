<template>
    <div class='home'>
      <van-nav-bar
        title="编辑问答红包"
      />
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="moneyQuota" name="moneyQuota"  label="红包额度" placeholder="请输入红包额度"/>
                <van-field v-model="moneyCount" name="moneyCount" label="红包数量" placeholder="请输入红包数量" />
                <van-field
                    v-model="moneyQst"
                    rows="3"
                    autosize
                    name="moneyQst"
                    label="竞猜问题"
                    type="textarea"
                    placeholder="请输入你的竞猜题目"
                />
            <van-uploader v-model="fileList" multiple />
            </van-cell-group>
            <div style="margin: 16px;">
                <!-- <van-button round block type="primary" native-type="submit">
                    提交
                </van-button> -->
            </div>
        <div class="home-bottom">
            <van-button square  color="#cf273c" icon="balance-list" type="primary" native-type="submit">发布红包</van-button>

            <van-button square @click="goPublish" color="#d55f6f" icon="share" type="primary">分享红包</van-button>
            <!-- <span class="home-bottomstepone">填写</span>
         <span class="home-bottomsteptwo"></span> -->
        </div>
        </van-form>
        <van-share-sheet
            v-model:show="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
        />
    </div>
</template>
<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
import "vant/lib/index.css";
import { useRouter } from 'vue-router'

// import { Button, Step, Steps, Form, Field, CellGroup, NavBar } from "vant";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { createApp } from 'vue';


// @Options({
//     components: {
//         HelloWorld,
//     },
// })
export default {
    setup() {
          const moneyQuota = ref('');
          const moneyCount = ref('');
          const moneyQst = ref('');
          const value = ref('');
          const showShare = ref(false);
          const options = [
            { name: '微信', icon: 'wechat' },
            { name: '微博', icon: 'weibo' },
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
            ];
        const fileList = ref([
            { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
            // Uploader 根据文件后缀来判断是否为图片文件
            ]);
          const onSubmit = (values) => {
                showShare.value = true;
                console.log('submit', values);
          };
          const router = useRouter();
         const goPublish = ()=>{
              router.push({
                  name:'Publish'
              })
         };
          return {
            moneyQuota,
            moneyCount,
            moneyQst,
            value,
            onSubmit,
            onSelect:onSubmit,
            options,
            showShare,
            goPublish,
            fileList
          };
    }
}
</script>
<style lang="scss">
.home {
    &-bottom {
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 50px;
    }
}
</style>