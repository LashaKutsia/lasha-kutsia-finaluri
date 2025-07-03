import { Routes, Route } from "react-router-dom";
import routesConfig from ".";
import type { RouteObject } from "./types";

const AppRoutes = () => {
    return (
        <Routes>
            {routesConfig.map((route: RouteObject) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                />
            ))}
        </Routes>
    );
};

export default AppRoutes;
