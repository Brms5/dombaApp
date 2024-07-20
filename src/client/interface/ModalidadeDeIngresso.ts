interface ModalidadeDeIngresso {
  id: string;
  modalidade: string;
  data_inscricao_inicio: string;
  data_inscricao_final: string;
  data_isencao: string;
  valor: string;
  link: string;
  criterio_id: string | null;
  instituicao_id: string;
  created_at: string;
  edited_at: string;
}

interface ModalidadeDeIngressoCreateProps {
  modalidade: string;
  data_inscricao_inicio: string;
  data_inscricao_final: string;
  data_isencao: string;
  valor: string;
  link: string;
  instituicao_id: string;
}
