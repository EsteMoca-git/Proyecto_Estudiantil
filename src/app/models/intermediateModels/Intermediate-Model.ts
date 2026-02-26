export interface IntermediateModel {
    id: string;
    title: string;
    items: IntermediateItem[];
}

export interface IntermediateItem {
    id: string;
    name: string;
    route: string;
    content?: string;
    component?: string;
}
