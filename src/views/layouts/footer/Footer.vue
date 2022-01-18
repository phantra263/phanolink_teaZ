<template>
  <footer>
    <!-- Highlights of company -->
    <footer-highlight/>

    <!-- contact -->
    <footer-contact/>

    <!-- menu footer bottom -->
    <footer-menu-bottom/>

    <!-- copyright -->
    <div class="copyright container">
      <p>© 2019 - Bản quyền thuộc về Công ty CP Dược Phẩm Phano</p>
      <img src="../../../assets/images/copyright.png" alt="">
    </div>
  </footer>
</template>

<script>
import FooterHighlight from "./FooterHighlight";
import FooterContact from "./FooterContact";
import FooterMenuBottom from "./FooterMenuBottom";

export default {
  name: "Footer",
  components: {FooterMenuBottom, FooterContact, FooterHighlight}
}
</script>

<style lang="scss" scoped>
.copyright {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 15px;
  border-top: 1px solid #E2E3E4;

  p {
    font-size: 10px;
    font-weight: bold;
    color: #595959;
  }
}
</style>
