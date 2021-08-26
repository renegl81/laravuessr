<template>
    <div>
        <v-container fluid class="pt-0 grid-list-xl">
            <v-row class="border-rad-sm overflow-hidden">
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                    :title="$t('message.manage')+' '+$t('message.piscinas')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/manage-projects?typeProject=Piscinas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                    :title="$t('message.manage')+' '+$t('message.terrazas')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/manage-projects?typeProject=Terrazas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                    :title="$t('message.manage')+' '+$t('message.kitchens')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/manage-projects?typeProject=Industrial y cocinas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
            </v-row>
            <v-row class="border-rad-sm overflow-hidden">
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                    :title="$t('message.create')+' '+$t('message.piscinas')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/new-project?project=Piscinas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                    :title="$t('message.create')+' '+$t('message.terrazas')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/new-project?project=Terrazas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
                <stats-card-v2
                    colClasses="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                    :title="$t('message.create')+' '+$t('message.kitchens')"
                >
                    <div class="btn-home">
                        <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/new-project?project=Industrial y cocinas'}`}">
                            <v-btn tile color="colorRosagres" class="ma-5 white--text">{{$t('message.access')}}</v-btn>
                        </router-link>
                    </div>
                </stats-card-v2>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { getCurrentAppLayout } from "Helpers/helpers";
    export default {
        name: "home",
        components: {

        },
        data() {
            return {

            };
        },
        methods: {
            getCurrentAppLayoutHandler() {
                return getCurrentAppLayout(this.$router);
            },
        },
    };
</script>
<style>
    .btn-home{
        float: right;
    }
</style>
