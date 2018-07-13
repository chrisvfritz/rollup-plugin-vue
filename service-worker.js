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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a4abab98ed735c13367c865044cb8ed"
  },
  {
    "url": "assets/css/6.styles.45ac861a.css",
    "revision": "582f8a61b9cec8b5391ed5c3b441a062"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ecc0d05a.js",
    "revision": "8d720d9503c0343a3a46b73cb71578c6"
  },
  {
    "url": "assets/js/1.207899a9.js",
    "revision": "acd5c08a40c0dc78623e3f8a46a05a2d"
  },
  {
    "url": "assets/js/2.fc61ad7d.js",
    "revision": "2d6223f8b5d0ab76b71103d3f1ae9011"
  },
  {
    "url": "assets/js/3.07729f55.js",
    "revision": "702d93681ab75ec24aa290cc491b27d0"
  },
  {
    "url": "assets/js/4.2a2234c4.js",
    "revision": "367db1ba4a8ddb23cbbac114f9f0c209"
  },
  {
    "url": "assets/js/5.5daf82f2.js",
    "revision": "a9a2895f0826b9fc300ba8f91eab6e58"
  },
  {
    "url": "assets/js/app.68276e36.js",
    "revision": "b1e9243aab9b874b7e03629837d68b0a"
  },
  {
    "url": "changelog.html",
    "revision": "69ca251d6031b57036f2c6fa363c8ab8"
  },
  {
    "url": "cookbook/index.html",
    "revision": "aaf8fd67637cdf91ca4cf2e858324ca5"
  },
  {
    "url": "guide/index.html",
    "revision": "c12732a7c7c95eab7d6fd2565a01817c"
  },
  {
    "url": "index.html",
    "revision": "4bdf08f767f46df6c539d937be0ce341"
  },
  {
    "url": "logo.png",
    "revision": "b8c50251399a8890d798d2d531ca4d3b"
  },
  {
    "url": "migrating.html",
    "revision": "32bc4946d306770866dd89df3d9b16f2"
  },
  {
    "url": "options.html",
    "revision": "d390206aeff596a85968cbfdaf2f43b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
