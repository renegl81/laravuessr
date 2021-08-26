<template>
   <div class="header-filter">
      <h5 class="text-sm-center mb-4">{{$t('message.headerFilters')}}</h5>
      <v-list>
         <v-list-item :ripple="false" v-for="headerFilter in headerFilters" :key="headerFilter.id" @click="changeHeaderFilter(headerFilter)"
            :class="{'active-theme': activeHeaderFilter.id === headerFilter.id}">
            <span :class="headerFilter.class"></span>
         </v-list-item>
      </v-list>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
   computed:{
      ...mapGetters({
        headerFilters: 'settings/headerFilters',
        activeHeaderFilter: 'settings/activeHeaderFilter',
      }),
   },
   methods: {
      changeHeaderFilter(filter) {
         this.$store.dispatch('settings/changeHeaderFilter', filter);
      }
   }
}
</script>