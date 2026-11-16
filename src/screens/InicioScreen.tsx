import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Botao } from '../components/Botao';
import { MensagemVazia } from '../components/MensagemVazia';
import { TarefaItem } from '../components/TarefaItem';
import { RootStackParamList, Tarefa } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'> & {
  tarefas: Tarefa[];
  aoMarcarTarefa: (id: string) => void;
};

export function InicioScreen({ navigation, tarefas, aoMarcarTarefa }: Props) {
  useEffect(() => {
    navigation.setOptions({ title: `Minhas tarefas (${tarefas.length})` });
  }, [navigation, tarefas.length]);

  const abrirDetalhes = (tarefa: Tarefa) => {
    navigation.navigate('Detalhes', { tarefa });
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.introducao}>Organize o que você precisa fazer.</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            aoAbrir={() => abrirDetalhes(item)}
            aoMarcar={() => aoMarcarTarefa(item.id)}
          />
        )}
        ListEmptyComponent={
          <MensagemVazia
            texto="Adicione sua primeira tarefa."
          />
        }
        contentContainerStyle={styles.lista}
      />

      <Botao texto="Adicionar tarefa" aoPressionar={() => navigation.navigate('NovaTarefa')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 20,
  },
  introducao: {
    color: '#667085',
    fontSize: 16,
    marginBottom: 18,
  },
  lista: {
    flexGrow: 1,
    paddingBottom: 16,
  },
});
