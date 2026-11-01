import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { formatearMonto } from '../utils/formato';

export default function ItemGasto({ gasto, onEliminar }) {
  return (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.descripcion}>{gasto.descripcion}</Text>
        <Text style={styles.detalle}>
          {formatearMonto(gasto.monto)} - {gasto.categoria}
        </Text>
      </View>
      <Button title="Eliminar" color="#c0392b" onPress={() => onEliminar(gasto.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f5',
  },
  descripcion: { fontSize: 16, fontWeight: '600' },
  detalle: { color: '#555' },
});