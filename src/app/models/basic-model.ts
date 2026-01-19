export interface BasicModel {
    id: string;
    title: string;
    items: BasicItem[];
}
export interface BasicItem {
    id: string;
    name: string;
    route: string;
    content?: string;
}