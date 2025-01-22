/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/public'
import { Route as PrivateImport } from './routes/private'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/public',
  path: '/public',
  getParentRoute: () => rootRoute,
} as any)

const PrivateRoute = PrivateImport.update({
  id: '/private',
  path: '/private',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
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
    '/private': {
      id: '/private'
      path: '/private'
      fullPath: '/private'
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/public': {
      id: '/public'
      path: '/public'
      fullPath: '/public'
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/private': typeof PrivateRoute
  '/public': typeof PublicRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/private': typeof PrivateRoute
  '/public': typeof PublicRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/private': typeof PrivateRoute
  '/public': typeof PublicRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/private' | '/public'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/private' | '/public'
  id: '__root__' | '/' | '/private' | '/public'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PrivateRoute: typeof PrivateRoute
  PublicRoute: typeof PublicRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PrivateRoute: PrivateRoute,
  PublicRoute: PublicRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/private",
        "/public"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/private": {
      "filePath": "private.tsx"
    },
    "/public": {
      "filePath": "public.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
