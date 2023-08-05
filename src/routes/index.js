// ? Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';


// ? no-authentication required
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    }
];


// ? authentication required
const privateRoutes = [];

export { publicRoutes, privateRoutes }  