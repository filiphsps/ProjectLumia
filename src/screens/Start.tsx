import { Col, Grid, Row } from 'react-native-easy-grid';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Tile, TileData, TileSize } from '../components/Tile';

import { AccentColors } from '../styles/accents';
import { GenerateGrid } from '../util/GenerateGrid';
import styled from 'styled-components';

const Column = styled(Col)`
    margin: 0px;
`;

interface StartScreenProps {}
export const StartScreen: FunctionComponent<StartScreenProps> = () => {
    const data: TileData[] = [
        {
            label: 'Regular',
            accent: AccentColors.cobalt,
            size: TileSize.Regular,
            contents: ['Content 1', 'Second Content', 'Content three']
        },
        {
            label: 'Wide',
            accent: AccentColors.cobalt,
            size: TileSize.Wide
        },
        {
            label: 'Wide',
            accent: AccentColors.cobalt,
            size: TileSize.Wide
        },
        {
            label: 'Regular',
            accent: AccentColors.cobalt,
            size: TileSize.Regular
        },
        {
            label: 'Wide',
            accent: AccentColors.cobalt,
            size: TileSize.Wide
        },
        {
            label: 'Regular',
            accent: AccentColors.cobalt,
            size: TileSize.Regular
        }
    ];

    const grid = GenerateGrid(data);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <Grid>
                    {grid.map((row) => (
                        <Row>
                            {row.map((tile, index) =>
                                !Array.isArray(tile) ? (
                                    <Column key={index} size={tile.size}>
                                        <Tile data={tile} />
                                    </Column>
                                ) : null
                            )}
                        </Row>
                    ))}
                </Grid>
            </ScrollView>
        </SafeAreaView>
    );
};
