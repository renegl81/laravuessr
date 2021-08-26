// Sidebar Routers
export const menus = {
    'message.managementUpper': [
        {
            action: 'zmdi zmdi-accounts-alt',
            title: 'message.users',
            active: false,
            items: null,
            path: '/users',
            label: 'Old'
        },
        {
            action: 'zmdi zmdi-accounts-alt',
            title: 'message.roles',
            active: false,
            items: null,
            path: '/roles',
            label: 'Old'
        },
        {
            action: 'zmdi zmdi-settings',
            title: 'message.settings',
            active: false,
            items: null,
            path: '/configuration',
            label: 'Old'
        },
        {
            action: 'zmdi zmdi-cloud-upload',
            title: 'message.importModules',
            active: false,
            items: null,
            path: '/import',
            label: 'Old'
        },
    ],
    /*
    'message.geolocation': [
        {
            action: 'zmdi-book',
            title: 'message.deliveries',
            active: false,
            label:'Old',
            items: [
                { title: 'message.deliveriesList', path: '/deliveries',label:'Old'},
                { title: 'message.requestDelibery', path: '/request-delivery',label:'Old'}
            ]
        },
        {
            action: 'zmdi zmdi-cloud-upload',
            title: 'message.packagesTypes',
            active: false,
            items: null,
            path: '/packages-types',
            label: 'Old'
        }
    ],
    */

}
