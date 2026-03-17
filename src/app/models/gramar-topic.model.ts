import { CompletarEjercicio } from "../models/completar";

export interface GramarTopic {
    id: string;
    title: string;
    exercises: CompletarEjercicio[]
}