import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                // {
                //     path: '/',
                //     name: 'dashboard',
                //     component: () => import('@/views/Dashboard.vue')
                // },
                {
                    path: '/',
                    name: 'pres1_start',
                    component: () => import('@/views/presentation/A01/A01Start.vue')
                },
                {
                    path: '/A01_end',
                    name: 'pres1_end',
                    component: () => import('@/views/presentation/A01/A01End.vue')
                },
                {
                    path: '/A02',
                    name: 'pres2_start',
                    component: () => import('@/views/presentation/A02/A02Start.vue')
                },
                {
                    path: '/A02_end',
                    name: 'pres2_end',
                    component: () => import('@/views/presentation/A02/A02End.vue')
                },
                {
                    path: '/A03',
                    name: 'pres3_start',
                    component: () => import('@/views/presentation/A03/A03Start.vue')
                },
                {
                    path: '/A03_end',
                    name: 'pres3_end',
                    component: () => import('@/views/presentation/A03/A03End.vue')
                },
                {
                    path: '/A04',
                    name: 'pres4_start',
                    component: () => import('@/views/presentation/A04/A04Start.vue')
                },
                {
                    path: '/A04_end',
                    name: 'pres4_end',
                    component: () => import('@/views/presentation/A04/A04End.vue')
                },
                {
                    path: '/B01',
                    name: 'pres5_start',
                    component: () => import('@/views/presentation/B01/B01Start.vue')
                },
                {
                    path: '/B02',
                    name: 'pres6_start',
                    component: () => import('@/views/presentation/B02/B02Start.vue')
                },
                {
                    path: '/B05',
                    name: 'pres6bis_start',
                    component: () => import('@/views/presentation/B05/B05Start.vue')
                },
                {
                    path: '/B03',
                    name: 'pres7_start',
                    component: () => import('@/views/presentation/B03/B03Start.vue')
                },
                {
                    path: '/B04',
                    name: 'pres8_start',
                    component: () => import('@/views/presentation/B04/B04Start.vue')
                },
                {
                    path: '/B04_end',
                    name: 'pres8_end',
                    component: () => import('@/views/presentation/B04/B04End.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
