export interface inglesDesdeCeroModel {
    id: string;
    title: string;
    items: InglesDesdeCeroItem[];
}

export interface InglesDesdeCeroItem {
    id: string;
    name: string;
    route: string;
    content?: string;
    component?: string;
}
