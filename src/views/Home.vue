<template>
    <div class='home'>
      <van-nav-bar
        title="标题"
      />
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field v-model="moneyQuota" name="moneyQuota"  type="number" label="红包额度" placeholder="请输入红包额度"/>
                <van-field v-model="moneyCount" name="moneyCount" type="number" label="红包数量" placeholder="请输入红包数量" />
                <van-field
                    v-model="moneyQst"
                    rows="3"
                    autosize
                    name="moneyQst"
                    label="竞猜问题"
                    type="textarea"
                    placeholder="请输入你的竞猜题目"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <!-- <van-button round block type="primary" native-type="submit">
                    提交
                </van-button> -->
            </div>
        <div class="home-bottom">
            <van-button square color="#cf273c" native-type="submit" icon="balance-list" type="primary">发布红包</van-button>

            <van-button square color="#d55f6f" icon="share" type="primary">分享红包</van-button>
            <!-- <span class="home-bottomstepone">填写</span>
         <span class="home-bottomsteptwo"></span> -->
        </div>
        </van-form>
    </div>
</template>
<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
import "vant/lib/index.css";
// import { Button, Step, Steps, Form, Field, CellGroup, NavBar } from "vant";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { createApp } from 'vue';


@Options({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {
    setup() {
          const moneyQuota = ref('');
          const moneyCount = ref('');
          const moneyQst = ref('');
          const onSubmit = (values) => {
            console.log('submit', values);
          };
          return {
            moneyQuota,
            moneyCount,
            moneyQst,
            onSubmit
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