import React, { useState } from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import TotalCard from './src/components/TotalCard';
import FormularioGasto from './src/components/FormularioGasto';
import Resumen from './src/components/Resumen';
import ListaGastos from './src/components/ListaGastos';
export default function App() {
  const [gastos, setGastos] = useState([
    { id: 1, descripcion: 'Supermercado', monto: 15000, categoria: 'Alimentación' },
    { id: 2, descripcion: 'Nafta', monto: 20000, categoria: 'Transporte' },
    { id: 3, descripcion: 'Café', monto: 3500, categoria: 'Alimentación' },
  ]);
  const [proximoId, setProximoId] = useState(4);

  const agregarGasto = (datos) => {
    setGastos([...gastos, { id: proximoId, ...datos }]);
    setProximoId(proximoId + 1);
  };

  const eliminarGasto = (id) => {
    setGastos(gastos.filter((g) => g.id !== id));
  };

  const total = gastos.reduce((acc, g) => acc + g.monto, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Gestor de gastos</Text>
        <TotalCard total={total} />
        <FormularioGasto onAgregar={agregarGasto} />
        <Resumen gastos={gastos} />
        <ListaGastos gastos={gastos} onEliminar={eliminarGasto} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#a4a5a4' },
  container: { padding: 16, paddingBottom: 40 },
  titulo: {fontSize: 26, fontWeight: 'bold', marginBottom: 12, marginTop: 20 },
});