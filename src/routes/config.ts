import { MainPage } from "../pages/Main";
import TestPage from "../pages/Test";

export type RouteConfigType = {
    key: string;
    path: string;
    Element: React.ComponentType<any>;
    routes?: RouteConfigType[];
};

export const genRouteConfigs = (): RouteConfigType[] => [
    {
        key: 'main',
        path: '/',
        Element: MainPage,
    },
    {
        key: 'test',
        path: '/test',
        Element: TestPage,
    }
];
export const genOuterRouteConfigs = (): RouteConfigType[] => [
    {
        key: 'test',
        path: '/outer/test',
        Element: TestPage,
    }
];