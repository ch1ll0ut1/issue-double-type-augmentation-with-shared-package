import { BaseEditor, Descendant, Text } from "slate";
import { HistoryEditor } from "slate-history";

declare module 'slate' {
    interface CustomTypes {
        Editor: LawEditor;
        Element: LawElement;
        Text: TextNode;
    }
}

export interface Event {
    id: string;
    originId: string;
    type: 'added' | 'removed' | 'changed';
}

export interface EventsEditor extends BaseEditor {
    events: Event[];
}

export interface LawEditor extends BaseEditor, EventsEditor, HistoryEditor {};

export type LawElement = List | Paragraph;

export interface TextNode {
    text: string;
    title?: boolean;
    name?: boolean;
    nr?: string;
    bold?: boolean;
}

export interface List {
    type: 'list';
    children: Descendant[];
    meta?: {};
}

export interface Paragraph {
    type: 'paragraph';
    children: Text[];
}