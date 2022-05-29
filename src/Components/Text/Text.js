import React from 'react';
import {Text as RnText,StyleSheet } from 'react-native';
import { presets } from './Text.preset';


export default function Text({ children,preset="default",style }) {
const textStyles=StyleSheet.compose(presets[preset],style)
    return <RnText style={textStyles}>{children}</RnText>;
}

