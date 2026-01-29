import{E as e,a8 as t,a9 as o,aa as s,ab as r}from"./index-C3F57mgS.js";const l=new e;async function c(){try{const a=await l.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),await r(),console.log("🔐 Logged out + refresh token cleared")}catch(a){console.error("🚨 LOGOUT ERROR:",a)}}export{c as l};
//# sourceMappingURL=auth-CPJU5UFt.js.map
