const config = {
  head: {
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.0.min.js",
        type: "text/javascript",
      },
    ],
  },
  css: [{ src: "~/assets/app.css", lang: "css" }],
  // plugins: [{ src: "~/plugins/zoom.js", ssr: false }],
};

module.exports = config;
