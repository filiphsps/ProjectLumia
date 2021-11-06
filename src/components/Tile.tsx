import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TileData, TileSize } from '../models/Tile';

import styled from 'styled-components';

const TileWrapper = styled(View)`
    flex: 1;
    justify-content: flex-end;
    padding: 3px;
    margin: 3px;
`;

const Content = styled(View)`
    flex: 1;
    justify-content: flex-start;
    color: inherit;
`;

const Label = styled(Text)`
    font-size: 14px;
    line-height: 14px;
    color: inherit;
`;

interface TileProps {
    data: TileData;
}
export const Tile: FunctionComponent<TileProps> = ({ data }) => {
    const { label, accent, size, empty, contents } = data;

    let width, height;
    switch (size) {
        case TileSize.Small:
            width = 65;
            height = 65;
            break;
        case TileSize.Wide:
            width = 270;
            height = 135;
            break;
        default:
        case TileSize.Regular:
            width = 135;
            height = 135;
            break;
    }

    if (empty) return <TileWrapper />;
    return (
        <TileWrapper
            style={{
                backgroundColor: accent.background,
                minHeight: height,
                minWidth: width
            }}
        >
            <Content />
            <Label style={{ color: accent.foreground }}>{size !== TileSize.Small && label}</Label>
        </TileWrapper>
    );
};
