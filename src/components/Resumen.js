import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { CATEGORIAS } from '../constants/categorias';
import { formatearMonto } from '../utils/formato';

export default function Resumen({ gastos }) {
  const totalPorCategoria = CATEGORIAS.map((cat) => ({
    categoria: cat,
    total: gastos
      .filter((g) => g.categoria === cat)
      .reduce((acc, g) => acc + g.monto, 0),
  }));

  let gastoMasAlto = null;
  for (const g of gastos) {
    if (gastoMasAlto === null || g.monto > gastoMasAlto.monto) {
      gastoMasAlto = g;
    }
  }

  return (
    <Card>
      <Text style={styles.seccion}>Resumen</Text>
      <Text style={styles.linea}>Cantidad de gastos: {gastos.length}</Text>
      <Text style={styles.linea}>
        Gasto más alto:{' '}
        {gastoMasAlto
          ? `${gastoMasAlto.descripcion} (${formatearMonto(gastoMasAlto.monto)})`
          : '-'}
      </Text>

      <Text style={styles.label}>Por categoría</Text>
      {totalPorCategoria.map((item) => (
        <View key={item.categoria} style={styles.fila}>
          <Text style={styles.linea}>{item.categoria}</Text>
          <Text style={styles.lineaBold}>{formatearMonto(item.total)}</Text>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  seccion: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  label: { fontWeight: '600', marginTop: 10, marginBottom: 6 },
  linea: { fontSize: 15, marginBottom: 4 },
  lineaBold: { fontSize: 15, fontWeight: '600' },
  fila: { flexDirection: 'row', justifyContent: 'space-between' },
});