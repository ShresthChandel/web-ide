(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__8e4960e4._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/routes.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * An Array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */ __turbopack_context__.s({
    "DEFAULT_LOGIN_REDIRECT": ()=>DEFAULT_LOGIN_REDIRECT,
    "apiAuthPrefix": ()=>apiAuthPrefix,
    "authRoutes": ()=>authRoutes,
    "protectedRoutes": ()=>protectedRoutes,
    "publicRoutes": ()=>publicRoutes
});
const publicRoutes = [];
const protectedRoutes = [
    "/"
];
const authRoutes = [
    "/auth/sign-in"
];
const apiAuthPrefix = "/api/auth";
const DEFAULT_LOGIN_REDIRECT = "/"; // Changed to redirect to home page after login
}),
"[project]/auth.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/github.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/github.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/google.js [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ]
};
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/routes.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [middleware-edge] (ecmascript)");
;
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = auth((req)=>{
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["apiAuthPrefix"]);
    const isPublicRoute = __TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["publicRoutes"].includes(nextUrl.pathname);
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authRoutes"].includes(nextUrl.pathname);
    if (isApiAuthRoute) {
        return null;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_LOGIN_REDIRECT"], nextUrl));
        }
        return null;
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/sign-in", nextUrl));
    }
    return null;
});
const config = {
    // copied from clerk
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/",
        "/(api|trpc)(.*)"
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8e4960e4._.js.map