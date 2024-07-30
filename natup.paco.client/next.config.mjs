/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(nextConfig) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = nextConfig.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    nextConfig.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { icon: true, replaceAttrValues: { '#000': "currentColor" } } }]
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return nextConfig
  },

  // ...other config
};

export default nextConfig;
