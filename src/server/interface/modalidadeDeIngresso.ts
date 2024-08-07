interface ModalidadeDeIngressoCreate {
    modalidade: string;
    data_inscricao_inicio: string;
    data_inscricao_final: string;
    data_isencao: string;
    valor: string;
    link: string;
}

interface ModalidadeDeIngressoUpdate {
    id: string;
    modalidade: string;
    data_inscricao_inicio: string;
    data_inscricao_final: string;
    data_isencao: string;
    valor: string;
    link: string;
    edited_at: string;
}
