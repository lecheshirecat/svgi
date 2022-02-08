/**
 * SVG Icon Maker
 *
 * @version 1.0.0
 * @author Charlie LEDUC <contact@graphique.io>
 */

export interface IconsSet {
    [name: string]: (string | number)[]
}

export interface IconObj {
    width: number
    height: number
    paths: string[]
}

const _SVGI_FAMILIES_: { [name: string]: IconsSet } = {}

export function addFamily(name: string, set: IconsSet): void {
    if (!name.length) return
    _SVGI_FAMILIES_[name] = set
}

export function getFamilies(): { [name: string]: IconsSet } {
    return _SVGI_FAMILIES_
}

export function getFamily(name: string): IconsSet | undefined {
    return _SVGI_FAMILIES_[name]
}

export function getIcon(family: string, name: string): IconObj {
    const set = _SVGI_FAMILIES_[family]
    if (set !== undefined) {
        const values: (string | number)[] = set[name] ?? [0, 0, '']
        return {
            width: typeof values[0] === 'number' ? values[0] : 0,
            height: typeof values[1] === 'number' ? values[1] : 0,
            paths: typeof values[2] === 'string' ? values[2].split('|') : []
        }
    }

    return {
        width: 0,
        height: 0,
        paths: []
    }
}

export function makeIcon(family: string, name: string, classes?: string[]) {
    const icon = getIcon(family, name)
    const classList = [family, `${family}-${name}`]
    if (classes && classes.length) {
        classList.push(...classes)
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" class=${classList.filter((e) => e.length).join(' ')} data-name=${name} role="img" aria-hidden="true" viewBox=${`0 0 ${icon.width} ${icon.height}`}>${icon.paths.map((path, p) => `<path fill="currentColor" class=${['path', `path-${p + 1}`].join(' ')} d=${path} />`)}</svg>`
}
