interface Prova {
  id: string;
  nome: string;
  data_prova: string;
  modalidade_de_ingresso_id: string;
  created_at: string;
  edited_at: string;
}

interface ProvaCreateProps {
  nome: string;
  data_prova: string;
  modalidade_de_ingresso_id: string;
}

interface ProvaUpdateProps {
  id: string;
  nome: string;
  data_prova: string;
  modalidade_de_ingresso_id: string;
  edited_at: string;
}
