"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIcon = exports.getIcon = exports.getFamily = exports.getFamilies = exports.addFamily = void 0;
const _SVGI_FAMILIES_ = {};
function addFamily(name, set) {
    if (!name.length)
        return;
    _SVGI_FAMILIES_[name] = set;
}
exports.addFamily = addFamily;
function getFamilies() {
    return _SVGI_FAMILIES_;
}
exports.getFamilies = getFamilies;
function getFamily(name) {
    return _SVGI_FAMILIES_[name];
}
exports.getFamily = getFamily;
function getIcon(family, name) {
    var _a;
    const set = _SVGI_FAMILIES_[family];
    if (set !== undefined) {
        const values = (_a = set[name]) !== null && _a !== void 0 ? _a : [0, 0, ''];
        return {
            width: typeof values[0] === 'number' ? values[0] : 0,
            height: typeof values[1] === 'number' ? values[1] : 0,
            paths: typeof values[2] === 'string' ? values[2].split('|') : []
        };
    }
    return {
        width: 0,
        height: 0,
        paths: []
    };
}
exports.getIcon = getIcon;
function makeIcon(family, name, classes) {
    const icon = getIcon(family, name);
    const classList = [family, `${family}-${name}`];
    if (classes && classes.length) {
        classList.push(...classes);
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" class=${classList.filter((e) => e.length).join(' ')} data-name=${name} role="img" aria-hidden="true" viewBox=${`0 0 ${icon.width} ${icon.height}`}>${icon.paths.map((path, p) => `<path fill="currentColor" class=${['path', `path-${p + 1}`].join(' ')} d=${path} />`)}</svg>`;
}
exports.makeIcon = makeIcon;
