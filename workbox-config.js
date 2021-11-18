module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{css,ttf,ico,png,icns,jpg,htm,html,js,json}"
  ],
  
  "swDest": "sw.js",
   runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:mp3)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'audio',

      // Only cache 10 images.
      expiration: {
        maxEntries: 30,
      },
    },
  }],

};
