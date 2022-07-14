import { Route, Routes } from "react-router-dom";
import { genRouteConfigs, RouteConfigType } from "./config";

export const renderRoutes = (configs: RouteConfigType[]): React.ReactElement[] => configs.map((config) => {
    return (
        <Route key={config.key} path={config.path} element={<config.Element/>} />
    );
});


export const MyRoutes = () => {
    const routeConfigs = genRouteConfigs();
    return (
        <Routes>
            {renderRoutes(routeConfigs)}
        </Routes>
    );
}
