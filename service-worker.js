/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f45bbf3079f3868fa25caf7f4864fdc"
  },
  {
    "url": "assets/css/0.styles.5e6f9d11.css",
    "revision": "51e4deea9fcb7787519ca5d0fe058aa8"
  },
  {
    "url": "assets/generated_output.png",
    "revision": "f3c20eaa6ef4fddae066f67a7d7707e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d59f2643.js",
    "revision": "1effc6a328557d741629157b576af724"
  },
  {
    "url": "assets/js/11.d8b27c56.js",
    "revision": "660f70c79157945e07d931a0950ff5b5"
  },
  {
    "url": "assets/js/12.75fe0341.js",
    "revision": "1c64c3e22c721b997bc4fda59adb9fdb"
  },
  {
    "url": "assets/js/13.3231285b.js",
    "revision": "caf21b25b9a890eefa2361e789b72ccd"
  },
  {
    "url": "assets/js/14.34439641.js",
    "revision": "bcf8c53320aec69fe5bd35dfd1ee1a16"
  },
  {
    "url": "assets/js/15.d2b0d7e4.js",
    "revision": "63d7d4be9e820670cec8781149c6d19c"
  },
  {
    "url": "assets/js/16.992a25df.js",
    "revision": "416f2cd25fb80c4e32ec3ee951efb275"
  },
  {
    "url": "assets/js/17.c0535a8a.js",
    "revision": "e63192d0afbc8997193bfaa047af404e"
  },
  {
    "url": "assets/js/18.9b737105.js",
    "revision": "93bdda50034ece33b224a815c3c0b24d"
  },
  {
    "url": "assets/js/19.714178c8.js",
    "revision": "8d836237fb10eb1cb2d02dfe05a54198"
  },
  {
    "url": "assets/js/2.c7703654.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.2646c1af.js",
    "revision": "cc49689dbf19172881f84e3918059e89"
  },
  {
    "url": "assets/js/4.0266fb51.js",
    "revision": "e631c22c84ccfd8c745eea8affe2ff20"
  },
  {
    "url": "assets/js/5.8e3e3513.js",
    "revision": "7b831d217c1cf51524fb121b8167de9e"
  },
  {
    "url": "assets/js/6.ad9a78cd.js",
    "revision": "59ae92931592e8fb31f0156a6b43b1a5"
  },
  {
    "url": "assets/js/7.d8302786.js",
    "revision": "69f22e1290c595aec89156f9bce74f84"
  },
  {
    "url": "assets/js/8.33231265.js",
    "revision": "1817c2a2aa360ead7424815d7cbc4c5f"
  },
  {
    "url": "assets/js/9.64a7e10d.js",
    "revision": "03181598bcc49d0f0e5367ff1b8473f7"
  },
  {
    "url": "assets/js/app.d9a791a0.js",
    "revision": "f526392fac569c919b8592e4f71b7ffb"
  },
  {
    "url": "assets/macaca-architecture-2.0.png",
    "revision": "196aa63a061930c2c838d05cf3f088ec"
  },
  {
    "url": "assets/new_report_layout.png",
    "revision": "6b89e34146bf9b2bb3902528c87e2042"
  },
  {
    "url": "assets/nosmoke-2.0.png",
    "revision": "21d85f66bc9b95fa843e2d828a89b6f5"
  },
  {
    "url": "assets/nosmoke-hook-2.0.png",
    "revision": "85fbe8277bcac3d90500caaf804a7c37"
  },
  {
    "url": "guide/configuration.html",
    "revision": "7a340ee4a80640f4c69e367a35d0632b"
  },
  {
    "url": "guide/continious-integration.html",
    "revision": "f0264dd42ddfcf4ea30e74440983cc14"
  },
  {
    "url": "guide/cross-platform.html",
    "revision": "15f9928a54a032cd0b8af865c8da7dfc"
  },
  {
    "url": "guide/hooks.html",
    "revision": "ef49f39d3b3b7f9882585abf230b32e3"
  },
  {
    "url": "guide/index.html",
    "revision": "4aff2bddd3c40debdbb9d2ec3c26d5d6"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "cd3a643e01223cea438f834b58fa5dcb"
  },
  {
    "url": "guide/roadmap.html",
    "revision": "3ad9e99a8a7182f2dd182f16b07f4417"
  },
  {
    "url": "index.html",
    "revision": "279307d9e15fd0f2b5f50c11d9683ab1"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "194fe14b9ed0fbd5167eebd0d5065b5f"
  },
  {
    "url": "zh/guide/continious-integration.html",
    "revision": "1d820497f530724998dda0dfd133949f"
  },
  {
    "url": "zh/guide/cross-platform.html",
    "revision": "57a87ac6e25c2b00d0c80e491ebdce5c"
  },
  {
    "url": "zh/guide/hooks.html",
    "revision": "83ad0dca5fd8f31f7ca8b726a140299f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5eebcce6088e2c620acafe0e29328add"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "4303a0a7584718966f278b8220bb3526"
  },
  {
    "url": "zh/guide/roadmap.html",
    "revision": "43d8f1bb142940b2a151ed77ba949b56"
  },
  {
    "url": "zh/index.html",
    "revision": "4cb2af1a1a2bd0ba45617e7059abd64a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
