// Minimal stub used only under Jest: @sanity/client ships ESM-only builds
// that CRA's fixed Jest babel transform cannot parse without ejecting.
module.exports = {
  createClient: () => ({
    create: () => Promise.resolve({}),
  }),
};
