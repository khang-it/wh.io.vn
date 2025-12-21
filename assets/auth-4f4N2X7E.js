import{H as a,a4 as t,a5 as o,a6 as s,a7 as r}from"./index-CJm_QQrk.js";const l=new a;async function c(){try{const e=await l.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),await r(),console.log("🔐 Logged out + refresh token cleared")}catch(e){console.error("🚨 LOGOUT ERROR:",e)}}export{c as l};
//# sourceMappingURL=auth-4f4N2X7E.js.map
