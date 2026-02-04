import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("project1", "routes/project1.tsx"), route("project2", "routes/project2.tsx"), route("project3", "routes/project3.tsx")] satisfies RouteConfig;
