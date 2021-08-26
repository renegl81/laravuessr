import HorizontalLayout from 'Container/HorizontalLayout'

// dashboard components
const Dashboard = () => import('../views/template/crm/Dashboard');
const Crypto = () => import('../views/template/crypto/Crypto');
const Ecommerce = () => import('../views/template/dashboard/Ecommerce');
const WebAnalytics = () => import('../views/template/dashboard/WebAnalytics');
const Magazine = () => import('../views/template/dashboard/Magazine');
const News = () => import('../views/template/dashboard/News');
const Agency = () => import('../views/template/dashboard/Agency');
const Saas = () => import('../views/template/dashboard/Saas');
// Crypto components
const MarketCap = () => import('../views/template/crypto/MarketCap');
const Wallet = () => import('../views/template/crypto/Wallet');
const Trade = () => import('../views/template/crypto/Trade');
// CRM components
const Projects = () => import('../views/template/crm/Projects');
const ProjectDetails = () => import('../views/template/crm/ProjectDetails');
const Clients = () => import('../views/template/crm/Clients');
const Reports = () => import('../views/template/crm/Reports');
//courses components
const Courses = () => import('../views/template/courses/Courses');
const CourseList = () => import('../views/template/courses/CourseList');
const CoursesDetail = () => import('../views/template/courses/CoursesDetail');
const SignIn = () => import('../views/template/courses/SignIn');
const Payment = () => import('../views/template/courses/Payment');
// Widgets component
const ChartWidgets = () => import('../views/template/widgets/chart-widgets/ChartWidgets');
const UserWidgets = () => import('../views/template/widgets/user-widgets/UserWidgets');
//Ecommerce Widgets
const ShopWithAlgolia = () => import('../views/template/ecommerce/ShopWithAlgolia');
const Shop = () => import('../views/template/ecommerce/Shop');
const ProductDetail = () => import('../views/template/ecommerce/ProductDetail');
const AddProduct = () => import('../views/template/ecommerce/AddProduct');
const EditProduct = () => import('../views/template/ecommerce/EditProduct');
const EditDetail = () => import('../views/template/ecommerce/EditDetail');
const Cart = () => import('../views/template/ecommerce/Cart');
const Checkout = () => import('../views/template/ecommerce/Checkout');
const CreditCard = () => import('../views/template/ecommerce/CreditCard');
// Inbox component
const Inbox = () => import('../views/template/inbox/Inbox');
// chat component
const Chat = () => import('../views/template/chat/Chat');
// calendar components
const Calendar = () => import('../views/template/calendar/Calendar');
// ui components
const AppBars = () => import('../views/template/ui-elements/AppBars');
const Banners = () => import('../views/template/ui-elements/Banners');
const ListItemGroups = () => import('../views/template/ui-elements/ListItemGroups');
const SlideGroups = () => import('../views/template/ui-elements/SlideGroups');
const Overlays = () => import('../views/template/ui-elements/Overlays');
const ChipGroups = () => import('../views/template/ui-elements/ChipGroups');
const FileInput = () => import('../views/template/ui-elements/FileInput');
const ColorPickers = () => import('../views/template/ui-elements/ColorPickers');
const Buttons = () => import('../views/template/ui-elements/Buttons');
const Cards = () => import('../views/template/ui-elements/Cards');
const Grid = () => import('../views/template/ui-elements/Grid');
const Groups = () => import('../views/template/ui-elements/Groups');
const Hover = () => import('../views/template/ui-elements/Hover');
const Images = () => import('../views/template/ui-elements/Images');
const List = () => import('../views/template/ui-elements/List');
const Menu = () => import('../views/template/ui-elements/Menu');
const Ratings = () => import('../views/template/ui-elements/Ratings');
const Slider = () => import('../views/template/ui-elements/Slider');
const Snackbar = () => import('../views/template/ui-elements/Snackbar');
const Tooltip = () => import('../views/template/ui-elements/Tooltip');
const Dialog = () => import('../views/template/ui-elements/Dialog');
const Select = () => import('../views/template/ui-elements/Select');
const Input = () => import('../views/template/ui-elements/Input');
const Checkbox = () => import('../views/template/ui-elements/Checkbox');
const Radio = () => import('../views/template/ui-elements/Radio');
const Toolbar = () => import('../views/template/ui-elements/Toolbar');
const Progress = () => import('../views/template/ui-elements/Progress');
const Tabs = () => import('../views/template/ui-elements/Tabs');
const Carousel = () => import('../views/template/ui-elements/Carousel');
const Chips = () => import('../views/template/ui-elements/Chips');
const Datepicker = () => import('../views/template/ui-elements/Datepicker');
const Timepicker = () => import('../views/template/ui-elements/Timepicker');
// chart components
const VueChartjs = () => import('../views/template/charts/VueChartjs');
const VueEcharts = () => import('../views/template/charts/VueEcharts');
// maps views
const GoogleMaps = () => import('../views/template/maps/GoogleMaps');
const LeafletMaps = () => import('../views/template/maps/LeafletMaps');
// Pages views
const Blank = () => import('../views/template/pages/Blank');
const Blog = () => import('../views/template/pages/Blog');
const Gallery = () => import('../views/template/pages/Gallery');
const Pricing1 = () => import('../views/template/pages/Pricing-1');
const Pricing2 = () => import('../views/template/pages/Pricing-2');
// users views
const UserProfile = () => import('../views/template/users/UserProfile');
const UsersList = () => import('../views/template/users/UsersList');
// drag-drop components
const Vue2Dragula = () => import('../views/template/drag-drop/Vue2Dragula');
const VueDraggable = () => import('../views/template/drag-drop/Vuedraggable');
const VueDraggableResizeable = () => import('../views/template/drag-drop/VueDraggableResizable');
// icons components
const Themify = () => import('../views/template/icons/Themify');
const Material = () => import('../views/template/icons/Material');
// editor components
const QuillEditor = () => import('../views/template/editor/QuillEditor');
const WYSIWYG = () => import('../views/template/editor/WYSIWYG');
// form componenets
const FormValidation = () => import('../views/template/forms/FormValidation');
const Stepper = () => import('../views/template/forms/Stepper');
// Data table componenets
const SimpleTable = () => import('../views/template/tables/SimpleTable');
const Standard = () => import('../views/template/tables/Standard');
const Slots = () => import('../views/template/tables/Slots');
const SelectableRows = () => import('../views/template/tables/SelectableRows');
const SearchWithText = () => import('../views/template/tables/SearchWithText');
// Timelines component
const Usage = () => import('../views/template/timelines/Usage');
const SmallDots = () => import('../views/template/timelines/SmallDots');
const IconDots = () => import('../views/template/timelines/IconDots');
const ColoredDots = () => import('../views/template/timelines/ColoredDots');
const OppositeSlot = () => import('../views/template/timelines/OppositeSlot');
const DenseAlert = () => import('../views/template/timelines/DenseAlert');
const Advanced = () => import('../views/template/timelines/Advanced');
// Treeview component
const Treeview = () => import('../views/template/treeview/Treeview');
// Extensions components
const ImageCropper = () => import('../views/template/extensions/ImageCropper');
const VideoPlayer = () => import('../views/template/extensions/VideoPlayer');
const Dropzone = () => import('../views/template/extensions/Dropzone');

/* ------------------------------------------------------------------ */
/* --- --- --- --- ----- COMPONENTES DE ROSAGRES ---- --- --- --- --- */
/* ------------------------------------------------------------------ */
const Home = () => import('../views/base/home/Home');
const NewProject = () => import('../views/modules/projects/NewProject');
const ManageProject = () => import('../views/modules/projects/ManageProject');
const EditProject = () => import('../views/modules/projects/EditProject');

export default {
    path: '/app/horizontal',
    component: HorizontalLayout,
    redirect: {name: 'home'},
    children: [
        /* -------------------------------------------------------- */
        /* --- --- --- --- --- RUTAS DE LA BASE --- --- --- --- --- */
        /* -------------------------------------------------------- */
        {
            path: '/app/horizontal/home',
            component: Home,
            name: 'home',
            meta: {
                requiresAuth: true,
                title: null,
                breadcrumb: null
            }
        },

        /* ------------------------------------------------------------ */
        /* --- --- --- --- --- RUTAS DE LOS MÓDULOS --- --- --- --- --- */
        /* ------------------------------------------------------------ */

        /* --- --- --- --- --- ROSAGRES --- --- --- --- --- */
            {
                path: '/app/horizontal/new-project',
                component: NewProject,
                meta: {
                    requiresAuth: true,
                    title: 'message.newProject',
                    props: (route) => ({ project: route.query.project }) ,
                    breadcrumb: [
                        {
                            breadcrumbInactive: 'message.Home'
                        },
                        {
                            breadcrumbActive: 'message.newProject'
                        }
                    ]
                }
            },

            {
                path: '/app/horizontal/manage-projects',
                component: ManageProject,
                meta: {
                    requiresAuth: true,
                    title: 'message.manageProject',
                    props: (route) => ({ project: route.query.typeProject }) ,
                    breadcrumb: [
                        {
                            breadcrumbInactive: 'message.Home'
                        },
                        {
                            breadcrumbActive: 'message.manageProject'
                        }
                    ]
                }
            },

            {
                path: '/app/horizontal/manage-projects/:id/:typeProject',
                component: EditProject,
                meta: {
                    requiresAuth: true,
                    title: 'message.manageProject',
                    props: true,
                    breadcrumb: [
                        {
                            breadcrumbInactive: 'message.Home'
                        },
                        {
                            breadcrumbActive: 'message.manageProject'
                        }
                    ]
                }
            },
        /* ---------------------------------------------------------- */
        /* --- --- --- --- --- RUTAS DEL TEMPLATE --- --- --- --- --- */
        /* ---------------------------------------------------------- */
        {
            component: Ecommerce,
            path: '/app/horizontal/dashboard/ecommerce',
            meta: {
                requiresAuth: true,
                title: 'message.ecommerce',
                breadcrumb: null
            }
        },
        {
            component: WebAnalytics,
            path: '/app/horizontal/dashboard/web-analytics',
            meta: {
                requiresAuth: true,
                title: 'message.webAnalytics',
                breadcrumb: null
            }
        },
        {
            component: Magazine,
            path: '/app/horizontal/dashboard/magazine',
            meta: {
                requiresAuth: true,
                title: 'message.magazine',
                breadcrumb: null
            }
        },
        {
            component: News,
            path: '/app/horizontal/dashboard/news',
            meta: {
                requiresAuth: true,
                title: 'message.news',
                breadcrumb: null
            }
        },
        {
            component: Agency,
            path: '/app/horizontal/dashboard/agency',
            meta: {
                requiresAuth: true,
                title: 'message.agency',
                breadcrumb: null
            }
        },
        {
            component: Saas,
            path: '/app/horizontal/dashboard/saas',
            meta: {
                requiresAuth: true,
                title: 'message.saas',
                breadcrumb: null
            }
        },


        {
            path: '/app/horizontal/dashboard/crypto',
            component: Crypto,
            meta: {
                requiresAuth: true,
                title: 'message.crypto',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Crypto /'
                    },
                    {
                        breadcrumbActive: 'Crypto'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/crypto/market-cap',
            component: MarketCap,
            meta: {
                requiresAuth: true,
                title: 'message.marketCap',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Crypto /'
                    },
                    {
                        breadcrumbActive: 'MarketCap'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/crypto/trade',
            component: Trade,
            meta: {
                requiresAuth: true,
                title: 'message.trade',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Crypto /'
                    },
                    {
                        breadcrumbActive: 'Trade'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/crypto/wallet',
            component: Wallet,
            meta: {
                requiresAuth: true,
                title: 'message.wallet',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Crypto /'
                    },
                    {
                        breadcrumbActive: 'Wallet'
                    }
                ]
            }
        },

        {
            path: '/app/horizontal/crm/projects',
            component: Projects,
            meta: {
                requiresAuth: true,
                title: 'message.projects',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'CRM /'
                    },
                    {
                        breadcrumbActive: 'Projects'
                    }
                ]
            }
        },

        {
            path: '/app/horizontal/crm/projectDetails/:id',
            component: ProjectDetails,
            meta: {
                requiresAuth: true,
                title: 'message.projectDetails',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'CRM /'
                    },
                    {
                        breadcrumbActive: 'projectDetails'
                    }
                ]
            }
        },

        {
            path: '/app/horizontal/crm/clients',
            component: Clients,
            meta: {
                requiresAuth: true,
                title: 'message.clients',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'CRM /'
                    },
                    {
                        breadcrumbActive: 'Clients'
                    }
                ]
            }
        },

        {
            path: '/app/horizontal/crm/reports',
            component: Reports,
            meta: {
                requiresAuth: true,
                title: 'message.reports',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'CRM /'
                    },
                    {
                        breadcrumbActive: 'Reports'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/dashboard/crm',
            component: Dashboard,
            meta: {
                requiresAuth: true,
                title: 'message.dashboard',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'CRM /'
                    },
                    {
                        breadcrumbActive: 'Dashboard'
                    }
                ]
            }
        },


        {
            path: '/app/horizontal/courses',
            component: Courses,
            meta: {
                requiresAuth: true,
                title: 'message.courses',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Courses /'
                    },
                    {
                        breadcrumbActive: 'Courses'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/courses/courses-list',
            component: CourseList,
            meta: {
                requiresAuth: true,
                title: 'message.coursesList',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Courses /'
                    },
                    {
                        breadcrumbActive: 'List'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/courses/courses-detail',
            component: CoursesDetail,
            meta: {
                requiresAuth: true,
                title: 'message.courseDetail',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Courses /'
                    },
                    {
                        breadcrumbActive: 'Detail'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/courses/sign-in',
            component: SignIn,
            meta: {
                requiresAuth: true,
                title: 'message.signIn',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Courses /'
                    },
                    {
                        breadcrumbActive: 'Sign In'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/courses/payment',
            component: Payment,
            meta: {
                requiresAuth: true,
                title: 'message.payment',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Courses /'
                    },
                    {
                        breadcrumbActive: 'Payment'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/widgets/user-widgets',
            component: UserWidgets,
            meta: {
                requiresAuth: true,
                title: 'message.user',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Widgets /'
                    },
                    {
                        breadcrumbActive: 'User'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/widgets/chart-widgets',
            component: ChartWidgets,
            meta: {
                requiresAuth: true,
                title: 'message.charts',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Widgets /'
                    },
                    {
                        breadcrumbActive: 'Charts'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/shop-with-algolia',
            component: ShopWithAlgolia,
            meta: {
                requiresAuth: true,
                title: 'message.shopWithAlgolia',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Shop With Algolia'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/shop',
            component: Shop,
            meta: {
                requiresAuth: true,
                title: 'message.shop',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Shop'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/product-detail/:category/:id',
            component: ProductDetail,
            meta: {
                requiresAuth: true,
                title: 'message.productDetail',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Product Detail'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/add-product',
            component: AddProduct,
            meta: {
                requiresAuth: true,
                title: 'message.addProduct',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Add Product'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/edit-product',
            component: EditProduct,
            meta: {
                requiresAuth: true,
                title: 'message.editProduct',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Edit Product'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/edit-detail/:category/:id',
            component: EditDetail,
            meta: {
                requiresAuth: true,
                title: 'message.editDetail',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Edit Detail'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/cart',
            component: Cart,
            meta: {
                requiresAuth: true,
                title: 'message.cart',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Cart'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/checkout',
            component: Checkout,
            meta: {
                requiresAuth: true,
                title: 'message.checkout',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Checkout'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ecommerce/cards',
            component: CreditCard,
            meta: {
                requiresAuth: true,
                title: 'message.cards',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Ecommerce /'
                    },
                    {
                        breadcrumbActive: 'Cards'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/pages/blog',
            component: Blog,
            meta: {
                requiresAuth: true,
                title: 'message.blog',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Pages /'
                    },
                    {
                        breadcrumbActive: 'Blog'
                    }
                ]
            }
        },
        {
            component: Gallery,
            path: '/app/horizontal/pages/gallery',
            meta: {
                requiresAuth: true,
                title: 'message.gallery',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Pages /'
                    },
                    {
                        breadcrumbActive: 'Gallery'
                    }
                ]
            }
        },
        {
            component: Pricing1,
            path: '/app/horizontal/pages/pricing-1',
            meta: {
                requiresAuth: true,
                title: 'message.pricing1',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Pages /'
                    },
                    {
                        breadcrumbActive: 'Pricing-1'
                    }
                ]
            }
        },
        {
            component: Pricing2,
            path: '/app/horizontal/pages/pricing-2',
            meta: {
                requiresAuth: true,
                title: 'message.pricing2',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Pages /'
                    },
                    {
                        breadcrumbActive: 'Pricing-2'
                    }
                ]
            }
        },
        {
            component: Blank,
            path: '/app/horizontal/pages/blank',
            meta: {
                requiresAuth: true,
                title: 'message.blank',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Pages /'
                    },
                    {
                        breadcrumbActive: 'Blank'
                    }
                ]
            }
        },
        {
            component: Inbox,
            path: '/app/horizontal/inbox',
            meta: {
                requiresAuth: true,
                title: 'message.inbox',
                breadcrumb: null
            }
        },
        {
            component: Chat,
            path: '/app/horizontal/chat',
            meta: {
                requiresAuth: true,
                title: 'message.chat',
                breadcrumb: null
            }
        },
        {
            path: '/app/horizontal/treeview',
            component: Treeview,
            meta: {
                requiresAuth: true,
                title: 'message.treeview',
                breadcrumb: [
                    {
                        breadcrumbInactive: null
                    },
                    {
                        breadcrumbActive: 'Treeview'
                    }
                ]
            }
        },
        // Timelines Components
        {
            path: '/app/horizontal/timelines/usage',
            component: Usage,
            meta: {
                requiresAuth: true,
                title: 'message.usage',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Usage"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/smalldots',
            component: SmallDots,
            meta: {
                requiresAuth: true,
                title: 'message.smallDots',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Small Dots"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/icondots',
            component: IconDots,
            meta: {
                requiresAuth: true,
                title: 'message.iconDots',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Icon Dots"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/coloreddots',
            component: ColoredDots,
            meta: {
                requiresAuth: true,
                title: 'message.coloredDots',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Colored Dots"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/oppositeslot',
            component: OppositeSlot,
            meta: {
                requiresAuth: true,
                title: 'message.oppositeSlot',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Opposite Slot"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/densealert',
            component: DenseAlert,
            meta: {
                requiresAuth: true,
                title: 'message.denseAlert',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Dense Alert"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/timelines/advanced',
            component: Advanced,
            meta: {
                requiresAuth: true,
                title: 'message.advanced',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Timelines /'
                    },
                    {
                        breadcrumbActive: "Advanced"
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/app-bars',
            component: AppBars,
            meta: {
                requiresAuth: true,
                title: 'message.appBars',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'App Bars'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/banners',
            component: Banners,
            meta: {
                requiresAuth: true,
                title: 'message.banners',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Banners'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/list-item-groups',
            component: ListItemGroups,
            meta: {
                requiresAuth: true,
                title: 'message.listItemGroups',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'List Item Groups'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/slide-groups',
            component: SlideGroups,
            meta: {
                requiresAuth: true,
                title: 'message.slideGroups',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Slide Groups'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/chip-groups',
            component: ChipGroups,
            meta: {
                requiresAuth: true,
                title: 'message.chipGroups',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Chip Groups'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/overlays',
            component: Overlays,
            meta: {
                requiresAuth: true,
                title: 'message.overlays',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'overlays'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/file-input',
            component: FileInput,
            meta: {
                requiresAuth: true,
                title: 'message.fileInput',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'File Input'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/color-pickers',
            component: ColorPickers,
            meta: {
                requiresAuth: true,
                title: 'message.colorPickers',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Color Picker'
                    }
                ]
            }
        },
        {
            component: Buttons,
            path: '/app/horizontal/ui-elements/buttons',
            meta: {
                requiresAuth: true,
                title: 'message.buttons',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Buttons'
                    }
                ]
            }
        },
        {
            component: Cards,
            path: '/app/horizontal/ui-elements/cards',
            meta: {
                requiresAuth: true,
                title: 'message.cards',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Cards'
                    }
                ]
            }
        },
        {
            component: Checkbox,
            path: '/app/horizontal/ui-elements/checkbox',
            meta: {
                requiresAuth: true,
                title: 'message.checkbox',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Checkbox'
                    }
                ]
            }
        },
        {
            component: Carousel,
            path: '/app/horizontal/ui-elements/carousel',
            meta: {
                requiresAuth: true,
                title: 'message.carousel',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Carousel'
                    }
                ]
            }
        },
        {
            component: Chips,
            path: '/app/horizontal/ui-elements/chips',
            meta: {
                requiresAuth: true,
                title: 'message.chips',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Chips'
                    }
                ]
            }
        },
        {
            component: Datepicker,
            path: '/app/horizontal/ui-elements/datepicker',
            meta: {
                requiresAuth: true,
                title: 'message.datepicker',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Datepicker'
                    }
                ]
            }
        },
        {
            component: Dialog,
            path: '/app/horizontal/ui-elements/dialog',
            meta: {
                requiresAuth: true,
                title: 'message.dialog',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Dialog'
                    }
                ]
            }
        },
        {
            component: Grid,
            path: '/app/horizontal/ui-elements/grid',
            meta: {
                requiresAuth: true,
                title: 'message.grid',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Grid'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/groups',
            component: Groups,
            meta: {
                requiresAuth: true,
                title: 'message.groups',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Groups'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/hover',
            component: Hover,
            meta: {
                requiresAuth: true,
                title: 'message.hover',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Hover'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/images',
            component: Images,
            meta: {
                requiresAuth: true,
                title: 'message.images',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Images'
                    }
                ]
            }
        },
        {
            component: Input,
            path: '/app/horizontal/ui-elements/input',
            meta: {
                requiresAuth: true,
                title: 'message.input',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Input'
                    }
                ]
            }
        },
        {
            component: List,
            path: '/app/horizontal/ui-elements/list',
            meta: {
                requiresAuth: true,
                title: 'message.list',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'List'
                    }
                ]
            }
        },
        {
            component: Menu,
            path: '/app/horizontal/ui-elements/menu',
            meta: {
                requiresAuth: true,
                title: 'message.menu',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Menu'
                    }
                ]
            }
        },
        {
            component: Progress,
            path: '/app/horizontal/ui-elements/progress',
            meta: {
                requiresAuth: true,
                title: 'message.progress',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Progress'
                    }
                ]
            }
        },
        {
            component: Radio,
            path: '/app/horizontal/ui-elements/radio',
            meta: {
                requiresAuth: true,
                title: 'message.radio',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Radio'
                    }
                ]
            }
        },
        {
            component: Select,
            path: '/app/horizontal/ui-elements/select',
            meta: {
                requiresAuth: true,
                title: 'message.select',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Select'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/ui-elements/ratings',
            component: Ratings,
            meta: {
                requiresAuth: true,
                title: 'message.ratings',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Ratings'
                    }
                ]
            }
        },
        {
            component: Slider,
            path: '/app/horizontal/ui-elements/slider',
            meta: {
                requiresAuth: true,
                title: 'message.slider',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Slider'
                    }
                ]
            }
        },
        {
            component: Snackbar,
            path: '/app/horizontal/ui-elements/snackbar',
            meta: {
                requiresAuth: true,
                title: 'message.snackbar',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Snackbar'
                    }
                ]
            }
        },
        {
            component: Tabs,
            path: '/app/horizontal/ui-elements/tabs',
            meta: {
                requiresAuth: true,
                title: 'message.tabs',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Tabs'
                    }
                ]
            }
        },
        {
            component: Toolbar,
            path: '/app/horizontal/ui-elements/toolbar',
            meta: {
                requiresAuth: true,
                title: 'message.toolbar',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Toolbar'
                    }
                ]
            }
        },
        {
            component: Tooltip,
            path: '/app/horizontal/ui-elements/tooltip',
            meta: {
                requiresAuth: true,
                title: 'message.tooltip',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Tooltip'
                    }
                ]
            }
        },
        {
            component: Timepicker,
            path: '/app/horizontal/ui-elements/timepicker',
            meta: {
                requiresAuth: true,
                title: 'message.timepicker',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'UI Elements /'
                    },
                    {
                        breadcrumbActive: 'Timepicker'
                    }
                ]
            }
        },
        {
            component: FormValidation,
            path: '/app/horizontal/forms/form-validation',
            meta: {
                requiresAuth: true,
                title: 'message.formValidation',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Forms /'
                    },
                    {
                        breadcrumbActive: 'FormValidation'
                    }
                ]
            }
        },
        {
            component: Stepper,
            path: '/app/horizontal/forms/stepper',
            meta: {
                requiresAuth: true,
                title: 'message.stepper',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Forms /'
                    },
                    {
                        breadcrumbActive: 'Stepper'
                    }
                ]
            }
        },
        {
            component: VueChartjs,
            path: '/app/horizontal/charts/vue-chartjs',
            meta: {
                requiresAuth: true,
                title: 'message.vueChartjs',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Charts /'
                    },
                    {
                        breadcrumbActive: 'Vue Chartjs'
                    }
                ]
            }
        },
        {
            component: VueEcharts,
            path: '/app/horizontal/charts/vue-echarts',
            meta: {
                requiresAuth: true,
                title: 'message.vueEcharts',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Charts /'
                    },
                    {
                        breadcrumbActive: 'Vue Echarts'
                    }
                ]
            }
        },
        {
            component: Themify,
            path: '/app/horizontal/icons/themify',
            meta: {
                requiresAuth: true,
                title: 'message.themify',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Icons /'
                    },
                    {
                        breadcrumbActive: 'Themify'
                    }
                ]
            }
        },
        {
            component: Material,
            path: '/app/horizontal/icons/material',
            meta: {
                requiresAuth: true,
                title: 'message.material',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Icons /'
                    },
                    {
                        breadcrumbActive: 'Material'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/tables/simple',
            component: SimpleTable,
            meta: {
                requiresAuth: true,
                title: 'message.simpleTable',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Tables /'
                    },
                    {
                        breadcrumbActive: 'Simple'
                    }
                ]
            }
        },
        {
            component: Standard,
            path: '/app/horizontal/tables/standard',
            meta: {
                requiresAuth: true,
                title: 'message.standard',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Tables /'
                    },
                    {
                        breadcrumbActive: 'Standard'
                    }
                ]
            }
        },
        {
            component: Slots,
            path: '/app/horizontal/tables/slots',
            meta: {
                requiresAuth: true,
                title: 'message.slots',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Tables /'
                    },
                    {
                        breadcrumbActive: 'Slots'
                    }
                ]
            }
        },
        {
            component: SelectableRows,
            path: '/app/horizontal/tables/selectablerows',
            meta: {
                requiresAuth: true,
                title: 'message.selectable',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Tables /'
                    },
                    {
                        breadcrumbActive: 'Selectable rows'
                    }
                ]
            }
        },
        {
            component: SearchWithText,
            path: '/app/horizontal/tables/searchwithtext',
            meta: {
                requiresAuth: true,
                title: 'message.searchRow',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Tables /'
                    },
                    {
                        breadcrumbActive: 'Search Row'
                    }
                ]
            }
        },
        {
            component: GoogleMaps,
            path: '/app/horizontal/maps/google-maps',
            meta: {
                requiresAuth: true,
                title: 'message.googleMaps',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Maps /'
                    },
                    {
                        breadcrumbActive: 'Google Map'
                    }
                ]
            }
        },
        {
            component: LeafletMaps,
            path: '/app/horizontal/maps/leaflet-maps',
            meta: {
                requiresAuth: true,
                title: 'message.leafletMaps',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Maps /'
                    },
                    {
                        breadcrumbActive: 'Leaflet Map'
                    }
                ]
            }
        },
        {
            component: UserProfile,
            path: '/app/horizontal/users/user-profile',
            meta: {
                requiresAuth: true,
                title: 'message.userProfile',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Users /'
                    },
                    {
                        breadcrumbActive: 'User Profile'
                    }
                ]
            }
        },
        {
            component: UsersList,
            path: '/app/horizontal/users/users-list',
            meta: {
                requiresAuth: true,
                title: 'message.usersList',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Users /'
                    },
                    {
                        breadcrumbActive: 'Users List'
                    }
                ]
            }
        },
        {
            component: Calendar,
            path: '/app/horizontal/calendar',
            meta: {
                requiresAuth: true,
                title: 'message.calendar',
                breadcrumb: [
                    {
                        breadcrumbInactive: null
                    },
                    {
                        breadcrumbActive: 'Calendar'
                    }
                ]
            }
        },
        {
            component: QuillEditor,
            path: '/app/horizontal/editor/quilleditor',
            meta: {
                requiresAuth: true,
                title: 'message.quillEditor',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Editor /'
                    },
                    {
                        breadcrumbActive: 'Quill Editor'
                    }
                ]
            }
        },
        {
            component: WYSIWYG,
            path: '/app/horizontal/editor/wysiwyg',
            meta: {
                requiresAuth: true,
                title: 'message.wYSIWYG',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Editor /'
                    },
                    {
                        breadcrumbActive: 'WYSIWYG'
                    }
                ]
            }
        },
        {
            component: Vue2Dragula,
            path: '/app/horizontal/drag-drop/vue2dragula',
            meta: {
                requiresAuth: true,
                title: 'message.vue2Dragula',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Drag And Drop /'
                    },
                    {
                        breadcrumbActive: 'Vue2 Dragula'
                    }
                ]
            }
        },
        {
            component: VueDraggable,
            path: '/app/horizontal/drag-drop/vuedraggable',
            meta: {
                requiresAuth: true,
                title: 'message.vueDraggable',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Drag And Drop /'
                    },
                    {
                        breadcrumbActive: 'Vue Draggable'
                    }
                ]
            }
        },
        {
            component: VueDraggableResizeable,
            path: '/app/horizontal/drag-drop/vuedraggableresizeable',
            meta: {
                requiresAuth: true,
                title: 'message.draggableResizeable',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Drag And Drop /'
                    },
                    {
                        breadcrumbActive: 'Draggable Resizeable'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/image-cropper',
            component: ImageCropper,
            meta: {
                requiresAuth: true,
                title: 'message.imageCropper',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Extensions /'
                    },
                    {
                        breadcrumbActive: 'Image Cropper'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/video-player',
            component: VideoPlayer,
            meta: {
                requiresAuth: true,
                title: 'message.videoPlayer',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Extensions /'
                    },
                    {
                        breadcrumbActive: 'Video Player'
                    }
                ]
            }
        },
        {
            path: '/app/horizontal/dropzone',
            component: Dropzone,
            meta: {
                requiresAuth: true,
                title: 'message.dropzone',
                breadcrumb: [
                    {
                        breadcrumbInactive: 'Extensions /'
                    },
                    {
                        breadcrumbActive: 'Dropzone'
                    }
                ]
            }
        }
    ]
}
