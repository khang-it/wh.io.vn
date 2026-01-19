import{H as a,a6 as t,a7 as o,a8 as s,a9 as r}from"./index-DWMd35kg.js";const l=new a;async function c(){try{const e=await l.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),await r(),console.log("🔐 Logged out + refresh token cleared")}catch(e){console.error("🚨 LOGOUT ERROR:",e)}}export{c as l};
//# sourceMappingURL=auth-IBhMSIdd.js.map
