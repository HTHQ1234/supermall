import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    };
  },
  /* mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh
      console.log('我是混入中的内容')
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    
  } */
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backTopShowValue:false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}