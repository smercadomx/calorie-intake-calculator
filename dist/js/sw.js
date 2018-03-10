'use strict';

self.addEventListener('install', function (e) {
  console.log(e);
});

self.addEventListener('activate', function (e) {
  console.log(e);
});

self.addEventListener('fetch', function (e) {
  console.log(e);
});