export interface AvanzadoModel {
    id: string;
    title: string;
    items: AvanzadoItem[];
}

export interface AvanzadoItem {
    id: string;
    name: string;
    route: string;
    content?: string;
    component?: string;
}
