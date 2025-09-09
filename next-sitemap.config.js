/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://trevorab.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}

