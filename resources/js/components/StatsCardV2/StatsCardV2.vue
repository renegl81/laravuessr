<template>
   <v-col :class="colClasses">
      <div class="app-card" :class="customClasses">
         <v-card-text>
            <div class="layout justify-space-between pa-3">
               <div class="align-item-start">
                  <h3 class="fw-bold mb-1">{{title}}</h3>
               </div>
               <div class="align-item-end">
                  <h3 class="dash-icon"><i :class="icon"></i></h3>
               </div>
            </div>
         </v-card-text>
        <slot></slot>
      </div>
   </v-col>
</template>
<script>
export default {
  props: ["title", "colClasses", "customClasses", "icon"],
};
</script>
