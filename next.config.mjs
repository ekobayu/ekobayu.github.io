/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ekobayu-profile.github.io/',
  output: 'export'
  // swcMinify: false,
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

export default nextConfig
