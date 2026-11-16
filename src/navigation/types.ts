export type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};

export type RootStackParamList = {
  Inicio: undefined;
  NovaTarefa: undefined;
  Detalhes: { tarefa: Tarefa };
};
