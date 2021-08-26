<template>
	<div class="horizontal-menu">
		<ul class="list-unstyled nav pl-0">
			<li class="nav-item" v-for="(category, key) in menu" :key="key">
        <template>
          <a href="javascript:void(0);" class="nav-link" >
            <span class="menu-title">{{$t(key)}}</span>
          </a>
          <ul class="sub-menu list-unstyled">
            <template v-for="item in category">
              <app-menu-item :menu="item"	:key="item.title"></app-menu-item>
            </template>
          </ul>
        </template>
      </li>
    </ul>
		<div class="ham-menu-sm d-none">
			<v-btn text icon class="my-1 mx-3" @click="toggleHorizontalLayoutSidebar">
				<v-icon class="grey--text">menu</v-icon>
			</v-btn>
		</div>
    <div>
      <div class="search-form">
        <v-text-field text solo prepend-icon="search" :placeholder="$t('message.search')" class="search-bar"></v-text-field>
        <div class="mobile-search d-none">
          <v-btn text small icon class="mobile-search-btn my-1 mx-3" @click="toggleSearchForm">
            <v-icon class="grey--text font-md">search</v-icon>
          </v-btn>
        </div>
      </div>
      <mobile-search-form></mobile-search-form>
    </div>
  </div>
</template>

<script>
import AppMenuItem from "./AppMenuItem";
import { mapGetters } from "vuex";
import MobileSearchForm from "../Header/MobileSearchForm";

export default {
  data() {
    return {
    }
  },
  components: {
    AppMenuItem,
     MobileSearchForm
  },
  mounted() {
    const mainMenu = document.getElementsByClassName("nav-item");

    for (let i = 0; i < mainMenu.length; i++) {
      mainMenu[i].onclick = function() {
        for (let j = 0; j < mainMenu.length; j++) {
          if (mainMenu[j].classList.contains("nav-item-active")) {
            mainMenu[j].classList.remove("nav-item-active");
          }
        }
        this.classList.toggle("nav-item-active");
      };
    }
  },
  computed: {
    ...mapGetters({
      menu: 'sidebar/menu',
    })
  },
  methods: {
    toggleHorizontalLayoutSidebar() {
      this.$store.dispatch("settings/toggleHorizontalLayoutSidebar", true);
    },
    toggleSearchForm() {
      this.$store.dispatch('toggleSearchForm');
    }
  },
};
</script>
<style>
.horizontal-menu > ul > li > a {
    color: #000000 !important;
    font-weight: bold;
}
.horizontal-menu > ul > li > a {
	padding: 0.9375rem 0.9375rem 0.9375rem 0.9375rem !important;
}
</style>
