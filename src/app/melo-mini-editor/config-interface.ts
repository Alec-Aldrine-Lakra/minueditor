export default interface EditorConfig {
    file?: boolean;
    mentionedNames?: MentionedName[];
    mentionedDates?: string[];
    colorPalette?: string[];
    buttonName?: string;
    fontColor?: boolean;
    highlightColor?: boolean;
    toolbarPlacement?: 'top' | 'bottom';
    placeholder?: string;
}

interface MentionedName {
    _id: string;
    name: string;
}

