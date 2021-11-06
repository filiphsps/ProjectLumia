export enum TileSize {
    Small = 0,
    Regular = 1,
    Wide = 2
}

export interface TileData {
    label?: string;
    accent: {
        background: string;
        foreground: string;
    };
    empty?: boolean;
    size: TileSize;
    contents?: any[];
}
