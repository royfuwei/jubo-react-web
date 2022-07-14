export interface ICompoenetBaseProps<T> {
    name?: string; 
    content?: T;
    count?: number;
    writeable?: boolean;
    actions?: string[];
}