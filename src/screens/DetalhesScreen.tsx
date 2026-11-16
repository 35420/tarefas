import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export function DetalhesScreen({ route }: Props) {
  const { tarefa } = route.params;

  return (
    <View style={styles.tela}>
      <Text style={styles.rotulo}>Tarefa</Text>
      <Text style={styles.titulo}>{tarefa.titulo}</Text>
      <Text style={styles.status}>
        Status: {tarefa.concluida ? 'Concluída' : 'A fazer'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 20,
  },
  rotulo: {
    color: '#667085',
    fontSize: 14,
    marginBottom: 8,
  },
  titulo: {
    color: '#24364b',
    fontSize: 24,
    fontWeight: '700',
  },
  status: {
    color: '#475467',
    fontSize: 16,
    marginTop: 16,
  },
});
