export interface AvanzadoModel {
    id: string;
    title: string;
    items: AvanzadoItem[];
}

export interface AvanzadoItem {
    id: string;
    name: string;
    route?: string;
    content?: string;
    theory?: Theory;
}

export interface Theory {
    description: string;
    formula: Formula;
    examples: string[];
}

export interface Formula {
    affirmative: string;
    negative: string;
    question: string;
}