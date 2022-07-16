export interface ICompoenetBaseProps<T = any> {
    name?: string; 
    content?: T;
    count?: number;
    writeable?: boolean;
    actions?: string[];
}