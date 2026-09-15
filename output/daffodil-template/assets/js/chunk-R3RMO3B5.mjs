function t(o,u){let n,e,d=(...c)=>{window?.clearTimeout(n),e=()=>{e=void 0,window?.clearTimeout(n),o(...c)},n=window?.setTimeout(()=>{e?.()},u)},i=()=>{window?.clearTimeout(n),e=void 0};return d.cancel=i,d.flush=()=>e?.(),d}export{t as a};
//# sourceMappingURL=/assets/js/chunk-R3RMO3B5-85b81f96.js.map
