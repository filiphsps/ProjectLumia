import { TileData } from '../models/Tile';

export const GenerateGrid = (data: TileData[], width: number = 3) => {
    const grid: Array<Array<TileData | TileData[]>> = [];

    for (let i = 0; i < data.length; ) {
        const row = [];
        let row_width = 0;
        for (let n = 0; n < width; n++) {
            const tile = data[i + n];
            if (!tile) break;

            row.push(tile);
            row_width += tile.size;

            if (row_width >= width) break;
        }
        grid.push(row);
        i += row.length;
    }

    return grid;
};
