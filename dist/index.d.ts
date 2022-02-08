export interface IconsSet {
    [name: string]: (string | number)[];
}
export interface IconObj {
    width: number;
    height: number;
    paths: string[];
}
export declare function addFamily(name: string, set: IconsSet): void;
export declare function getFamilies(): {
    [name: string]: IconsSet;
};
export declare function getFamily(name: string): IconsSet | undefined;
export declare function getIcon(family: string, name: string): IconObj;
export declare function makeIcon(family: string, name: string, classes?: string[]): string;
