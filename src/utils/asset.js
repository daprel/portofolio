// Resolve a file in public/ against the deploy base path (e.g. /portofolio/).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
