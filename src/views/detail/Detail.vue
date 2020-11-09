<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @scrollTo="scrollTo" ref="navbar">
    </detail-nav-bar>
    <scroll
      :probe-type="3"
      :pull-up-load="false"
      class="content"
      ref="scroll"
      @scroll="changeNavBarCurrent"
    >
      <!-- 属性:topImages 传入值:top-images -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @detailImgLoad="refreshImg"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="param"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="goodList"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopShowValue"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      detailParamInfoHeight: [0, 1000, 2000, 3000],
      refresh: null,
      paramHeight: null,
      currentIndex: 0,
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });
  },
  destroyed() {
    /* this.$bus.$off("ItemImageLoad", this.itemImgListener); */
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500);
    this.paramHeight = debounce(this.getParamHeight, 500);

    let newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("detailItemImageLoad", () => {
      newRefresh();
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    refreshImg() {
      this.refresh();
      this.paramHeight();
    },
    getParamHeight() {
      this.detailParamInfoHeight = [];

      this.detailParamInfoHeight.push(0);
      this.detailParamInfoHeight.push(this.$refs.param.$el.offsetTop);
      this.detailParamInfoHeight.push(this.$refs.comment.$el.offsetTop);
      this.detailParamInfoHeight.push(this.$refs.goodList.$el.offsetTop);
      this.detailParamInfoHeight.push(Number.MAX_VALUE);
    },
    scrollTo() {
      setTimeout(() => {
        const current = this.$refs.navbar.currentIndex;
        if (current === 0) {
          this.$refs.scroll.scrollTo(0, 0, 300);
        } else if (current === 1) {
          this.$refs.scroll.scrollTo(0, -this.detailParamInfoHeight[1], 300);
        } else if (current === 2) {
          this.$refs.scroll.scrollTo(0, -this.detailParamInfoHeight[2], 300);
        } else if (current === 3) {
          this.$refs.scroll.scrollTo(0, -this.detailParamInfoHeight[3], 300);
        }
      });
    },
    changeNavBarCurrent(position) {
      /* if (-position.y <= this.detailParamInfoHeight[1] - 46) {
        this.$refs.navbar.currentIndex = 0;
      } else if (
        -position.y >= this.detailParamInfoHeight[1] - 46 &&
        -position.y < this.detailParamInfoHeight[2] - 46
      ) {
        this.$refs.navbar.currentIndex = 1;
      } else if (
        -position.y >= this.detailParamInfoHeight[2] - 46 &&
        -position.y < this.detailParamInfoHeight[3] - 46
      ) {
        this.$refs.navbar.currentIndex = 2;
      } else if (-position.y >= this.detailParamInfoHeight[3] - 46) {
        this.$refs.navbar.currentIndex = 3;
      } */
      const positionY = -position.y;
      let length = this.detailParamInfoHeight.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          positionY >= this.detailParamInfoHeight[i] &&
          positionY < this.detailParamInfoHeight[i + 1]
        ) {
          this.currentIndex = i;
          //console.log(this.currentIndex);
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      this.backTopShowValue = positionY > 700;
    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车中(1.Promise 2.mapActions)
      //this.$store.commit("addCart", product);
      //通过映射的方法
      this.addCart(product).then((res) => {
        // console.log(res);
        this.$toast.show(res, 1500);
      });

      // this.$store.dispatch("addCart", product).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>