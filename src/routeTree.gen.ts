/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminLoginImport } from './routes/admin-login'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const AdminLoginRoute = AdminLoginImport.update({
  path: '/admin-login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/admin-login': {
      id: '/admin-login'
      path: '/admin-login'
      fullPath: '/admin-login'
      preLoaderRoute: typeof AdminLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, AdminLoginRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin-login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/admin-login": {
      "filePath": "admin-login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
