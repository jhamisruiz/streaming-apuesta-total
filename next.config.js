module.exports = {
    output: 'standalone',
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
        domains: ["image.tmdb.org"],
    },
};
