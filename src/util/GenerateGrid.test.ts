import { GenerateGrid } from './GenerateGrid';
import { TileSize } from '../models/Tile';

describe('utils', () => {
    describe('GenerateGrid', () => {
        it('output a valid grid', () => {
            const grid = GenerateGrid(
                [
                    // 1st row
                    {
                        size: TileSize.Regular
                    },
                    {
                        size: TileSize.Regular
                    },
                    {
                        size: TileSize.Regular
                    },
                    // 2nd row
                    {
                        size: TileSize.Wide
                    },
                    {
                        size: TileSize.Regular
                    },
                    // 3rd row
                    {
                        size: TileSize.Regular
                    },
                    {
                        size: TileSize.Wide
                    }
                ] as any,
                3
            );

            expect(grid).toStrictEqual([
                [
                    { size: TileSize.Regular },
                    { size: TileSize.Regular },
                    { size: TileSize.Regular }
                ],
                [{ size: TileSize.Wide }, { size: TileSize.Regular }],
                [{ size: TileSize.Regular }, { size: TileSize.Wide }]
            ]);
        });
    });
});
