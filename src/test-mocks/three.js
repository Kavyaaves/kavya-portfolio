// Minimal stub used only under Jest: three.js ships ESM-only builds that
// CRA's fixed Jest babel transform cannot parse without ejecting.
class Noop {
  constructor() {}
  set() { return this; }
  add() { return this; }
  position = { set: () => {}, x: 0, y: 0, z: 0 };
  updateProjectionMatrix() {}
  setSize() {}
  setPixelRatio() {}
  render() {}
  getElapsedTime() { return 0; }
  setAttribute() {}
}

module.exports = new Proxy(
  {},
  {
    get: () => Noop,
  }
);
