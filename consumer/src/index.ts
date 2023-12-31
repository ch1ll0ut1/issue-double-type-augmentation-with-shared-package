import { EventsEditor, LawElement, TextNode } from "shared";
import { BaseEditor, Editor, Range } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

// Note: Error is hidden when file end with .d.ts
// declare module 'slate' {
//     interface CustomTypes {
//         // Throws Error: Subsequent property declarations must have the same type.  Property 'Editor' must be of type 'BaseEditor & EventsEditor & HistoryEditor', but here has type 'BaseEditor & EventsEditor & HistoryEditor & ReactEditor'.ts(2717)
//         Editor: BaseEditor & EventsEditor & HistoryEditor & ReactEditor;
//         Element: LawElement;
//         Text: TextNode;
//     }
// }

// Solution: augment new type of shared package, which is used to augment slates CustomTypes.Editor
declare module 'shared' {
    interface LawEditor extends ReactEditor {}
}

// Test types working properly
function test(editor: Editor) {
    // use random method of ReactEditor
    const range: Range = {
        anchor: {
            path: [],
            offset: 0,
        },
        focus: {
            path: [],
            offset: 0,
        },
    }
    editor.hasRange(editor, range)

    // use property of EventsEditor
    editor.events.forEach(event => event.id)
}