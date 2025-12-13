import{T as e,a7 as t,a8 as o,a9 as s,aa as r}from"./index-C-8f7EVG.js";const l=new e;async function c(){try{const a=await l.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),await r(),console.log("🔐 Logged out + refresh token cleared")}catch(a){console.error("🚨 LOGOUT ERROR:",a)}}export{c as l};
//# sourceMappingURL=auth-BM4waZxe.js.map
