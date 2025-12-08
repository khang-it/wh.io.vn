import{V as a,a5 as t,a6 as o,a7 as s,a8 as r}from"./index-vZczoy7E.js";const l=new a;async function c(){try{const e=await l.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),await r(),console.log("🔐 Logged out + refresh token cleared")}catch(e){console.error("🚨 LOGOUT ERROR:",e)}}export{c as l};
//# sourceMappingURL=auth-CzmwRnU8.js.map
