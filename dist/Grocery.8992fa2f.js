// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2mnoL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "eb1f53528992fa2f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"48qUe":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5457 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5457.prelude(module);

try {
// // import { useState } from "react";
// // import groceryData from "../../utils/groceryItems"; // Import the data
// // const Grocery = () => {
// //   // Access the groceryItems from the imported data
// //   const [data] = useState(groceryData[0]?.groceryItems || []);
// //   // Handle case where grocery data is empty or undefined
// //   if (!data.length) {
// //     return <p>No grocery items available.</p>;
// //   }
// //   return (
// //     <div className="px-20 py-16  bg-zinc-200">
// //       <h1 className=" text-center font-semibold text-5xl mb-10 text-orange-600">Our Grocery</h1>
// //       <div className="absolute right-10 top-28 bg-green-500 w-44 py-2 cursor-pointer rounded-md text-center text-white">
// //         Grocery Added - 0
// //       </div>
// //       <div className="flex flex-wrap m-10">
// //         {data.map((item, index) => (
// //           <div key={index} className="card bg-white w-52 shadow-md p-5 shadow-black transition-all hover:bg-zinc-100 rounded-md m-5 hover:shadow-lg hover:shadow-yellow-700">
// //             <figure className="mb-2">
// //               <img className="rounded-sm h-28 object-contain" src={item.image} alt={item.name} />
// //             </figure>
// //             <div className="card-body">
// //               <h2 className="card-title tracking-tight mb-3">
// //                 <h1 className="font-semibold text-zinc-800">{item.name}</h1>
// //                 <div className="badge badge-secondary text-green-700">₹{item.rate}</div>
// //               </h2>
// //               <div className="badge badge-outline">
// //                 {item.inStock ? (
// //                   <span className="text-green-500 font-medium">In Stock</span>
// //                 ) : (
// //                   <span className="text-red-500 font-medium">Out of Stock</span>
// //                 )}
// //               </div>
// //               <div className="card-actions mt-2 relative">
// //                 <div className=" bg-yellow-500  w-[120px]  absolute left-5  py-1 cursor-pointer rounded-md text-center text-white">
// //                   Order Now
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Grocery;
// import { useState } from "react";
// import groceryData from "../../utils/groceryItems"; // Import the data
// const Grocery = () => {
//   // Access the groceryItems from the imported data
//   const [data] = useState(groceryData[0]?.groceryItems || []);
//   const [orderMessage, setOrderMessage] = useState(""); // State to store the order message
//   // Handle case where grocery data is empty or undefined
//   if (!data.length) {
//     return <p>No grocery items available.</p>;
//   }
//   // Function to handle order placement
//   // const handleOrder = (itemName) => {
//   //   setOrderMessage(`Your order for "${itemName}" has been placed!`);
//   //   // Clear the message after a few seconds
//   //   setTimeout(() => {
//   //     setOrderMessage(""); 
//   //   }, 3000); // Message disappears after 3 seconds
//   // };
//   const handleOrder = (item) => {
//     // Check if item is out of stock
//     if (item.inStock===false) {
//       setOrderMessage(`Sorry, "${item.name}" is out of stock.`);
//     } else {
//       setOrderMessage(`Your order for "${item.name}" has been placed!`);
//     }
//     // Clear the message after a few seconds
//     setTimeout(() => {
//       setOrderMessage(""); 
//     }, 3000); // Message disappears after 3 seconds
//   };
//   return (
//     <div className="px-20 py-16 bg-zinc-200">
//       <h1 className="text-center font-semibold text-5xl mb-10 text-orange-600 ">Our Grocery</h1>
//       {/* Order Message Display */}
//       {orderMessage &&  (
//         <div className={` w-52 top-44 left-[650px] absolute text-center text-white ${item.inStock ? "bg-green-500" : "bg-red-500"} p-2 rounded-md`}>
//           {orderMessage}
//         </div>
//       )}
//       <div className="absolute right-10 top-28 bg-green-500 w-44 py-2 cursor-pointer rounded-md text-center text-white">
//         Grocery Added - 0
//       </div>
//       <div className="flex flex-wrap m-10">
//         {data.map((item, index) => (
//           <div key={index} className="card bg-white w-52 shadow-md p-5 shadow-black transition-all hover:bg-zinc-100 rounded-md m-5 hover:shadow-lg hover:shadow-yellow-700">
//             <figure className="mb-2">
//               <img className="rounded-sm h-28 object-contain" src={item.image} alt={item.name} />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title tracking-tight mb-3">
//                 <h1 className="font-semibold text-zinc-800">{item.name}</h1>
//                 <div className="badge badge-secondary text-green-700">₹{item.rate}</div>
//               </h2>
//               <div className="badge badge-outline">
//                 {item.inStock ? (
//                   <span className="text-green-500 font-medium">In Stock</span>
//                 ) : (
//                   <span className="text-red-500 font-medium">Out of Stock</span>
//                 )}
//               </div>
//               <div className="card-actions mt-2 relative">
//                 <div
//                   className="bg-yellow-500 w-[120px] absolute left-5 py-1 cursor-pointer rounded-md text-center text-white"
//                   onClick={() => handleOrder(item)} // Call handleOrder on click
//                 >
//                   Order Now
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Grocery;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _groceryItems = require("../../utils/groceryItems"); // Import the data
var _groceryItemsDefault = parcelHelpers.interopDefault(_groceryItems);
var _s = $RefreshSig$();
const Grocery = ()=>{
    _s();
    // Access the groceryItems from the imported data
    const [data] = (0, _react.useState)((0, _groceryItemsDefault.default)[0]?.groceryItems || []);
    const [orderMessage, setOrderMessage] = (0, _react.useState)(""); // State to store the order message
    const [isInStock, setIsInStock] = (0, _react.useState)(true); // State to store the stock status
    // Handle case where grocery data is empty or undefined
    if (!data.length) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
        children: "No grocery items available."
    }, void 0, false, {
        fileName: "src/Components/Grocery.js",
        lineNumber: 149,
        columnNumber: 12
    }, undefined);
    // Function to handle order placement
    const handleOrder = (item)=>{
        // Check if item is out of stock
        if (!item.inStock) {
            setOrderMessage(`Sorry, "${item.name}" is out of stock.`);
            setIsInStock(false); // Set inStock to false
        } else {
            setOrderMessage(`Your order for "${item.name}" has been placed!`);
            setIsInStock(true); // Set inStock to true
        }
        // Clear the message after a few seconds
        setTimeout(()=>{
            setOrderMessage("");
        }, 3000); // Message disappears after 3 seconds
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "px-20 py-16 bg-zinc-200",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "text-center font-semibold text-5xl mb-10 text-orange-600",
                children: "Our Grocery"
            }, void 0, false, {
                fileName: "src/Components/Grocery.js",
                lineNumber: 171,
                columnNumber: 7
            }, undefined),
            orderMessage && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `w-52 top-44 left-[650px] absolute text-center text-white p-2 rounded-md ${isInStock ? "bg-green-500" : "bg-red-500"}`,
                children: orderMessage
            }, void 0, false, {
                fileName: "src/Components/Grocery.js",
                lineNumber: 175,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-wrap m-10",
                children: data.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "card bg-white w-52 shadow-md p-5 shadow-black transition-all hover:bg-zinc-100 rounded-md m-5 hover:shadow-lg hover:shadow-yellow-700",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("figure", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    className: "rounded-sm h-28 object-contain",
                                    src: item.image,
                                    alt: item.name
                                }, void 0, false, {
                                    fileName: "src/Components/Grocery.js",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Components/Grocery.js",
                                lineNumber: 190,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "card-body",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                        className: "card-title tracking-tight mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                                className: "font-semibold text-zinc-800",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "src/Components/Grocery.js",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "badge badge-secondary text-green-700",
                                                children: [
                                                    "\u20B9",
                                                    item.rate
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/Grocery.js",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/Grocery.js",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "badge badge-outline",
                                        children: item.inStock ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "text-green-500 font-medium",
                                            children: "In Stock"
                                        }, void 0, false, {
                                            fileName: "src/Components/Grocery.js",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "text-red-500 font-medium",
                                            children: "Out of Stock"
                                        }, void 0, false, {
                                            fileName: "src/Components/Grocery.js",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/Components/Grocery.js",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "card-actions mt-2 relative",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: `bg-yellow-500 w-[120px] absolute left-5 py-1 cursor-pointer rounded-md text-center text-white ${!item.inStock ? "bg-red-600 opacity-40 cursor-not-allowed hover:shadow-lg hover:shadow-red-700" : ""}`,
                                            onClick: ()=>handleOrder(item),
                                            children: "Order Now"
                                        }, void 0, false, {
                                            fileName: "src/Components/Grocery.js",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/Components/Grocery.js",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Grocery.js",
                                lineNumber: 193,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, index, true, {
                        fileName: "src/Components/Grocery.js",
                        lineNumber: 186,
                        columnNumber: 11
                    }, undefined))
            }, void 0, false, {
                fileName: "src/Components/Grocery.js",
                lineNumber: 184,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Components/Grocery.js",
        lineNumber: 170,
        columnNumber: 5
    }, undefined);
};
_s(Grocery, "F1F5fdvGsPIKPeEdicS2uTtGnww=");
_c = Grocery;
exports.default = Grocery;
var _c;
$RefreshReg$(_c, "Grocery");

  $parcel$ReactRefreshHelpers$5457.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../utils/groceryItems":"emAvi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"emAvi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const groceryData = [
    {
        "groceryItems": [
            {
                "name": "Apple",
                "image": "https://www.wallpaperflare.com/static/947/293/305/pple-leaves-tail-slice-wallpaper.jpg",
                "rate": 120,
                "inStock": true
            },
            {
                "name": "Banana",
                "image": "https://c0.wallpaperflare.com/preview/923/294/410/bananas-fruit-delicious-sweet.jpg",
                "rate": 40,
                "inStock": true
            },
            {
                "name": "Tomato",
                "image": "https://study.com/cimages/multimages/16/adobestock_34617669.jpeg",
                "rate": 30,
                "inStock": false
            },
            {
                "name": "Milk",
                "image": "https://th.bing.com/th/id/OIP.MS0WMcv0nG9p99uEgpNzZgHaFc?rs=1&pid=ImgDetMain",
                "rate": 50,
                "inStock": true
            },
            {
                "name": "Rice",
                "image": "https://assets.epicurious.com/photos/568eb0bf7dc604b44b5355ee/master/pass/rice.jpg",
                "rate": 60,
                "inStock": false
            },
            {
                "name": "Bread",
                "image": "https://th.bing.com/th/id/OIP.oCGfdttRamtu9d--AT0VCQHaEK?rs=1&pid=ImgDetMain",
                "rate": 40,
                "inStock": true
            },
            {
                "name": "Eggs",
                "image": "https://th.bing.com/th/id/OIP.3gdYsJd4w-Nt-WXZ-b8-PAHaGN?rs=1&pid=ImgDetMain",
                "rate": 100,
                "inStock": true
            },
            {
                "name": "Butter",
                "image": "https://th.bing.com/th/id/OIP.ajWG--KOZKFMguY63sAqIwHaHa?rs=1&pid=ImgDetMain",
                "rate": 80,
                "inStock": false
            },
            {
                "name": "Cheese",
                "image": "https://thumbs.dreamstime.com/b/transparent-packet-slices-cheese-yellow-250661363.jpg",
                "rate": 150,
                "inStock": true
            },
            {
                "name": "Potato",
                "image": "https://th.bing.com/th/id/OIP.zB7AATBDNYVwv3rUfXbYcwHaE8?rs=1&pid=ImgDetMain",
                "rate": 20,
                "inStock": true
            },
            {
                "name": "Onion",
                "image": "https://wallpaperaccess.com/full/1912934.jpg",
                "rate": 25,
                "inStock": false
            },
            {
                "name": "Carrot",
                "image": "https://th.bing.com/th/id/R.a00f32795283bec47221854b722c501c?rik=gQsGCaqyO4MI0Q&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f04%2fCarrot-Wallpaper.jpg&ehk=FvF%2bcVYqHob9dvhCkqogxQmPGuJGPLq%2bOEb5w1ZfkZw%3d&risl=&pid=ImgRaw&r=0",
                "rate": 35,
                "inStock": true
            },
            {
                "name": "Chicken",
                "image": "https://5.imimg.com/data5/IQ/NS/MY-11305339/whole-uncooked-raw-chicken-500x500.jpg",
                "rate": 250,
                "inStock": true
            },
            {
                "name": "Fish",
                "image": "https://th.bing.com/th/id/OIP.NpmqHzmjSS09J7oqzzN9vQHaE8?rs=1&pid=ImgDetMain",
                "rate": 300,
                "inStock": true
            },
            {
                "name": "Pasta",
                "image": "https://foreignfork.com/wp-content/uploads/2022/09/61384775-uncooked-pasta-on-white.webp",
                "rate": 60,
                "inStock": false
            },
            {
                "name": "Flour",
                "image": "https://www.shutterstock.com/image-photo/uncooked-raw-sorghum-flour-also-260nw-1526779562.jpg",
                "rate": 40,
                "inStock": true
            },
            {
                "name": "Salt",
                "image": "https://static.toiimg.com/photo/msid-65754092/65754092.cms",
                "rate": 10,
                "inStock": true
            },
            {
                "name": "Sugar",
                "image": "https://th.bing.com/th/id/OIP.BQ9JkWVKIOSq4eIahlT5AgHaE8?rs=1&pid=ImgDetMain",
                "rate": 45,
                "inStock": false
            },
            {
                "name": "Coconut Oil",
                "image": "https://th.bing.com/th/id/OIP.TS5R2FptGIbvpuvkWjvfuAAAAA?rs=1&pid=ImgDetMain",
                "rate": 180,
                "inStock": true
            },
            {
                "name": "Olive Oil",
                "image": "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
                "rate": 350,
                "inStock": true
            },
            {
                "name": "Beans",
                "image": "https://www.seriouseats.com/thmb/Q_pe8B0iSnvzAY-dXzC0UZNG5X8=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__07__20160707-legumes-red-kidney-beans-vicky-wasik-4-7835e58628a94f3fba1ad8d2defc3137.jpg",
                "rate": 60,
                "inStock": false
            },
            {
                "name": "Lentils",
                "image": "https://thumbs.dreamstime.com/b/brown-uncooked-lentils-plate-16174369.jpg",
                "rate": 70,
                "inStock": true
            },
            {
                "name": "Yogurt",
                "image": "https://www.womansworld.com/wp-content/uploads/2020/07/how-to-make-yogurt-1.jpg?resize=768",
                "rate": 40,
                "inStock": true
            },
            {
                "name": "Orange Juice",
                "image": "https://jooinn.com/images/fresh-orange-juice-4.jpg",
                "rate": 100,
                "inStock": false
            },
            {
                "name": "Jam",
                "image": "https://th.bing.com/th/id/OIP.22Qt2Laj9q_onsll6CtmMAHaFS?rs=1&pid=ImgDetMain",
                "rate": 250,
                "inStock": false
            }
        ]
    }
];
exports.default = groceryData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2mnoL","1xC6H"], null, "parcelRequire164e")

//# sourceMappingURL=Grocery.8992fa2f.js.map
