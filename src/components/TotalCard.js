import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatearMonto } from '../utils/formato';

export default function TotalCard({ total }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total gastado</Text>
      <Text style={styles.monto}>{formatearMonto(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3b3f45',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  label: { color: '#dbe7ff', fontSize: 14 },
  monto: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
});