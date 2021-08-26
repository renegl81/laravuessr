export default {
    setActiveMenuGroupHandler(state, router) {
        let fullPath = '';
        if(router.pathURL){
            fullPath = router.pathURL;
        }else{
            fullPath = router.history.current.fullPath;
        }
        let path = fullPath.split('/');
        let matchedPath = '/' + path[2] + '/' + path[3];
        for (const category in state.menus) {
            for(const menuGroup in state.menus[category]) {
                if(state.menus[category][menuGroup].items !== null) {
                    for(const matched in state.menus[category][menuGroup].items){
                        if(state.menus[category][menuGroup].items[matched].path === matchedPath || state.menus[category][menuGroup].items[matched].path == fullPath ){
                           state.menus[category][menuGroup].active = true;
                        }
                    }
                }
            }
        }
    },

    setSidebarMenu(state, data){
        state.menu = data;
    }
};
