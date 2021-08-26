<template>
   <div class="app-footer d-custom-flex align-items-center">     
      <a href="https://lars.net.co">
         <h6 class="mb-0" style="color: #f7f7f7 !important">{{$t('message.developedby')}} {{copyrightText}} {{$t('message.AllRightsReserved')}}.</h6>
      </a>
   </div>
</template>

<script>
import AppConfig from "Constants/AppConfig";

export default {
  data() {
    return {
      copyrightText: AppConfig.copyrightText
    };
  },
};
</script>
