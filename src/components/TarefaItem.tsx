import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Tarefa } from '../navigation/types';

type Props = {
  tarefa: Tarefa;
  aoAbrir: () => void;
  aoMarcar: () => void;
};

export function TarefaItem({ tarefa, aoAbrir, aoMarcar }: Props) {
  return (
    <View style={styles.cartao}>
      <Pressable
        accessibilityRole="button"
        onPress={aoAbrir}
        style={styles.conteudo}
      >
        <Text style={[styles.titulo, tarefa.concluida && styles.concluida]}>
          {tarefa.titulo}
        </Text>
        <Text style={styles.subtitulo}>
          {tarefa.concluida ? 'Concluída' : 'Toque para ver os detalhes'}
        </Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={tarefa.concluida ? 'Desmarcar tarefa' : 'Concluir tarefa'}
        onPress={aoMarcar}
        style={styles.botaoMarcar}
      >
        <Text style={styles.textoBotao}>{tarefa.concluida ? 'Desfazer' : 'Feita'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 16,
  },
  conteudo: {
    flex: 1,
    paddingRight: 10,
  },
  titulo: {
    color: '#24364b',
    fontSize: 16,
    fontWeight: '600',
  },
  concluida: {
    color: '#667085',
    textDecorationLine: 'line-through',
  },
  subtitulo: {
    color: '#667085',
    fontSize: 13,
    marginTop: 5,
  },
  botaoMarcar: {
    backgroundColor: '#eaf0f6',
    borderRadius: 8,
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  textoBotao: {
    color: '#315f91',
    fontWeight: '600',
  },
});
