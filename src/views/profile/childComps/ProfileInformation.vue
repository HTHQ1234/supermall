<template>
  <div>
    <div class="people">
      <img src="~assets/img/profile/yonhu.svg" alt="" class="left" />
      <div class="center">
        <span class="login">登录/注册</span>
        <div class="phone">
          <img src="~assets/img/profile/shouji.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="right">></div>
    </div>
    <div class="money">
      <div class="moneyleft">
        <span>0.00</span>元
        <p>我的余额</p>
      </div>
      <div class="moneycenter">
        <span>0</span>个
        <p>我的优惠</p>
      </div>
      <div class="moneyright">
        <span>0</span>分
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileInformation",
};
</script>
<style scoped>
.people {
  width: 100%;
  height: 90px;
  background-color: var(--color-tint);
  display: flex;
  align-items: center;
  font-size: 16px;
}
.money {
  width: 100%;
  height: 105px;
  display: flex;
  text-align: center;
  border-bottom: 15px #eeeeee solid;
  font-size: 16px;
}
.left {
  width: 64px;
  height: 64px;
  margin-left: 18px;
  margin-right: 15px;
}
.login {
  display: block;
  margin-bottom: 5px;
}
.phone img {
  height: 19px;
  width: 17px;
}
.phone {
  display: flex;
}
.right {
  color: #fff;
  font-size: 30px;
  width: 20px;
  margin-right: 10px;
}

.center {
  flex: 1;
  color: #fff;
}

.money span {
  font-size: 25px;
  color: #fa7243;
}
.moneyleft {
  flex: 1;
  padding-top: 20px;
  border-right: 1px #eeeeee solid;
}
.moneycenter {
  flex: 1;
  padding-top: 20px;
  border-right: 1px #eeeeee solid;
}
.moneyright {
  flex: 1;
  padding-top: 20px;
}
</style>