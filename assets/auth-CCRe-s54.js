import{V as a,a5 as t,a6 as o,a7 as s}from"./index-CBpHBh5p.js";const r=new a;async function l(){try{const e=await r.post("/auth/logout",{},{withCredentials:!0});t.set(null),o.set(null),await s(),console.log("🔐 Logged out + refresh token cleared")}catch(e){console.error("🚨 LOGOUT ERROR:",e)}}export{l};
//# sourceMappingURL=auth-CCRe-s54.js.map
