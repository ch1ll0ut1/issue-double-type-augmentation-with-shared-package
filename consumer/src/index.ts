import { EventsEditor, LawElement, TextNode } from "shared";
import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

// Note: Error is hidden when file end with .d.ts
declare module 'slate' {
    interface CustomTypes {
        // Throws Error: Subsequent property declarations must have the same type.  Property 'Editor' must be of type 'BaseEditor & EventsEditor & HistoryEditor', but here has type 'BaseEditor & EventsEditor & HistoryEditor & ReactEditor'.ts(2717)
        Editor: BaseEditor & EventsEditor & HistoryEditor & ReactEditor;
        Element: LawElement;
        Text: TextNode;
    }
}