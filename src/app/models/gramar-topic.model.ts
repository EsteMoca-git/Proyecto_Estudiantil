import { CompletarEjercicio } from "./completar";

export interface GramarTopic {
    id: string;
    title: string;
    exercise: CompletarEjercicio[]
}