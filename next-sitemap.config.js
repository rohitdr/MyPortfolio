
const siteUrl = "https://rohitdevstack.online";

module.exports = {
  siteUrl,

  generateRobotsTxt: true,

  sitemapSize: 5000,

  generateIndexSitemap: false,

  changefreq: "weekly",

  priority: 0.7,

  autoLastmod: true,

  exclude: [
    "/api/*",
    "/server-sitemap.xml",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};