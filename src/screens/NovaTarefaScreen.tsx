import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Botao } from '../components/Botao';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'NovaTarefa'> & {
  aoSalvar: (titulo: string) => void;
};

export function NovaTarefaScreen({ navigation, aoSalvar }: Props) {
  const [titulo, setTitulo] = useState('');
  const [erro, setErro] = useState('');

  const salvarTarefa = () => {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      setErro('Digite um nome para a tarefa.');
      return;
    }

    aoSalvar(tituloLimpo);
    navigation.goBack();
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.rotulo}>O que você precisa fazer?</Text>
      <TextInput
        accessibilityLabel="Nome da tarefa"
        onChangeText={(texto) => {
          setTitulo(texto);
          setErro('');
        }}
        placeholder="Ex.: estudar para a prova"
        style={styles.campo}
        value={titulo}
        maxLength={80}
        returnKeyType="done"
        onSubmitEditing={salvarTarefa}
      />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <Botao texto="Salvar tarefa" aoPressionar={salvarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 20,
  },
  rotulo: {
    color: '#24364b',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  campo: {
    backgroundColor: '#ffffff',
    borderColor: '#d0d5dd',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    minHeight: 50,
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  erro: {
    color: '#b42318',
    marginBottom: 12,
  },
});
