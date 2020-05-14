import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backroundColor: 'tan'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

function Print(props) {
    console.log('this is on print', props)
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>

                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>

        </Document>
    )
}

export default Print