/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

    return config;
  },
  // images: {
  //   domains: [
  //     "uploadthing.com"
  //   ]
  // }
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io"
    ]
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'www.uploadthing.com',
  //       // You can add these as well
  //       // port: '',
  //       // pathname: 'arifscloud/image/upload/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
