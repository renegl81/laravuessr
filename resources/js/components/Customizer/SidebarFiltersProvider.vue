<template>
    <div class="sidebar-filter" v-if="isDefaultLayout()">
    <h5 class="text-sm-center mb-4">{{$t('message.sidebarFilters')}}</h5>
      <v-list>
        <v-list-item :ripple="false" v-for="sidebarFilter in sidebarFilters" :key="sidebarFilter.id"  @click="emitSidebarFilters(sidebarFilter)"
          :class="{'active-theme': sidebarSelectedFilter.id === sidebarFilter.id}">
          <span :class="sidebarFilter.class"></span>
        </v-list-item>
      </v-list>
    </div>
</template>

<script>
import { getCurrentAppLayout } from "Helpers/helpers";
import { mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters({
        sidebarFilters: 'settings/sidebarFilters',
        sidebarSelectedFilter: 'settings/sidebarSelectedFilter',
      }),
   },
   methods: {
      // color filter handler
    emitSidebarFilters(value) {
      this.$store.dispatch("settings/changeSidebarFilter", value);
    },
      // function which return app current layout
    isDefaultLayout() {
      const layout  = getCurrentAppLayout(this.$router);
      if (layout === "boxed" || layout === "horizontal" || layout === "boxed-v2") {
        return false;
      } else {
        return true;
      }
    }
   }   
}
</script>
