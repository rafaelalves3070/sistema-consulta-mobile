import { Especialidade } from "../types/especialdiade";
export interface Medico {
    id: number;
    nome: string;
    crm: string;
    especialidade: Especialidade;
    ativo: boolean;
}