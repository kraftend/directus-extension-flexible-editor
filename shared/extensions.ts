// Used for `/content` and `/src/display`
// Add only extensions that are necessary for rendering the content

import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import { ListItem, BulletList, OrderedList } from "@tiptap/extension-list";
import Blockquote from "@tiptap/extension-blockquote";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";

export default [
    Document,
    Text,
    Paragraph,
    HardBreak,
    Heading,
    CodeBlock,
    BulletList,
    OrderedList,
    ListItem,
    Blockquote,
    HorizontalRule,
    Link,
    Bold,
    Italic,
    Strike,
    Code,
    Subscript,
    Superscript,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TextAlign,
];
