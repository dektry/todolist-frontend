import React from "react";

import { HomeContainer } from "../pages/Home";
import { NotFoundUI } from "../pages/NotFound";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  HOME = "/",
  ANY = "*",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: HomeContainer },
  { path: RouteNames.ANY, component: NotFoundUI },
];
