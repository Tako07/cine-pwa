/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-8c259edc'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "icon_128x128.78cdf6b72dab4fb291b0a3c468222e92.png",
    "revision": "78cdf6b72dab4fb291b0a3c468222e92"
  }, {
    "url": "icon_192x192.60978d9bcf9cbd5f7b5824595378f4d4.png",
    "revision": "60978d9bcf9cbd5f7b5824595378f4d4"
  }, {
    "url": "icon_256x256.38c69f6fd13329de25f6fbb76f48a18d.png",
    "revision": "38c69f6fd13329de25f6fbb76f48a18d"
  }, {
    "url": "icon_384x384.0aac0c4e3b18144ddce46e15579ebd2e.png",
    "revision": "0aac0c4e3b18144ddce46e15579ebd2e"
  }, {
    "url": "icon_512x512.bec6ef767a8c39386c31b18ef2fbb642.png",
    "revision": "bec6ef767a8c39386c31b18ef2fbb642"
  }, {
    "url": "icon_96x96.9acd42e0fd19fe4f751f157b3fa1365c.png",
    "revision": "9acd42e0fd19fe4f751f157b3fa1365c"
  }, {
    "url": "index.html",
    "revision": "a15071535c7a80f0e722c65dbd54ef08"
  }, {
    "url": "manifest.77e681932de1e7e1101b97ade80c7d38.json",
    "revision": "77e681932de1e7e1101b97ade80c7d38"
  }], {});
  workbox.registerRoute(/https:\/\/res.cloudinary.com/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
