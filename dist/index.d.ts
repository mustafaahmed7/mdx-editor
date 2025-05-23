/// <reference types="react" />

import { Config } from 'mdast-util-from-markdown/lib';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { DecoratorNode } from 'lexical';
import { default as default_2 } from 'react';
import { Directives } from 'mdast-util-directive';
import { DOMConversionMap } from 'lexical';
import { DOMConversionOutput } from 'lexical';
import { DOMExportOutput } from 'lexical';
import { EditorConfig } from 'lexical';
import { EditorThemeClasses } from 'lexical';
import { ElementNode } from 'lexical';
import { Extension } from 'micromark-util-types';
import { Extension as Extension_2 } from '@codemirror/state';
import { FC } from 'react';
import { HeadingTagType } from '@lexical/rich-text';
import { HistoryState } from '@lexical/history';
import { KlassConstructor } from 'lexical';
import { LexicalCommand } from 'lexical';
import { LexicalEditor } from 'lexical';
import { LexicalNode } from 'lexical';
import { LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListType } from '@lexical/list';
import * as Mdast from 'mdast';
import { MdxJsxAttribute } from 'mdast-util-mdx-jsx';
import { MdxJsxExpressionAttribute } from 'mdast-util-mdx-jsx';
import { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import { MdxJsxTextElement } from 'mdast-util-mdx-jsx';
import { Node as Node_2 } from 'unist';
import { NodeKey } from 'lexical';
import { NodeRef } from '@mdxeditor/gurx';
import { Options } from 'mdast-util-from-markdown';
import { Options as Options_2 } from 'mdast-util-to-markdown/lib/types';
import { Options as Options_3 } from 'mdast-util-gfm-table';
import { ParseOptions } from 'micromark-util-types';
import * as RadixToolbar from '@radix-ui/react-toolbar';
import { RangeSelection } from 'lexical';
import { ReactNode } from 'react';
import { Realm } from '@mdxeditor/gurx';
import { RootNode } from 'lexical';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { SerializedElementNode } from 'lexical';
import { SerializedLexicalNode } from 'lexical';
import { Spread } from 'lexical';
import { TextFormatType } from 'lexical';
import { TextNode } from 'lexical';
import { Options as ToMarkdownOptions } from 'mdast-util-to-markdown';

/**
 * Converts a <pre> HTML element into a CodeBlockNode.
 * Extracts the code content, language, and meta information from the element's attributes.
 * The language is determined from the class attribute (e.g., class="language-javascript") or
 * the data-language attribute if available.
 *
 * @param element - The <pre> HTML element to convert.
 * @returns A DOMConversionOutput containing the created CodeBlockNode.
 * @group Code Block
 */
export declare function $convertPreElement(element: Element): DOMConversionOutput;

/**
 * Converts an HTML table element into a {@link TableNode}.
 * This function is used to transform a DOM table element into a format that can be used by Lexical.
 * It extracts the rows and cells from the table, converting them into MDAST-compatible nodes.
 *
 * @param element - The HTML table element to convert.
 * @returns A {@link DOMConversionOutput} containing the converted {@link TableNode}.
 * @group Table
 */
export declare function $convertTableElement(element: HTMLElement): DOMConversionOutput;

/**
 * Creates a {@link CodeBlockNode}.
 * @param options - The code contents, the language  (i.e. js, jsx, etc.), and the additional meta data of the block.
 * @group Code Block
 */
export declare function $createCodeBlockNode(options: Partial<CreateCodeBlockNodeOptions>): CodeBlockNode;

/**
 * Creates an {@link DirectiveNode}. Use this instead of the constructor to follow the Lexical conventions.
 * @group Directive
 */
export declare function $createDirectiveNode(mdastNode: Directives, key?: NodeKey): DirectiveNode;

/**
 * Creates a {@link FrontmatterNode}.
 * @param yaml - The YAML string of the frontmatter.
 */
export declare function $createFrontmatterNode(yaml: string): FrontmatterNode;

/**
 * Creates a new {@link GenericHTMLNode} with the specified MDAST HTML node as the object to edit.
 * @group HTML
 */
export declare function $createGenericHTMLNode(tag: KnownHTMLTagType, type: MdxNodeType, attributes: MdxJsxAttribute[]): GenericHTMLNode;

/**
 * Creates an {@link ImageNode}.
 * @param params - The image attributes.
 * @group Image
 */
export declare function $createImageNode(params: CreateImageNodeParameters): ImageNode;

/**
 * Creates a {@link TableNode}. Use this instead of the constructor to follow the Lexical conventions.
 * @param mdastNode - The mdast node to create the {@link TableNode} from.
 * @group Table
 */
export declare function $createTableNode(mdastNode: Mdast.Table): TableNode;

/**
 * Returns true if the given node is a {@link CodeBlockNode}.
 * @group Code Block
 */
export declare function $isCodeBlockNode(node: LexicalNode | null | undefined): node is CodeBlockNode;

/**
 * Retruns true if the node is an {@link DirectiveNode}.
 * @group Directive
 */
export declare function $isDirectiveNode(node: LexicalNode | null | undefined): node is DirectiveNode;

/**
 * Returns `true` if the given node is a {@link FrontmatterNode}.
 */
export declare function $isFrontmatterNode(node: LexicalNode | null | undefined): node is FrontmatterNode;

/**
 * Determines if the specified node is a {@link GenericHTMLNode}.
 * @group HTML
 */
export declare function $isGenericHTMLNode(node: LexicalNode | null | undefined): node is GenericHTMLNode;

/**
 * Retruns true if the node is an {@link ImageNode}.
 * @group Image
 */
export declare function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode;

/**
 * Retruns true if the given node is a {@link TableNode}.
 * @group Table
 */
export declare function $isTableNode(node: LexicalNode | null | undefined): node is TableNode;

/**
 * Holds a reference to the current Lexical editor instance - can be the root editor or a nested editor.
 * @group Core
 */
export declare const activeEditor$: NodeRef<LexicalEditor | null>;

/* Excluded from this release type: activeEditorSubscriptions$ */

/**
 * The names of the plugins that are currently active.
 * @group Core
 */
export declare const activePlugins$: NodeRef<string[]>;

/**
 * Add a plugin name to the list of active plugins.
 * @group Core
 */
export declare const addActivePlugin$: NodeRef<string | string[]>;

/**
 * Lets you add React components below the editor.
 * @group Core
 */
export declare const addBottomAreaChild$: NodeRef<default_2.ComponentType<{}> | default_2.ComponentType<{}>[]>;

/**
 * Lets you add React components to the {@link https://lexical.dev/docs/react/plugins | Lexical Composer} element.
 * @group Core
 */
export declare const addComposerChild$: NodeRef<default_2.ComponentType<{}> | default_2.ComponentType<{}>[]>;

/**
 * Lets you add React components as wrappers around the editor.
 * @group Core
 */
export declare const addEditorWrapper$: NodeRef<default_2.ComponentType<{
    children: default_2.ReactNode;
}> | default_2.ComponentType<{
    children: default_2.ReactNode;
}>[]>;

/**
 * Adds an export visitor to be used when exporting markdown from the Lexical tree.
 * @group Markdown Processing
 */
export declare const addExportVisitor$: NodeRef< LexicalVisitor | LexicalVisitor[]>;

/**
 * Registers a visitor to be used when importing markdown.
 * @group Markdown Processing
 */
export declare const addImportVisitor$: NodeRef<MdastImportVisitor<Mdast.Nodes> | MdastImportVisitor<Mdast.Nodes>[]>;

/**
 * Registers a lexical node to be used in the editor.
 * @group Core
 */
export declare const addLexicalNode$: NodeRef< KlassConstructor<typeof LexicalNode> | KlassConstructor<typeof LexicalNode>[]>;

/**
 * Adds a mdast extension to the markdown parser.
 * @group Markdown Processing
 */
export declare const addMdastExtension$: NodeRef<Partial< Config> | Partial< Config>[] | (Partial< Config> | Partial< Config>[])[]>;

/**
 * Lets you add React components as children of any registered nested editor (useful for Lexical plugins).
 * @group Core
 */
export declare const addNestedEditorChild$: NodeRef<default_2.ComponentType<{}> | default_2.ComponentType<{}>[]>;

/**
 * Adds a syntax extension to the markdown parser.
 * @group Markdown Processing
 */
export declare const addSyntaxExtension$: NodeRef< Extension | Extension[]>;

/**
 * Adds a markdown to string extension to be used when exporting markdown from the Lexical tree.
 * @group Markdown Processing
 */
export declare const addToMarkdownExtension$: NodeRef< Options_2 | Options_2[]>;

/**
 * Lets you add React components on top of the editor (like the toolbar).
 * @group Core
 */
export declare const addTopAreaChild$: NodeRef<default_2.ComponentType<{}> | default_2.ComponentType<{}>[]>;

export declare const ADMONITION_TYPES: readonly ["note", "tip", "danger", "info", "caution"];

/**
 * Pass this descriptor to the `directivesPlugin` `directiveDescriptors` parameter to enable {@link https://docusaurus.io/docs/markdown-features/admonitions | markdown admonitions}.
 *
 * @example
 * ```tsx
 * <MDXEditor
 *  plugins={[
 *   directivesPlugin({ directiveDescriptors: [ AdmonitionDirectiveDescriptor] }),
 *  ]} />
 * ```
 * @group Directive
 */
export declare const AdmonitionDirectiveDescriptor: DirectiveDescriptor;

/* Excluded from this release type: AdmonitionKind */

export declare function admonitionLabelsMap(t: Translation): Record<(typeof ADMONITION_TYPES)[number], string>;

/**
 * @group Headings
 */
export declare const ALL_HEADING_LEVELS: readonly [1, 2, 3, 4, 5, 6];

/**
 * Holds the allowed heading levels.
 * @group Headings
 */
export declare const allowedHeadingLevels$: NodeRef<readonly HEADING_LEVEL[]>;

/**
 * returns a function which when called always returns the passed value
 * @group Utils
 */
export declare function always<T>(value: T): () => T;

/**
 * A signal that appends a code block editor descriptor to the list of descriptors.
 * @group Code Block
 */
export declare const appendCodeBlockEditorDescriptor$: NodeRef<CodeBlockEditorDescriptor | CodeBlockEditorDescriptor[]>;

/* Excluded from this release type: Appender */

/**
 * Allows you to change the block type of the current selection.
 * @group Core
 */
export declare const applyBlockType$: NodeRef<BlockType>;

/**
 * Applies the published format to the current selection.
 * @group Core
 */
export declare const applyFormat$: NodeRef<TextFormatType>;

/**
 * A signal that confirms the updated values of the current link.
 * @group Link Dialog
 */
export declare const applyLinkChanges$: NodeRef<void>;

/**
 * Converts the current selection to the specified list type.
 * @group Lists
 */
export declare const applyListType$: NodeRef<"" | ListType>;

/* Excluded from this release type: autoFocus$ */

declare interface BaseImageParameters {
    altText?: string;
    title?: string;
}

/**
 * The type of the block that the current selection is in.
 * @group Core
 */
export declare type BlockType = 'paragraph' | 'quote' | HeadingTagType | '';

/**
 * A toolbar component that allows the user to change the block type of the current selection.
 * Supports paragraphs, headings and block quotes.
 * @group Toolbar Components
 */
export declare const BlockTypeSelect: () => default_2.JSX.Element | null;

/**
 * A toolbar component that lets the user toggle bold, italic and underline formatting.
 * @group Toolbar Components
 */
export declare const BoldItalicUnderlineToggles: default_2.FC<BoldItalicUnderlineTogglesProps>;

export declare interface BoldItalicUnderlineTogglesProps {
    options?: ('Bold' | 'Italic' | 'Underline')[];
}

/* Excluded from this release type: bottomAreaChildren$ */

/**
 * A toolbar button primitive.
 * @group Toolbar Primitives
 */
export declare const Button: default_2.ForwardRefExoticComponent<Omit<RadixToolbar.ToolbarButtonProps & default_2.RefAttributes<HTMLButtonElement>, "ref"> & default_2.RefAttributes<object>>;

/**
 * Use this primitive to create a toolbar button that can be either a button or a dropdown, depending on the number of items passed.
 * @group Toolbar Primitives
 */
export declare const ButtonOrDropdownButton: <T extends string>(props: {
    /**
     * The contents of the button - usually an icon.
     */
    children: default_2.ReactNode;
    /**
     * The title used for the tooltip.
     */
    title: string;
    /**
     * The function to execute when the button is clicked or an item is chosen from the dropdown.
     * If there is only one item in the dropdown, the value will be an empty string.
     */
    onChoose: (value: T) => void;
    /**
     * The items to show in the dropdown.
     */
    items: {
        /**
         * The value to pass to the `onChoose` function when this item is chosen.
         */
        value: T;
        /**
         * The label to show in the dropdown.
         */
        label: string | JSX.Element;
    }[];
}) => default_2.JSX.Element;

/**
 * A toolbar button with tooltip primitive.
 * @group Toolbar Primitives
 */
export declare const ButtonWithTooltip: ({ title, children, ...props }: Omit<RadixToolbar.ToolbarButtonProps & default_2.RefAttributes<HTMLButtonElement>, "ref"> & default_2.RefAttributes<object> & {
    title: string;
}) => default_2.JSX.Element;

/**
 * Calls the passed function.
 * @group Utils
 */
export declare function call(proc: () => unknown): void;

/* Excluded from this release type: CAN_USE_DOM */

/**
 * An action that cancel the edit of the current link.
 * @group Link Dialog
 */
export declare const cancelLinkEdit$: NodeRef<void>;

/**
 * A component that allows the user to change the admonition type of the current selection.
 * For this component to work, you must pass the {@link AdmonitionDirectiveDescriptor} to the `directivesPlugin` `directiveDescriptors` parameter.
 * @group Toolbar Components
 */
export declare const ChangeAdmonitionType: () => default_2.JSX.Element;

/**
 * A component that allows the user to change the code block language of the current selection.
 * For this component to work, you must enable the `codeMirrorPlugin` for the editor.
 * See {@link ConditionalContents} for an example on how to display the dropdown only when a code block is in focus.
 * @group Toolbar Components
 */
export declare const ChangeCodeMirrorLanguage: () => default_2.JSX.Element;

export declare type ClickLinkCallback = (url: string) => void;

/**
 * Close the image dialog.
 * @group Image
 */
export declare const closeImageDialog$: NodeRef<void>;

/* Excluded from this release type: cmExtensions$ */

/**
 * A set of functions that modify the underlying code block node.
 * Access this with the {@link useCodeBlockEditorContext} hook in your custom code editor components.
 * @group Code Block
 */
export declare interface CodeBlockEditorContextValue {
    /**
     * Updates the code contents of the code block.
     */
    setCode: (code: string) => void;
    /**
     * Updates the language of the code block. See {@link https://www.markdownguide.org/extended-syntax/#syntax-highlighting} for language examples.
     *
     */
    setLanguage: (language: string) => void;
    /**
     * Updates the meta of the code block. The meta is the additional string that comes after the code block language.
     */
    setMeta: (meta: string) => void;
    /**
     * The Lexical node that's being edited.
     */
    lexicalNode: CodeBlockNode;
    /**
     * The parent Lexical editor.
     */
    parentEditor: LexicalEditor;
}

/**
 * Implement this interface to create a custom code block editor.
 * Pass the object in the {@link codeBlockPlugin} parameters.
 * @group Code Block
 */
export declare interface CodeBlockEditorDescriptor {
    /**
     * The priority of the descriptor when descriptors are matched against a given code block. Lower number means lower priority.
     * This allows you to implement a catch-all generic editor and a more specific editor for a given language / meta.
     */
    priority: number;
    /**
     * A function that returns true if the descriptor's editor should be used for the given code block.
     * @param language - The language of the code block.
     * @param meta - The meta of the code block.
     */
    match: (language: string | null | undefined, meta: string | null | undefined) => boolean;
    /**
     * The React component to be used. See {@link CodeBlockEditorProps} for the props passed to the component.
     */
    Editor: React.ComponentType<CodeBlockEditorProps>;
}

/**
 * Contains the currently registered code block descriptors.
 * @group Code Block
 */
export declare const codeBlockEditorDescriptors$: NodeRef<CodeBlockEditorDescriptor[]>;

/**
 * The properties passed to the {@link CodeBlockEditorDescriptor.Editor} component.
 * @group Code Block
 */
export declare interface CodeBlockEditorProps {
    /**
     * The code to edit.
     */
    code: string;
    /**
     * The language of the fenced code block.
     */
    language: string;
    /**
     * The meta of the fenced code block.
     */
    meta: string;
    /**
     * The key of the Lexical node - use this if you are dealing with the Lexical APIs.
     */
    nodeKey: string;
    /**
     * An emitter that will execute its subscription when the editor should be focused.
     * Note: you don't need to unsubscribe, the emiter has a single subscription model.
     */
    focusEmitter: VoidEmitter;
}

/**
 * The codemirror code block languages.
 * @group CodeMirror
 */
export declare const codeBlockLanguages$: NodeRef<{
    js: string;
    ts: string;
    tsx: string;
    jsx: string;
    css: string;
}>;

/**
 * A lexical node that represents a fenced code block. Use {@link "$createCodeBlockNode"} to construct one.
 * @group Code Block
 */
export declare class CodeBlockNode extends DecoratorNode<JSX.Element> {
    __code: string;
    __meta: string;
    __language: string;
    __focusEmitter: {
        publish: () => void;
        subscribe: (cb: () => void) => void;
    };
    static getType(): string;
    static clone(node: CodeBlockNode): CodeBlockNode;
    static importJSON(serializedNode: SerializedCodeBlockNode): CodeBlockNode;
    static importDOM(): DOMConversionMap;
    constructor(code: string, language: string, meta: string, key?: NodeKey);
    exportJSON(): SerializedCodeBlockNode;
    createDOM(_config: EditorConfig): HTMLDivElement;
    updateDOM(): false;
    getCode(): string;
    getMeta(): string;
    getLanguage(): string;
    setCode: (code: string) => void;
    setMeta: (meta: string) => void;
    setLanguage: (language: string) => void;
    select: () => void;
    decorate(editor: LexicalEditor): JSX.Element;
    isInline(): boolean;
}

/**
 * A plugin that adds support for code blocks and custom code block editors.
 * @group Code Block
 */
export declare const codeBlockPlugin: (params?: {
    /**
     * Pass an array of {@link CodeBlockEditorDescriptor} to register custom code block editors.
     */
    codeBlockEditorDescriptors?: CodeBlockEditorDescriptor[] | undefined;
    /**
     * The default language to use when creating a new code block if no language is passed.
     */
    defaultCodeBlockLanguage?: string | undefined;
} | undefined) => RealmPlugin;

/**
 * Whether or not to try to dynamically load the code block language support.
 * Disable if you want to manually pass the supported languages.
 * @group CodeMirror
 */
export declare const codeMirrorAutoLoadLanguageSupport$: NodeRef<boolean>;

export declare const CodeMirrorEditor: ({ language, nodeKey, code, focusEmitter }: CodeBlockEditorProps) => default_2.JSX.Element;

/**
 * The code mirror extensions for the coemirror code block editor.
 * @group CodeMirror
 */
export declare const codeMirrorExtensions$: NodeRef<Extension_2[]>;

/**
 * A plugin that adds lets users edit code blocks with CodeMirror.
 * @group CodeMirror
 */
export declare const codeMirrorPlugin: (params?: {
    codeBlockLanguages: Record<string, string>;
    /**
     * Optional, additional CodeMirror extensions to load in the diff/source mode.
     */
    codeMirrorExtensions?: Extension_2[] | undefined;
    /**
     * Whether or not to try to dynamically load the code block language support.
     * Disable if you want to manually pass the supported languages.
     * @group CodeMirror
     */
    autoLoadLanguageSupport?: boolean | undefined;
} | undefined) => RealmPlugin;

/**
 * A toolbar component that lets the user toggle code formatting.
 * Use for inline `code` elements (like variables, methods, etc).
 * @group Toolbar Components
 */
export declare const CodeToggle: default_2.FC;

export declare const COMMON_STATE_CONFIG_EXTENSIONS: Extension_2[];

/**
 * Performs left to right composition of two functions.
 * @group Utils
 */
export declare function compose<I, A, R>(a: (arg: A) => R, b: (arg: I) => A): (arg: I) => R;

/* Excluded from this release type: composerChildren$ */

/**
 * A toolbar primitive that allows you to show different contents based on the editor that is in focus.
 * Useful for code editors that have different features and don't support rich text formatting.
 * @example
 * ```tsx
 *    <ConditionalContents
 *      options={[
 *        { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
 *        { when: (editor) => editor?.editorType === 'sandpack', contents: () => <ShowSandpackInfo /> },
 *        {
 *          fallback: () => (
 *            <>
 *              <UndoRedo />
 *              <BoldItalicUnderlineToggles />
 *              <InsertCodeBlock />
 *            </>
 *          )
 *        }
 *      ]}
 *    />
 * ```
 * @group Toolbar Primitives
 */
export declare const ConditionalContents: default_2.FC<{
    /**
     * A set of options that define the contents to show based on the editor that is in focus.
     * Can be either a {@link ConditionalContentsOption} or a {@link FallbackOption}.
     * See the {@link ConditionalContents} documentation for an example.
     */
    options: (ConditionalContentsOption | FallbackOption)[];
}>;

/**
 * An object that describes a possible option to be displayed in the {@link ConditionalContents} component.
 * @group Toolbar Primitives
 */
export declare interface ConditionalContentsOption {
    /**
     * A function that returns `true` if the option should be displayed for the current editor in focus.
     */
    when: (rootNode: EditorInFocus | null) => boolean;
    /**
     * The contents to display if the `when` function returns `true`.
     */
    contents: () => default_2.ReactNode;
}

/**
 * Holds the CSS class name of the content editable element.
 * @group Core
 */
export declare const contentEditableClassName$: NodeRef<string>;

/**
 * A reference to the content editable element.
 * @group Core
 */
export declare const contentEditableRef$: NodeRef<default_2.RefObject<HTMLDivElement> | null>;

/**
 * Returns true if the user is pressing the control key on Windows or the meta key on Mac.
 * @group Utils
 */
export declare function controlOrMeta(metaKey: boolean, ctrlKey: boolean): boolean;

/**
 * Converts the current selection to a node created by the published factory.
 * @group Core
 */
export declare const convertSelectionToNode$: NodeRef<() => ElementNode>;

declare type CoordinatesSubscription = (coords: [colIndex: number, rowIndex: number]) => void;

/* Excluded from this release type: corePlugin */

/**
 * An input signal that lets you register a new {@link EditorSubscription} for the active editor.
 * The subscriptions are automatically cleaned up and re-bound when the active editor changes.
 * @example
 * ```tsx
 * realm.pub(createActiveEditorSubscription$, (theEditor) => {
 *  return theEditor.registerUpdateListener(() => { ... })
 *  // or a command
 *  // return theEditor.registerCommand('my-command', () => { ... })
 * })
 * ```
 * @group Core
 */
export declare const createActiveEditorSubscription$: NodeRef<EditorSubscription | EditorSubscription[]>;

/**
 * The options necessary to construct a new code block node.
 * @group Code Block
 */
export declare interface CreateCodeBlockNodeOptions {
    /**
     * The code contents of the block.
     */
    code: string;
    /**
     * The language of the code block (i.e. `js`, `jsx`, etc.). This is used for syntax highlighting.
     */
    language: string;
    /**
     * The additional meta data of the block.
     */
    meta: string;
}

/**
 * The parameters used to create an {@link ImageNode} through {@link $createImageNode}.
 * @group Image
 */
export declare interface CreateImageNodeParameters {
    altText: string;
    width?: number;
    height?: number;
    title?: string;
    key?: NodeKey;
    rest?: (MdxJsxAttribute | MdxJsxExpressionAttribute)[];
    src: string;
}

/**
 * A toolbar component that opens the link edit dialog.
 * For this component to work, you must include the `linkDialogPlugin`.
 * @group Toolbar Components
 */
export declare const CreateLink: () => default_2.JSX.Element;

/**
 * An input signal that lets you register a new {@link EditorSubscription} for the root editor.
 * @example
 * ```tsx
 * realm.pub(createRootEditorSubscription$, (theEditor) => {
 *  return theEditor.registerUpdateListener(() => { ... })
 *  // or a command
 *  // return theEditor.registerCommand('my-command', () => { ... })
 * })
 * ```
 * @group Core
 */
export declare const createRootEditorSubscription$: NodeRef<EditorSubscription | EditorSubscription[]>;

/**
 * Holds the current block type of the selection (i.e. Heading, Paragraph, etc).
 * @group Core
 */
export declare const currentBlockType$: NodeRef<BlockType>;

/**
 * Holds the current format of the selection.
 * @group Core
 */
export declare const currentFormat$: NodeRef<FORMAT>;

/**
 * The current list type in the editor.
 * @group Lists
 */
export declare const currentListType$: NodeRef<"" | ListType>;

/**
 * Holds the current selection.
 * @group Core
 */
export declare const currentSelection$: NodeRef<RangeSelection | null>;

/**
 * Takes a 1 argument function and returns a function which when called, executes it with the provided argument.
 * @group Utils
 */
export declare function curry1to0<T, R>(proc: (arg: T) => R, arg: T): () => R;

/**
 * Takes a 2 argument function and partially applies the first argument.
 * @group Utils
 */
export declare function curry2to1<T, K, R>(proc: (arg1: T, arg2: K) => R, arg1: T): (arg2: K) => R;

export declare const DEFAULT_FORMAT: 0;

/**
 * Contains the default language to use when creating a new code block if no language is passed.
 * @group Code Block
 */
export declare const defaultCodeBlockLanguage$: NodeRef<string>;

export declare const defaultSvgIcons: {
    undo: default_2.JSX.Element;
    redo: default_2.JSX.Element;
    format_bold: default_2.JSX.Element;
    format_italic: default_2.JSX.Element;
    format_underlined: default_2.JSX.Element;
    code: default_2.JSX.Element;
    strikeThrough: default_2.JSX.Element;
    superscript: default_2.JSX.Element;
    subscript: default_2.JSX.Element;
    format_list_bulleted: default_2.JSX.Element;
    format_list_numbered: default_2.JSX.Element;
    format_list_checked: default_2.JSX.Element;
    link: default_2.JSX.Element;
    add_photo: default_2.JSX.Element;
    table: default_2.JSX.Element;
    horizontal_rule: default_2.JSX.Element;
    frontmatter: default_2.JSX.Element;
    frame_source: default_2.JSX.Element;
    arrow_drop_down: default_2.JSX.Element;
    admonition: default_2.JSX.Element;
    sandpack: default_2.JSX.Element;
    rich_text: default_2.JSX.Element;
    difference: default_2.JSX.Element;
    markdown: default_2.JSX.Element;
    open_in_new: default_2.JSX.Element;
    link_off: default_2.JSX.Element;
    edit: default_2.JSX.Element;
    content_copy: default_2.JSX.Element;
    more_horiz: default_2.JSX.Element;
    more_vert: default_2.JSX.Element;
    close: default_2.JSX.Element;
    settings: default_2.JSX.Element;
    delete_big: default_2.JSX.Element;
    delete_small: default_2.JSX.Element;
    format_align_center: default_2.JSX.Element;
    format_align_left: default_2.JSX.Element;
    format_align_right: default_2.JSX.Element;
    add_row: default_2.JSX.Element;
    add_column: default_2.JSX.Element;
    insert_col_left: default_2.JSX.Element;
    insert_row_above: default_2.JSX.Element;
    insert_row_below: default_2.JSX.Element;
    insert_col_right: default_2.JSX.Element;
    check: default_2.JSX.Element;
};

/**
 * The registered descriptors for composite nodes (jsx, directives, code blocks).
 */
export declare interface Descriptors {
    jsxComponentDescriptors: JsxComponentDescriptor[];
    directiveDescriptors: DirectiveDescriptor[];
    codeBlockEditorDescriptors: CodeBlockEditorDescriptor[];
}

/**
 * Use this primitive to create a toolbar button that opens a dialog with a text input, autocomplete suggestions, and a submit button.
 * @group Toolbar Primitives
 */
export declare const DialogButton: default_2.ForwardRefExoticComponent<{
    /**
     * The autocomplete suggestions to show in the dialog input.
     */
    autocompleteSuggestions?: string[] | undefined;
    /**
     * The callback to call when the dialog is submitted. The callback receives the value of the text input as a parameter.
     */
    onSubmit: (value: string) => void;
    /**
     * The title to show in the tooltip of the toolbar button.
     */
    tooltipTitle: string;
    /**
     * The contents of the button. Usually an icon.
     * @example
     * ```tsx
     * <DialogButton buttonContent={<CustomIcon />} />
     * ```
     */
    buttonContent?: default_2.ReactNode;
    /**
     * The placeholder text to show in the dialog input.
     */
    dialogInputPlaceholder: string;
    /**
     * The title of the submit button.
     */
    submitButtonTitle: string;
} & default_2.RefAttributes<HTMLButtonElement>>;

/* Excluded from this release type: diffMarkdown$ */

/**
 * @group Diff/Source
 */
export declare const diffSourcePlugin: (params?: {
    /**
     * The initial view mode of the editor.
     * @default 'rich-text'
     */
    viewMode?: ViewMode | undefined;
    /**
     * The markdown to show in the diff editor.
     * @default ''
     */
    diffMarkdown?: string | undefined;
    /**
     * Optional, additional CodeMirror extensions to load in the diff/source mode.
     */
    codeMirrorExtensions?: Extension_2[] | undefined;
    /**
     * Set the diff editor to read-only.
     * @default false
     */
    readOnlyDiff?: boolean | undefined;
} | undefined) => RealmPlugin;

/**
 * A wrapper element for the toolbar contents that lets the user toggle between rich text, diff and source mode.
 * Put the rich text toolbar contents as children of this component.
 * For this component to work, you must include the `diffSourcePlugin`.
 *
 * @example
 * ```tsx
 *  <MDXEditor markdown='Hello world'
 *    plugins={[toolbarPlugin({
 *      toolbarContents: () => ( <> <DiffSourceToggleWrapper><UndoRedo /><BoldItalicUnderlineToggles /></DiffSourceToggleWrapper></>)
 *    }), diffSourcePlugin()]}
 *  />
 * ```
 *
 * @group Toolbar Components
 */
export declare const DiffSourceToggleWrapper: default_2.FC<{
    children: default_2.ReactNode;
    options?: ViewMode[];
    SourceToolbar?: default_2.ReactNode;
}>;

/**
 * Implement this interface to create a custom editor for markdown directives.
 * Pass the object in the `directivesPlugin` parameters.
 * @group Directive
 */
export declare interface DirectiveDescriptor<T extends Directives = Directives> {
    /**
     * Whether the descriptor's Editor should be used for the given node.
     * @param node - The directive mdast node. You can code your logic against the node's name, type, attributes, children, etc.
     */
    testNode(node: Directives): boolean;
    /**
     * The name of the descriptor - use this if you're building UI for the user to select a directive.
     */
    name: string;
    /**
     * The attributes that the directive has. This can be used when building the UI for the user to configure a directive. The {@link GenericDirectiveEditor} uses those to display a property form.
     */
    attributes: string[];
    /**
     * Whether or not the directive has inner markdown content as children. Used by the {@link GenericDirectiveEditor} to determine whether to show the inner markdown editor.
     */
    hasChildren: boolean;
    /**
     * The type of the supported directive. Can be one of: 'leafDirective' | 'containerDirective' | 'textDirective'.
     */
    type?: 'leafDirective' | 'containerDirective' | 'textDirective';
    /**
     * The React component to be used as an Editor. See {@link DirectiveEditorProps} for the props passed to the component.
     */
    Editor: React.ComponentType<DirectiveEditorProps<T>>;
}

/**
 * Contains the currently registered Markdown directive descriptors.
 * @group Directive
 */
export declare const directiveDescriptors$: NodeRef<DirectiveDescriptor< Directives>[]>;

/**
 * The properties passed to the {@link DirectiveDescriptor.Editor} component.
 * @group Directive
 */
export declare interface DirectiveEditorProps<T extends Directives = Directives> {
    /**
     * The mdast directive node.
     */
    mdastNode: T;
    /**
     * The parent lexical editor - use this if you are dealing with the Lexical APIs.
     */
    parentEditor: LexicalEditor;
    /**
     * The Lexical directive node.
     */
    lexicalNode: DirectiveNode;
    /**
     * The descriptor that activated the editor
     */
    descriptor: DirectiveDescriptor;
}

/**
 * A lexical node that represents an image. Use {@link "$createDirectiveNode"} to construct one.
 * @group Directive
 */
export declare class DirectiveNode extends DecoratorNode<default_2.JSX.Element> {
    /* Excluded from this release type: __mdastNode */
    /* Excluded from this release type: __focusEmitter */
    /* Excluded from this release type: getType */
    /* Excluded from this release type: clone */
    /* Excluded from this release type: importJSON */
    /**
     * Constructs a new {@link DirectiveNode} with the specified MDAST directive node as the object to edit.
     */
    constructor(mdastNode: Directives, key?: NodeKey);
    /**
     * Returns the MDAST node that is being edited.
     */
    getMdastNode(): Directives;
    /* Excluded from this release type: exportJSON */
    /* Excluded from this release type: createDOM */
    /* Excluded from this release type: updateDOM */
    /**
     * Sets a new MDAST node to edit.
     */
    setMdastNode(mdastNode: Directives): void;
    /**
     * Focuses the direcitive editor.
     */
    select: () => void;
    /* Excluded from this release type: decorate */
    /* Excluded from this release type: isInline */
    /* Excluded from this release type: isKeyboardSelectable */
}

/**
 * A plugin that adds support for markdown directives.
 * @group Directive
 */
export declare const directivesPlugin: (params?: {
    /**
     * Use this to register your custom directive editors. You can also use the built-in {@link GenericDirectiveEditor}.
     */
    directiveDescriptors: DirectiveDescriptor<any>[];
    /**
     * Set this option to display unknown text-directives as normal text nodes.
     * This is handy when colons are used to separate words, e.g. in german "Schüler:in"
     */
    escapeUnknownTextDirectives?: boolean | undefined;
} | undefined) => RealmPlugin;

/**
 * Holds whether the auto-linking of URLs and email addresses is disabled.
 * @group Links
 */
export declare const disableAutoLink$: NodeRef<boolean>;

/**
 * Holds the disable image resize configuration flag.
 * @group Image
 */
export declare const disableImageResize$: NodeRef<boolean>;

export declare const disableImageSettingsButton$: NodeRef<boolean>;

/**
 * Holds the custom EditImageToolbar component.
 * @group Image
 */
export declare const editImageToolbarComponent$: NodeRef<FC<EditImageToolbarProps>>;

declare interface EditImageToolbarProps {
    nodeKey: string;
    imageSource: string;
    initialImagePath: string | null;
    title: string;
    alt: string;
}

/**
 * The state of the image dialog when it is in editing an existing node.
 * @group Image
 */
export declare interface EditingImageDialogState {
    type: 'editing';
    nodeKey: string;
    initialValues: Omit<SaveImageParameters, 'file'>;
}

/**
 * The state of the link dialog when it is in edit mode.
 * @group Link Dialog
 */
export declare interface EditLinkDialog {
    type: 'edit';
    initialUrl: string;
    initialTitle?: string;
    url: string;
    title: string;
    linkNodeKey: string;
    rectangle: RectData;
}

/**
 * The currently focused editor
 * @group Core
 */
export declare const editorInFocus$: NodeRef<EditorInFocus | null>;

/**
 * The type of the editor being edited currently. Custom editors can override this, so that the toolbar can change its contents.
 * @group Core
 */
export declare interface EditorInFocus {
    editorType: string;
    rootNode: LexicalNode | null;
}

/**
 * A reference to a DOM element. used for the various popups, dialogs, and tooltips
 * @group Core
 */
export declare const editorRootElementRef$: NodeRef<default_2.RefObject<HTMLDivElement> | null>;

/**
 * A function that subscribes to Lexical editor updates or events, and retursns an unsubscribe function.
 * @group Core
 */
export declare type EditorSubscription = (activeEditor: LexicalEditor) => () => void;

/* Excluded from this release type: editorWrappers$ */

/* Excluded from this release type: ExportLexicalTreeOptions */

/* Excluded from this release type: exportLexicalTreeToMdast */

/* Excluded from this release type: exportMarkdownFromLexical */

/* Excluded from this release type: ExportMarkdownFromLexicalOptions */

/**
 * Contains the currently registered export vistors.
 * @group Core
 */
export declare const exportVisitors$: NodeRef< LexicalVisitor[]>;

/**
 * @group JSX
 */
export declare interface ExpressionValue {
    type: 'expression';
    value: string;
}

/**
 * A default option to be displayed in the {@link ConditionalContents} component if none of the other options match.
 * @group Toolbar Primitives
 */
export declare interface FallbackOption {
    /**
     * The contents to display
     */
    fallback: () => default_2.ReactNode;
}

/**
 * @group Image
 */
export declare interface FileImageParameters extends BaseImageParameters {
    file: File;
}

export declare type FORMAT = typeof DEFAULT_FORMAT | typeof IS_BOLD | typeof IS_ITALIC | typeof IS_STRIKETHROUGH | typeof IS_UNDERLINE | typeof IS_CODE | typeof IS_SUBSCRIPT | typeof IS_SUPERSCRIPT | typeof IS_HIGHLIGHT;

/**
 * Fetches a value from the Lexical editor read cycle.
 * @group Utils
 */
export declare function fromWithinEditorRead<T>(editor: LexicalEditor, fn: () => T): T;

/**
 * Whether the frontmatter dialog is open.
 * @group Frontmatter
 */
export declare const frontmatterDialogOpen$: NodeRef<boolean>;

/**
 * Represents {@link https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/ | the frontmatter} of the markdown document.
 * Use {@link "$createFrontmatterNode"} to construct one.
 */
export declare class FrontmatterNode extends DecoratorNode<JSX.Element> {
    __yaml: string;
    static getType(): string;
    static clone(node: FrontmatterNode): FrontmatterNode;
    static importJSON(serializedNode: SerializedFrontmatterNode): FrontmatterNode;
    constructor(code: string, key?: NodeKey);
    exportJSON(): SerializedFrontmatterNode;
    createDOM(_config: EditorConfig): HTMLDivElement;
    updateDOM(): false;
    getYaml(): string;
    setYaml(yaml: string): void;
    decorate(editor: LexicalEditor): JSX.Element;
    isKeyboardSelectable(): boolean;
}

/**
 * A plugin that adds support for frontmatter.
 * @group Frontmatter
 */
export declare const frontmatterPlugin: (params?: unknown) => RealmPlugin;

/**
 * A generic editor that can be used as an universal UI for any directive.
 * Allows editing of the directive content and properties.
 * Use this editor for the {@link DirectiveDescriptor} Editor option.
 * @group Directive
 */
export declare const GenericDirectiveEditor: default_2.FC<DirectiveEditorProps>;

/**
 * A Lexical node that represents a generic HTML element. Use {@link $createGenericHTMLNode} to construct one.
 * The generic HTML node is used as a "fallback" for HTML elements that are not explicitly supported by the editor.
 * @group HTML
 */
export declare class GenericHTMLNode extends ElementNode {
    /* Excluded from this release type: __tag */
    /* Excluded from this release type: __nodeType */
    /* Excluded from this release type: __attributes */
    /* Excluded from this release type: getType */
    /* Excluded from this release type: clone */
    /**
     * Constructs a new {@link GenericHTMLNode} with the specified MDAST HTML node as the object to edit.
     */
    constructor(tag: KnownHTMLTagType, type: MdxNodeType, attributes: MdxJsxAttribute[], key?: NodeKey);
    getTag(): KnownHTMLTagType;
    getNodeType(): MdxNodeType;
    getAttributes(): MdxJsxAttribute[];
    updateAttributes(attributes: MdxJsxAttribute[]): void;
    getStyle(): string;
    createDOM(): HTMLElement;
    updateDOM(): boolean;
    static importDOM(): DOMConversionMap | null;
    exportDOM(editor: LexicalEditor): DOMExportOutput;
    static importJSON(serializedNode: SerializedGenericHTMLNode): GenericHTMLNode;
    exportJSON(): SerializedGenericHTMLNode;
    extractWithChild(): boolean;
    isInline(): boolean;
}

/**
 * A generic editor that can be used as an universal UI for any JSX element.
 * Allows editing of the element content and properties.
 * Use this editor for the {@link JsxComponentDescriptor} Editor option.
 * @group JSX
 */
export declare const GenericJsxEditor: default_2.FC<GenericJsxEditorProps>;

/**
 * Properties for the Generic Jsx Editor
 */
export declare interface GenericJsxEditorProps extends JsxEditorProps {
    /**
     * A custom property editor component {@link PropertyEditorType}
     */
    PropertyEditor?: PropertyEditorType;
}

/**
 * Gets the selected node from the Lexical editor.
 * @group Utils
 */
export declare function getSelectedNode(selection: RangeSelection): TextNode | ElementNode | null;

/**
 * Gets the coordinates of the selection in the Lexical editor.
 * @group Utils
 */
export declare function getSelectionRectangle(editor: LexicalEditor): {
    top: number;
    left: number;
    width: number;
    height: number;
} | null;

/* Excluded from this release type: getStateAsMarkdown */

/**
 * Whether the markdown document has a frontmatter node.
 * @group Frontmatter
 */
export declare const hasFrontmatter$: NodeRef<boolean>;

/**
 * @group Headings
 */
export declare type HEADING_LEVEL = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * A plugin that adds support for markdown headings.
 * @group Headings
 */
export declare const headingsPlugin: (params?: {
    /**
     * Allows you to limit the headings used in the editor. Affects the block type dropdown and the keyboard shortcuts.
     * @default [1, 2, 3, 4, 5, 6]
     */
    allowedHeadingLevels?: readonly HEADING_LEVEL[] | undefined;
} | undefined) => RealmPlugin;

/* Excluded from this release type: historyState$ */

/**
 * All the HTML tags supported by the generic html node.
 * @group HTML
 */
export declare const htmlTags: string[];

/**
 * A callback that returns the icon component for the given name.
 * @group Core
 */
export declare const iconComponentFor$: NodeRef<(name: IconKey) => default_2.ReactNode>;

export declare type IconKey = 'undo' | 'redo' | 'format_bold' | 'format_italic' | 'format_underlined' | 'code' | 'strikeThrough' | 'superscript' | 'subscript' | 'format_list_bulleted' | 'format_list_numbered' | 'format_list_checked' | 'link' | 'add_photo' | 'table' | 'horizontal_rule' | 'frontmatter' | 'frame_source' | 'arrow_drop_down' | 'admonition' | 'sandpack' | 'rich_text' | 'difference' | 'markdown' | 'open_in_new' | 'link_off' | 'edit' | 'content_copy' | 'more_horiz' | 'more_vert' | 'close' | 'settings' | 'delete_big' | 'delete_small' | 'format_align_center' | 'format_align_left' | 'format_align_right' | 'add_row' | 'add_column' | 'insert_col_left' | 'insert_row_above' | 'insert_row_below' | 'insert_col_right' | 'check';

/**
 * Holds the autocomplete suggestions for image sources.
 * @group Image
 */
export declare const imageAutocompleteSuggestions$: NodeRef<string[]>;

/**
 * Holds the current state of the image dialog.
 * @group Image
 */
export declare const imageDialogState$: NodeRef<EditingImageDialogState | InactiveImageDialogState | NewImageDialogState>;

/**
 * A lexical node that represents an image. Use {@link "$createImageNode"} to construct one.
 * @group Image
 */
export declare class ImageNode extends DecoratorNode<JSX.Element> {
    /* Excluded from this release type: __src */
    /* Excluded from this release type: __altText */
    /* Excluded from this release type: __title */
    /* Excluded from this release type: __width */
    /* Excluded from this release type: __height */
    /* Excluded from this release type: __rest */
    /* Excluded from this release type: getType */
    /* Excluded from this release type: clone */
    /* Excluded from this release type: importJSON */
    /* Excluded from this release type: exportDOM */
    /* Excluded from this release type: importDOM */
    /**
     * Constructs a new {@link ImageNode} with the specified image parameters.
     * Use {@link $createImageNode} to construct one.
     */
    constructor(src: string, altText: string, title: string | undefined, width?: 'inherit' | number, height?: 'inherit' | number, rest?: (MdxJsxAttribute | MdxJsxExpressionAttribute)[], key?: NodeKey);
    /* Excluded from this release type: exportJSON */
    /**
     * Sets the image dimensions
     */
    setWidthAndHeight(width: 'inherit' | number, height: 'inherit' | number): void;
    /* Excluded from this release type: createDOM */
    /* Excluded from this release type: updateDOM */
    getSrc(): string;
    getAltText(): string;
    getTitle(): string | undefined;
    getHeight(): 'inherit' | number;
    getWidth(): 'inherit' | number;
    getRest(): (MdxJsxAttribute | MdxJsxExpressionAttribute)[];
    setTitle(title: string | undefined): void;
    setSrc(src: string): void;
    setAltText(altText: string | undefined): void;
    /* Excluded from this release type: shouldBeSerializedAsElement */
    /* Excluded from this release type: decorate */
}

/**
 * A plugin that adds support for images.
 * @group Image
 */
export declare const imagePlugin: (params?: {
    imageUploadHandler?: ImageUploadHandler | undefined;
    imageAutocompleteSuggestions?: string[] | undefined;
    disableImageResize?: boolean | undefined;
    disableImageSettingsButton?: boolean | undefined;
    imagePreviewHandler?: ImagePreviewHandler | undefined;
    ImageDialog?: FC<{}> | (() => JSX.Element) | undefined;
    EditImageToolbar?: FC<{}> | (() => JSX.Element) | undefined;
} | undefined) => RealmPlugin;

/**
 * Holds the image preview handler callback.
 * @group Image
 */
export declare const imagePreviewHandler$: NodeRef<ImagePreviewHandler>;

/**
 * @group Image
 */
export declare type ImagePreviewHandler = ((imageSource: string) => Promise<string>) | null;

/**
 * Holds the image upload handler callback.
 * @group Image
 */
export declare const imageUploadHandler$: NodeRef<ImageUploadHandler>;

/**
 * @group Image
 */
export declare type ImageUploadHandler = ((image: File) => Promise<string>) | null;

/* Excluded from this release type: importMarkdownToLexical */

/* Excluded from this release type: importMdastTreeToLexical */

export declare interface ImportPoint {
    append(node: LexicalNode): void;
    getType(): string;
}

export declare interface ImportStatement {
    source: string;
    defaultExport: boolean;
}

/**
 * Contains the currently registered import vistors.
 * @group Core
 */
export declare const importVisitors$: NodeRef<MdastImportVisitor<Mdast.Nodes>[]>;

/**
 * The state of the image dialog when it is inactive.
 * @group Image
 */
export declare interface InactiveImageDialogState {
    type: 'inactive';
}

/**
 * The state of the link dialog when it is inactive.
 * @group Link Dialog
 */
export declare interface InactiveLinkDialog {
    type: 'inactive';
    rectangle?: undefined;
    linkNodeKey?: undefined;
}

/**
 * Holds whether the editor is in focus or not.
 * @group Core
 */
export declare const inFocus$: NodeRef<boolean>;

/* Excluded from this release type: initialMarkdown$ */

export declare const initialMarkdownNormalize$: NodeRef<boolean>;

/* Excluded from this release type: INSERT_IMAGE_COMMAND */

/**
 * A toolbar dropdown button that allows the user to insert admonitions.
 * For this to work, you need to have the `directives` plugin enabled with the {@link AdmonitionDirectiveDescriptor} configured.
 *
 * @group Toolbar Components
 */
export declare const InsertAdmonition: () => default_2.JSX.Element;

/**
 * A signal that inserts a new code block into the editor with the published options.
 * @group Code Block
 */
export declare const insertCodeBlock$: NodeRef<Partial<CreateCodeBlockNodeOptions>>;

/**
 * A toolbar button that allows the user to insert a fenced code block.
 * Once the code block is focused, you can construct a special code block toolbar for it, using the {@link ConditionalContents} primitive.
 * See the {@link ConditionalContents} documentation for an example.
 *
 * @group Toolbar Components
 */
export declare const InsertCodeBlock: default_2.FC;

/**
 * Inserts a new code mirror code block with the specified parameters.
 * @group CodeMirror
 */
export declare const insertCodeMirror$: NodeRef<{
    language: string;
    code: string;
}>;

/**
 * Inserts a decorator node (constructed by the published factory) at the current selection.
 * @group Core
 */
export declare const insertDecoratorNode$: NodeRef<() => DecoratorNode<unknown>>;

/**
 * A signal that inserts a new directive node with the published payload.
 * @group Directive
 */
export declare const insertDirective$: NodeRef<{
    type: Directives['type'];
    name: string;
    attributes?: Directives['attributes'];
}>;

/**
 * Inserts a frontmatter node at the beginning of the markdown document.
 * @group Frontmatter
 */
export declare const insertFrontmatter$: NodeRef<void>;

/**
 * A toolbar button that allows the user to insert a {@link https://jekyllrb.com/docs/front-matter/ | front-matter} editor (if one is not already present).
 * For this to work, you need to have the `frontmatterPlugin` plugin enabled.
 * @group Toolbar Components
 */
export declare const InsertFrontmatter: default_2.FC;

/**
 * A signal that inserts a new image node with the published payload.
 * @group Image
 */
export declare const insertImage$: NodeRef<InsertImageParameters>;

/**
 * A toolbar button that allows the user to insert an image from an URL.
 * For the button to work, you need to have the `imagePlugin` plugin enabled.
 * @group Toolbar Components
 */
export declare const InsertImage: default_2.ForwardRefExoticComponent<Omit<Record<string, never>, "ref"> & default_2.RefAttributes<HTMLButtonElement>>;

/**
 * @group Image
 */
export declare type InsertImageParameters = FileImageParameters | SrcImageParameters;

/* Excluded from this release type: InsertImagePayload */

/**
 * A signal that inserts a new JSX node with the published payload.
 * @group JSX
 */
export declare const insertJsx$: NodeRef<{
    kind: 'text';
    name: string;
    props: JsxProperties;
    children?: Mdast.PhrasingContent[] | undefined;
} | {
    kind: 'flow';
    name: string;
    props: JsxProperties;
    children?: (Mdast.BlockContent | Mdast.DefinitionContent)[] | undefined;
}>;

/**
 * Inserts new markdown value into the current cursor position of the active editor.
 * @group Core
 */
export declare const insertMarkdown$: NodeRef<string>;

/**
 * A signal that inserts a new sandpack code block with the specified name from the {@link SandpackConfig}.
 * If no name is specified, the default preset will be used.
 * @group Sandpack
 */
export declare const insertSandpack$: NodeRef<string>;

/**
 * A dropdown button that allows the user to insert a live code block into the editor. The dropdown offers a list of presets that are defined in the sandpack plugin config.
 * For this to work, you need to have the `sandpackPlugin` installed.
 * @group Toolbar Components
 */
export declare const InsertSandpack: () => default_2.JSX.Element;

/**
 * A signal that will insert a table with the published amount of rows and columns into the active editor.
 * @example
 * ```tsx
 * const insertTable = usePublisher(insertTable$)
 * // ...
 * insertTable({ rows: 3, columns: 4 })
 * ```
 *
 * @group Table
 */
export declare const insertTable$: NodeRef<{
    /**
     * The nunber of rows of the table.
     */
    rows?: number | undefined;
    /**
     * The nunber of columns of the table.
     */
    columns?: number | undefined;
}>;

/**
 * A toolbar button that allows the user to insert a table.
 * For this button to work, you need to have the `tablePlugin` plugin enabled.
 * @group Toolbar Components
 */
export declare const InsertTable: default_2.FC;

/**
 * Inserts a thematic break at the current selection.
 * @group Thematic Break
 */
export declare const insertThematicBreak$: NodeRef<void>;

/**
 * A toolbar button that allows the user to insert a thematic break (rendered as an HR HTML element).
 * For this button to work, you need to have the `thematicBreakPlugin` plugin enabled.
 * @group Toolbar Components
 */
export declare const InsertThematicBreak: default_2.FC;

/**
 * Used to detect if the current platform is Apple based, mostly for keyboard shortcuts.
 * @group Utils
 */
export declare const IS_APPLE: boolean;

export declare const IS_BOLD: 1;

export declare const IS_CODE: 16;

export declare const IS_HIGHLIGHT: 128;

export declare const IS_ITALIC: 2;

export declare const IS_STRIKETHROUGH: 4;

export declare const IS_SUBSCRIPT: 32;

export declare const IS_SUPERSCRIPT: 64;

export declare const IS_UNDERLINE: 8;

/**
 * Determines if the given node is a HTML MDAST node.
 * @group HTML
 */
export declare function isMdastHTMLNode(node: Mdast.Nodes): node is MdastHTMLNode;

/**
 * Determines wether the given node is a JSX node.
 * @group JSX
 */
export declare function isMdastJsxNode(node: Mdast.Nodes): node is MdastJsx;

/* Excluded from this release type: isPartOftheEditorUI */

/**
 * returns a function which calls all passed functions in the passed order.
 * joinProc does not pass arguments or collect return values.
 * @group Utils
 */
export declare function joinProc(...procs: (() => unknown)[]): () => void;

/**
 * Defines the structure of a JSX component that can be used within the markdown document.
 * @group JSX
 */
export declare interface JsxComponentDescriptor {
    /**
     * The tag name. For example: 'div', 'span', 'MyComponent'. Use '*' for any tag.
     * Note: For fragments, use null.
     *
     */
    name: string | null;
    /**
     * Wether the component is a flow or text component (inline or block)
     */
    kind: 'flow' | 'text';
    /**
     * The module path from which the component can be imported
     * Omit to skip injecting an import statement
     */
    source?: string;
    /**
     * Wether the component is the default export of the module
     */
    defaultExport?: boolean;
    /**
     * The properties that can be applied to the component
     */
    props: JsxPropertyDescriptor[];
    /**
     * Wether or not the component has children
     */
    hasChildren?: boolean;
    /**
     * The editor to use for editing the component
     */
    Editor: default_2.ComponentType<JsxEditorProps>;
}

/**
 * Contains the currently registered JSX component descriptors.
 * @group JSX
 */
export declare const jsxComponentDescriptors$: NodeRef<JsxComponentDescriptor[]>;

/**
 * The properties passed to a custom JSX Editor component.
 * @group JSX
 */
export declare interface JsxEditorProps {
    /** The MDAST node to edit */
    mdastNode: MdastJsx;
    /** The descriptor that activated the editor */
    descriptor: JsxComponentDescriptor;
}

/**
 * This JSX plugin will fill this value.
 * @group JSX
 */
export declare const jsxIsAvailable$: NodeRef<boolean>;

/**
 * a plugin that adds support for JSX elements (MDX).
 * @group JSX
 */
export declare const jsxPlugin: (params?: JsxPluginParams | undefined) => RealmPlugin;

/**
 * @group JSX
 */
export declare interface JsxPluginParams {
    /**
     * A set of descriptors that document the JSX elements used in the document.
     */
    jsxComponentDescriptors: JsxComponentDescriptor[];
    /**
     * Wether or not to allow default React fragments <></> processing in MDX.
     */
    allowFragment?: boolean;
}

export declare type JsxProperties = Record<string, string | ExpressionValue>;

/**
 * Defines the structure of a JSX component property.
 * @group JSX
 */
export declare interface JsxPropertyDescriptor {
    /**
     * The name of the property
     */
    name: string;
    /**
     * The type of the property
     */
    type: 'string' | 'number' | 'expression';
    /**
     * Wether the property is required
     */
    required?: boolean;
}

/**
 * A toolbar component that includes all toolbar components.
 * Notice that some of the buttons will work only if you have the corresponding plugin enabled, so you should use it only for testing purposes.
 * You'll probably want to create your own toolbar component that includes only the buttons that you need.
 * @group Toolbar Components
 */
export declare const KitchenSinkToolbar: default_2.FC;

/**
 * All recognized HTML tags.
 * @group HTML
 */
export declare type KnownHTMLTagType = (typeof htmlTags)[number];

/**
 * Configures how the lexical tree is converted to a mdast tree and then to markdown.
 * @group Markdown Processing
 */
export declare interface LexicalConvertOptions {
    /**
     * The visitors to use when processing the lexical tree
     */
    visitors?: LexicalVisitor[];
    /**
     * the markdown extensions to use
     */
    toMarkdownExtensions?: ToMarkdownExtension[];
    /**
     * The options to pass to `toMarkdown`
     */
    toMarkdownOptions?: ToMarkdownOptions;
}

/**
 * Implement this interface in order to process mdast node(s) into a lexical tree.
 * This is part of the process that converts the editor contents to markdown.
 * @group Markdown Processing
 */
export declare interface LexicalExportVisitor<LN extends LexicalNode, UN extends Mdast.Nodes> {
    /**
     * Return true if the given node is of the type that this visitor can process.
     * You can safely use the node type guard functions (as in $isParagraphNode, $isLinkNode, etc.) here.
     */
    testLexicalNode?(lexicalNode: LexicalNode): lexicalNode is LN;
    /**
     * Process the given node and manipulate the mdast tree accordingly.
     */
    visitLexicalNode?(params: {
        /**
         * The lexical node that is being visited.
         */
        lexicalNode: LN;
        /**
         * The mdast parent node that the result of the lexical node conversion should be appended to.
         */
        mdastParent: Mdast.Parent;
        /**
         * A set of actions that can be used to manipulate the mdast tree.
         * These are "convenience" utilities that avoid the repetitive boilerplate of creating mdast nodes.
         */
        actions: {
            /**
             * Iterate over the immediate children of a lexical node with the given mdast node as a parent.
             */
            visitChildren(node: LN, mdastParent: Mdast.Parent): void;
            /**
             * Create a new mdast node with the given type, and props.
             * Iterate over the immediate children of the current lexical node with the new mdast node as a parent.
             * @param hasChildren - true by default. Pass false to skip iterating over the lexical node children.
             */
            addAndStepInto(type: string, props?: Record<string, unknown>, hasChildren?: boolean): void;
            /**
             * Append a new mdast node to a parent node.
             * @param parentNode - the mdast parent node to append the new node to.
             * @param node - the mdast node to append.
             */
            appendToParent<T extends Mdast.Parent>(parentNode: T, node: T['children'][number]): T['children'][number] | Mdast.Root;
            /**
             * Used when processing JSX nodes so that later, the correct import statement can be added to the document.
             * @param componentName - the name of the component that has to be imported.
             * @see {@link JsxComponentDescriptor}
             */
            registerReferredComponent(componentName: string, importStatement?: ImportStatement): void;
            /**
             * visits the specified lexical node
             */
            visit(node: LexicalNode, parent: Mdast.Parent): void;
        };
    }): void;
    /**
     * Return true if the current node should be joined with the previous node.
     * This is necessary due to some inconsistencies between the lexical tree and the mdast tree when it comes to formatting.
     */
    shouldJoin?(prevNode: Mdast.RootContent, currentNode: UN): boolean;
    /**
     * Join the current node with the previous node, returning the resulting new node
     * For this to be called by the tree walk, shouldJoin must return true.
     */
    join?<T extends Mdast.RootContent>(prevNode: T, currentNode: T): T;
    /**
     * Default 0, optional, sets the priority of the visitor. The higher the number, the earlier it will be called.
     */
    priority?: number;
}

export declare const lexicalTheme$: NodeRef<EditorThemeClasses>;

export declare const lexicalTheme: EditorThemeClasses;

/**
 * A generic visitor that can be used to process any lexical node.
 * @group Markdown Processing
 */
export declare type LexicalVisitor = LexicalExportVisitor<LexicalNode, Mdast.RootContent>;

/* Excluded from this release type: linkAutocompleteSuggestions$ */

/**
 * @group Link Dialog
 */
export declare const linkDialogPlugin: (params?: {
    /**
     * If passed, the link dialog will be rendered using this component instead of the default one.
     */
    LinkDialog?: (() => JSX.Element) | undefined;
    /**
     * If passed, the link input field will autocomplete using the published suggestions.
     */
    linkAutocompleteSuggestions?: string[] | undefined;
    /**
     * If set, clicking on the link in the preview popup will call this callback instead of opening the link.
     */
    onClickLinkCallback?: ClickLinkCallback | undefined;
    /**
     * Invoked when a link is clicked in read-only mode
     */
    onReadOnlyClickLinkCallback?: ReadOnlyClickLinkCallback | undefined;
} | undefined) => RealmPlugin;

/**
 * The current state of the link dialog.
 * @group Link Dialog
 */
export declare const linkDialogState$: NodeRef<InactiveLinkDialog | PreviewLinkDialog | EditLinkDialog>;

/**
 * A plugin that adds support for links in the editor.
 * @group Links
 */
export declare const linkPlugin: (params?: {
    /**
     * An optional function to validate the URL of a link.
     * By default, no validation is performed.
     */
    validateUrl?: default_2.ComponentProps<typeof LinkPlugin>['validateUrl'];
    /**
     * Whether to disable the auto-linking of URLs and email addresses.
     * @default false
     */
    disableAutoLink?: boolean | undefined;
} | undefined) => RealmPlugin;

/**
 * A plugin that adds support for markdown lists.
 * @group Lists
 */
export declare const listsPlugin: (params?: unknown) => RealmPlugin;

/**
 * A toolbar toggle that allows the user to toggle between bulleted, numbered, and check lists.
 * Pressing the selected button will convert the current list to the other type. Pressing it again will remove the list.
 * For this button to work, you need to have the `listsPlugin` plugin enabled.
 * @group Toolbar Components
 * @param options - The list types that the user can toggle between. Defaults to `['bullet', 'number', 'check']`.
 */
export declare const ListsToggle: default_2.FC<{
    options?: ('bullet' | 'number' | 'check')[];
}>;

/* Excluded from this release type: makeHslTransparent */

/**
 * Holds the current markdown value.
 * @group Core
 */
export declare const markdown$: NodeRef<string>;

/* Excluded from this release type: markdownErrorSignal$ */

/**
 * An error that gets thrown when the Markdown parsing fails due to a syntax error.
 * @group Markdown Processing
 */
export declare class MarkdownParseError extends Error {
    constructor(message: string, cause: unknown);
}

/* Excluded from this release type: MarkdownParseOptions */

/* Excluded from this release type: markdownProcessingError$ */

/**
 * A plugin that adds markdown shortcuts to the editor.
 * @group Markdown Shortcuts
 */
export declare const markdownShortcutPlugin: (params?: unknown) => RealmPlugin;

/**
 * The current value of the source/diff editors.
 * @group Diff/Source
 */
export declare const markdownSourceEditorValue$: NodeRef<string>;

/**
 * A plugin that limits the maximum length of the text content of the editor.
 * Adapted from the Lexical plugin. https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/plugins/MaxLengthPlugin/index.tsx
 * @example
 * ```tsx
 *    <MDXEditor plugins={[maxLengthPlugin(100)]} markdown={'hello world'} />
 * ```
 * @group Utilities
 */
export declare const maxLengthPlugin: (params?: number | undefined) => RealmPlugin;

/**
 * A block-level HTML node.
 * @group HTML
 */
export declare interface MdastBlockHTMLNode extends MdxJsxFlowElement {
    /**
     * the tag name of the node
     */
    name: (typeof htmlTags)[number];
}

/* Excluded from this release type: MdastExtension */

/* Excluded from this release type: mdastExtensions$ */

/* Excluded from this release type: MdastExtensions */

/**
 * A HTML MDAST node.
 * @group HTML
 */
export declare type MdastHTMLNode = MdastBlockHTMLNode | MdastInlineHTMLNode;

/**
 * Implement this interface to convert certian mdast nodes into lexical nodes.
 * @typeParam UN - The type of the mdast node that is being visited.
 * @group Markdown Processing
 */
export declare interface MdastImportVisitor<UN extends Mdast.Nodes> {
    /**
     * The test function that determines if this visitor should be used for the given node.
     * As a convenience, you can also pass a string here, which will be compared to the node's type.
     * @param descriptors - the registered descriptors for composite nodes (jsx, directives, code blocks).
     */
    testNode: ((mdastNode: Mdast.Nodes, descriptors: Descriptors) => boolean) | string;
    visitNode(params: {
        /**
         * The node that is currently being visited.
         */
        mdastNode: UN;
        /**
         * The MDAST parent of the node that is currently being visited.
         */
        mdastParent: Mdast.Parent | null;
        /**
         * The parent lexical node to which the results of the processing should be added.
         */
        lexicalParent: LexicalNode;
        /**
         * The descriptors for composite nodes (jsx, directives, code blocks).
         */
        descriptors: Descriptors;
        /**
         * metaData: context data provided from the import visitor.
         */
        metaData: MetaData;
        /**
         * A set of convenience utilities that can be used to add nodes to the lexical tree.
         */
        actions: {
            /**
             * Iterate the children of the node with the lexical node as the parent.
             */
            visitChildren(node: Mdast.Parent, lexicalParent: LexicalNode): void;
            /**
             * Add the given node to the lexical tree, and iterate the current mdast node's children with the newly created lexical node as a parent.
             */
            addAndStepInto(lexicalNode: LexicalNode): void;
            /**
             * Adds formatting as a context for the current node and its children.
             * This is necessary due to mdast treating formatting as a node, while lexical considering it an attribute of a node.
             */
            addFormatting(format: FORMAT, node?: Mdast.Parent | null): void;
            /**
             * Removes formatting as a context for the current node and its children.
             * This is necessary due to mdast treating formatting as a node, while lexical considering it an attribute of a node.
             */
            removeFormatting(format: FORMAT, node?: Mdast.Parent | null): void;
            /**
             * Access the current formatting context.
             */
            getParentFormatting(): number;
            /**
             * Adds styling as a context for the current node and its children.
             * This is necessary due to mdast treating styling as a node, while lexical considering it an attribute of a node.
             */
            addStyle(style: string, node?: Mdast.Parent | null): void;
            /**
             * Access the current style context.
             */
            getParentStyle(): string;
        };
    }): void;
    /**
     * Default 0, optional, sets the priority of the visitor. The higher the number, the earlier it will be called.
     */
    priority?: number;
}

/**
 * An inline HTML node.
 * @group HTML
 */
export declare interface MdastInlineHTMLNode extends MdxJsxTextElement {
    /**
     * the tag name of the node
     */
    name: (typeof htmlTags)[number];
}

/**
 * An MDX JSX MDAST node.
 * @group JSX
 */
export declare type MdastJsx = MdxJsxTextElement | MdxJsxFlowElement;

/* Excluded from this release type: MdastTreeImportOptions */

/**
 * The MDXEditor React component.
 * @group MDXEditor
 */
export declare const MDXEditor: default_2.ForwardRefExoticComponent<MDXEditorProps & default_2.RefAttributes<MDXEditorMethods>>;

/**
 * The interface for the {@link MDXEditor} object reference.
 *
 * @example
 * ```tsx
 *  const mdxEditorRef = React.useRef<MDXEditorMethods>(null)
 *  <MDXEditor ref={mdxEditorRef} />
 * ```
 * @group MDXEditor
 */
export declare interface MDXEditorMethods {
    /**
     * Gets the current markdown value.
     */
    getMarkdown: () => string;
    /**
     * Updates the markdown value of the editor.
     */
    setMarkdown: (value: string) => void;
    /**
     * Inserts markdown at the current cursor position. Use the focus if necessary.
     */
    insertMarkdown: (value: string) => void;
    /**
     * Sets focus on input
     */
    focus: (callbackFn?: (() => void) | undefined, opts?: {
        defaultSelection?: 'rootStart' | 'rootEnd';
        preventScroll?: boolean;
    }) => void;
}

/**
 * The props for the {@link MDXEditor} React component.
 * @group MDXEditor
 */
export declare interface MDXEditorProps {
    /**
     * the CSS class to apply to the content editable element of the editor.
     * Use this to style the various content elements like lists and blockquotes.
     */
    contentEditableClassName?: string;
    /**
     * Controls the spellCheck value for the content editable element of the editor.
     * Defaults to true, use false to disable spell checking.
     */
    spellCheck?: boolean;
    /**
     * The markdown to edit. Notice that this is read only when the component is mounted.
     * To change the component content dynamically, use the `MDXEditorMethods.setMarkdown` method.
     */
    markdown: string;
    /**
     * Triggered when the editor value changes. The callback is not throttled, you can use any throttling mechanism
     * if you intend to do auto-saving.
     * @param initialMarkdownNormalize - set to true if the change is triggered when the initial markdown is set. This can happen due to variety of reasons - for example, additional whitespace, bullet symbols different than the configured ones, etc.
     */
    onChange?: (markdown: string, initialMarkdownNormalize: boolean) => void;
    /**
     * Triggered when the markdown parser encounters an error. The payload includes the invalid source and the error message.
     */
    onError?: (payload: {
        error: string;
        source: string;
    }) => void;
    /**
     * The markdown options used to generate the resulting markdown.
     * See {@link https://github.com/syntax-tree/mdast-util-to-markdown#options | the mdast-util-to-markdown docs} for the full list of options.
     */
    toMarkdownOptions?: ToMarkdownOptions;
    /**
     * The plugins to use in the editor.
     */
    plugins?: RealmPlugin[];
    /**
     * The class name to apply to the root component element, including the toolbar and the popups. For styling the content editable area,  Use `contentEditableClassName` property.
     */
    className?: string;
    /**
     * pass if you would like to have the editor automatically focused when mounted.
     */
    autoFocus?: boolean | {
        defaultSelection?: 'rootStart' | 'rootEnd';
        preventScroll?: boolean;
    };
    /**
     * Triggered when focus leaves the editor
     */
    onBlur?: (e: FocusEvent) => void;
    /**
     * The placeholder contents, displayed when the editor is empty.
     */
    placeholder?: default_2.ReactNode;
    /**
     * pass if you would like to have the editor in read-only mode.
     * Note: Don't use this mode to render content for consumption - render the markdown using a library of your choice instead.
     */
    readOnly?: boolean;
    /**
     * Use this prop to customize the icons used across the editor. Pass a function that returns an icon (JSX) for a given icon key.
     */
    iconComponentFor?: (name: IconKey) => JSX.Element;
    /**
     * Set to true if you want to suppress the processing of HTML tags.
     */
    suppressHtmlProcessing?: boolean;
    /**
     * Pass your own translation function if you want to localize the editor.
     */
    translation?: Translation;
    /**
     * Whether to apply trim() to the initial markdown input (default: true)
     */
    trim?: boolean;
    /**
     * A custom lexical theme to use for the editor.
     */
    lexicalTheme?: EditorThemeClasses;
    /**
     * Optional container element to use for rendering editor popups.
     * Defaults to document.body.
     */
    overlayContainer?: HTMLElement | null;
}

/**
 * The MDAST jsx distinction value used to differentiate inline and block level elements.
 * @group HTML
 */
export declare type MdxNodeType = MdastHTMLNode['type'];

/**
 * Metadata that is provided to the visitors
 */
declare interface MetaData {
    importDeclarations: Record<string, ImportStatement>;
}

/**
 * A toolbar primitive that allows you to build an UI with multiple non-exclusive toggle groups, like the bold/italic/underline toggle.
 * @group Toolbar Primitives
 */
export declare const MultipleChoiceToggleGroup: default_2.FC<{
    items: {
        title: string;
        contents: default_2.ReactNode;
        active: boolean;
        onChange: (active: boolean) => void;
        disabled?: boolean;
    }[];
}>;

export declare const muteChange$: NodeRef<boolean>;

/* Excluded from this release type: NESTED_EDITOR_UPDATED_COMMAND */

/* Excluded from this release type: nestedEditorChildren$ */

/**
 * Use this context to provide the necessary values to the {@link NestedLexicalEditor} React component.
 * Place it as a wrapper in your custom lexical node decorators.
 * @group Custom Editor Primitives
 */
export declare const NestedEditorsContext: default_2.Context<NestedEditorsContextValue<Node_2> | undefined>;

/**
 * The value of the {@link NestedEditorsContext} React context.
 * @group Custom Editor Primitives
 */
export declare interface NestedEditorsContextValue<T extends Node_2> {
    /**
     * The parent lexical editor
     */
    parentEditor: LexicalEditor;
    /**
     * The parent editor config
     */
    config: EditorConfig;
    /**
     * The mdast node that is being edited
     */
    mdastNode: T;
    /**
     * The lexical node that is being edited
     */
    lexicalNode: DecoratorNode<any> & {
        /**
         * Use this method to update the mdast node. This will also update the mdast tree of the parent editor.
         */
        setMdastNode: (mdastNode: any) => void;
    };
    /**
     * Subscribe to the emitter and implement the logic to focus the custom editor.
     */
    focusEmitter: VoidEmitter;
}

/**
 * A nested editor React component that allows editing of the contents of complex markdown nodes that have nested markdown content (for example, custom directives or JSX elements).
 *
 * @example
 * You can use a type param to specify the type of the mdast node
 *
 * ```tsx
 *
 * interface CalloutDirectiveNode extends LeafDirective {
 *   name: 'callout'
 *   children: Mdast.PhrasingContent[]
 * }
 *
 * return <NestedLexicalEditor<CalloutDirectiveNode> getContent={node => node.children} getUpdatedMdastNode={(node, children) => ({ ...node, children })} />
 * ```
 * @group Custom Editor Primitives
 */
export declare const NestedLexicalEditor: <T extends Mdast.RootContent>(props: {
    /**
     * A function that returns the phrasing content of the mdast node. In most cases, this will be the `children` property of the mdast node, but you can also have multiple nested nodes with their own children.
     */
    getContent: (mdastNode: T) => Mdast.RootContent[];
    /**
     * A function that should return the updated mdast node based on the original mdast node and the new content (serialized as mdast tree) produced by the editor.
     */
    getUpdatedMdastNode: (mdastNode: T, children: Mdast.RootContent[]) => T;
    /**
     * Props passed to the {@link https://github.com/facebook/lexical/blob/main/packages/lexical-react/src/LexicalContentEditable.tsx | ContentEditable} component.
     */
    contentEditableProps?: default_2.ComponentProps<typeof ContentEditable>;
    /**
     * Whether or not the editor edits blocks (multiple paragraphs)
     */
    block?: boolean;
}) => default_2.JSX.Element;

/**
 * The state of the image dialog when it is in new mode.
 * @group Image
 */
export declare interface NewImageDialogState {
    type: 'new';
}

/**
 * an empty function
 * @group Utils
 */
export declare function noop(): void;

/**
 * Emits when the editor loses focus
 * @group Core
 */
export declare const onBlur$: NodeRef<FocusEvent>;

/* Excluded from this release type: onClickLinkCallback$ */

/* Excluded from this release type: onReadOnlyClickLinkCallback$ */

/**
 * Emits when the window is resized.
 * @group Utils
 */
export declare const onWindowChange$: NodeRef<true>;

/**
 * Opens the edit image dialog with the published parameters.
 * @group Image
 */
export declare const openEditImageDialog$: NodeRef<Omit<EditingImageDialogState, "type">>;

/**
 * An action that opens the link dialog.
 * @group Link Dialog
 */
export declare const openLinkEditDialog$: NodeRef<void>;

/**
 * Opens the new image dialog.
 * @group Image
 */
export declare const openNewImageDialog$: NodeRef<void>;

/* Excluded from this release type: placeholder$ */

/**
 * The state of the link dialog when it is in preview mode.
 * @group Link Dialog
 */
export declare interface PreviewLinkDialog {
    type: 'preview';
    title: string;
    url: string;
    linkNodeKey: string;
    rectangle: RectData;
}

/**
 * Returns a function which extracts the property from from the passed object.
 * @group Utils
 */
export declare function prop<T extends Record<string, unknown>>(property: keyof T): (object: T) => T[keyof T];

/**
 * A component capable of editing JSX properties
 */
declare type PropertyEditorType = typeof PropertyPopover;

/**
 * A React component that can be used in custom editors to edit the properties of the node.
 * Displays a simple, static key/value editing UI in a popover.
 * @group Custom Editor Primitives
 */
export declare const PropertyPopover: default_2.FC<{
    /**
     * The properties to edit. The key is the name of the property, and the value is the initial value.
     */
    properties: Record<string, string>;
    /**
     * Triggered when the user edits the property values.
     */
    onChange: (values: Record<string, string>) => void;
    /**
     * The title to display in the popover.
     */
    title: string;
}>;

/**
 * A plugin that adds support for block quotes to the editor.
 * @group Quote
 */
export declare const quotePlugin: (params?: unknown) => RealmPlugin;

/**
 * Holds the readOnly state of the editor.
 * @group Core
 */
export declare const readOnly$: NodeRef<boolean>;

export declare type ReadOnlyClickLinkCallback = (event: MouseEvent, node: LinkNode, url: string) => void;

/* Excluded from this release type: readOnlyDiff$ */

/**
 * A plugin for the editor.
 * @group Core
 */
export declare interface RealmPlugin {
    init?: (realm: Realm) => void;
    update?: (realm: Realm) => void;
    postInit?: (realm: Realm) => void;
}

/**
 * A function that creates an editor plugin.
 * @typeParam Params - The parameters for the plugin.
 * @group Core
 */
export declare function realmPlugin<Params>(plugin: {
    /**
     * Called when the MDXEditor component is mounted and the plugin is initialized.
     */
    init?: (realm: Realm, params?: Params) => void;
    /**
     * Called after the MDXEditor component is mounted and all plugins are initialized.
     */
    postInit?: (realm: Realm, params?: Params) => void;
    /**
     * Called on each re-render. Use this to update the realm with updated property values.
     */
    update?: (realm: Realm, params?: Params) => void;
}): (params?: Params) => RealmPlugin;

/* Excluded from this release type: RealmWithPlugins */

/**
 * Describes the boundaries of the current selection so that the link dialog can position itself accordingly.
 * @group Link Dialog
 */
export declare type RectData = Pick<DOMRect, 'height' | 'width' | 'top' | 'left'>;

/**
 * Removes the frontmatter node from the markdown document.
 * @group Frontmatter
 */
export declare const removeFrontmatter$: NodeRef<void>;

/**
 * A signal that removes the current link.
 * @group Link Dialog
 */
export declare const removeLink$: NodeRef<void>;

/* Excluded from this release type: Root */

/**
 * Holds a reference to the root Lexical editor instance.
 * @group Core
 */
export declare const rootEditor$: NodeRef<LexicalEditor | null>;

/* Excluded from this release type: rootEditorSubscriptions$ */

/**
 * Holds the current sandpack configuration.
 * @group Sandpack
 */
export declare const sandpackConfig$: NodeRef<SandpackConfig>;

/**
 * The configuration for the available sandpack presets.
 * @group Sandpack
 */
export declare interface SandpackConfig {
    /**
     * The name of the default preset that will be used if no meta (other than live) is set.
     */
    defaultPreset: string;
    /**
     * The list of sandpack presets that can be used.
     */
    presets: SandpackPreset[];
}

export declare const SandpackEditor: ({ nodeKey, code, focusEmitter, preset }: SandpackEditorProps) => default_2.JSX.Element;

export declare interface SandpackEditorProps extends CodeBlockEditorProps {
    preset: SandpackPreset;
}

/**
 * A plugin that adds support for sandpack code blocks in the editor.
 * @group Sandpack
 */
export declare const sandpackPlugin: (params?: {
    sandpackConfig: SandpackConfig;
} | undefined) => RealmPlugin;

/**
 * Defines a single preset that can be used to create a Sandpack sandbox.
 * @group Sandpack
 */
export declare interface SandpackPreset {
    /**
     * The name of the preset - use this to reference the preset from the defaultPreset field.
     */
    name: string;
    /**
     * The label of the preset, displayed in the sandpack button dropdown.
     */
    label: string | JSX.Element;
    /**
     * The meta string that will be used to identify the preset from the fenced code block. e.g. "live react"
     */
    meta: string;
    /**
     * The sandpack template that will be used to create the sandbox. e.g. "react", "react-ts", "vanilla".
     */
    sandpackTemplate: SandpackProviderProps['template'];
    /**
     * The sandpack theme that will be used to create the sandbox. e.g. "light", "dark".
     */
    sandpackTheme: SandpackProviderProps['theme'];
    /**
     * The name of the file that will be created in the sandbox. e.g. "/App.js".
     */
    snippetFileName: string;
    /**
     * The dependencies that will be added to the sandbox, just like in package.json.
     */
    dependencies?: Record<string, string>;
    /**
     * The files that will be added to the sandbox (read-only).
     * The key is the name of the file, and the value is the contents of the file.
     */
    files?: Record<string, string>;
    /**
     * The language used in the editable snippet. e.g. "jsx", "tsx", etc.
     */
    snippetLanguage?: string;
    /**
     * The initial content of the editable snippet.
     */
    initialSnippetContent?: string;
}

declare type SandpackProviderProps = default_2.ComponentProps<typeof SandpackProvider>;

/**
 * Saves the data from the image dialog
 * @group Image
 */
export declare const saveImage$: NodeRef<SaveImageParameters>;

/**
 * @group Image
 */
export declare interface SaveImageParameters extends BaseImageParameters {
    src?: string;
    file: FileList;
}

/**
 * A toolbar primitive you can use to build dropdowns, such as the block type select.
 * @group Toolbar Primitives
 */
export declare const Select: <T extends string>(props: {
    value: T;
    onChange: (value: T) => void;
    triggerTitle: string;
    placeholder: string;
    disabled?: boolean;
    items: ({
        label: string | JSX.Element;
        value: T;
    } | 'separator')[];
}) => default_2.JSX.Element;

/* Excluded from this release type: SelectButtonTrigger */

/* Excluded from this release type: SelectContent */

/* Excluded from this release type: SelectItem */

/* Excluded from this release type: SelectTrigger */

/**
 * A toolbar primitive that allows you to show a separator between toolbar items.
 * By default, the separator is styled as vertical line.
 * @group Toolbar Primitives
 */
export declare const Separator: default_2.ForwardRefExoticComponent<RadixToolbar.ToolbarSeparatorProps & default_2.RefAttributes<HTMLDivElement>>;

/**
 * A serialized representation of an {@link CodeBlockNode}.
 * @group Code Block
 */
export declare type SerializedCodeBlockNode = Spread<CreateCodeBlockNodeOptions & {
    type: 'codeblock';
    version: 1;
}, SerializedLexicalNode>;

/**
 * A serialized representation of an {@link DirectiveNode}.
 * @group Directive
 */
export declare type SerializedDirectiveNode = Spread<{
    mdastNode: Directives;
    type: 'directive';
    version: 1;
}, SerializedLexicalNode>;

/**
 * A serialized representation of an {@link FrontmatterNode}.
 */
export declare type SerializedFrontmatterNode = Spread<{
    yaml: string;
    version: 1;
}, SerializedLexicalNode>;

/**
 * A serialized representation of a {@link GenericHTMLNode}.
 * @group HTML
 */
export declare type SerializedGenericHTMLNode = Spread<{
    tag: KnownHTMLTagType;
    type: 'generic-html';
    mdxType: MdxNodeType;
    attributes: MdxJsxAttribute[];
    version: 1;
}, SerializedElementNode>;

/**
 * A serialized representation of an {@link ImageNode}.
 * @group Image
 */
export declare type SerializedImageNode = Spread<{
    altText: string;
    title?: string;
    width?: number;
    height?: number;
    src: string;
    rest: (MdxJsxAttribute | MdxJsxExpressionAttribute)[];
    type: 'image';
    version: 1;
}, SerializedLexicalNode>;

/**
 * A serialized representation of a {@link TableNode}.
 * @group Table
 */
export declare type SerializedTableNode = Spread<{
    mdastNode: Mdast.Table;
}, SerializedLexicalNode>;

/**
 * Sets a new markdown value for the editor, replacing the current one.
 * @group Core
 */
export declare const setMarkdown$: NodeRef<string>;

/**
 * A component that displays the focused live code block's name.
 * For this component to work, you must enable the `sandpackPlugin` for the editor.
 * See {@link ConditionalContents} for an example on how to display the dropdown only when a sandpack editor is in focus.
 * @group Toolbar Components
 */
export declare const ShowSandpackInfo: () => default_2.JSX.Element;

/**
 * A toolbar primitive that allows you to build an UI with multiple exclusive toggle groups, like the list type toggle.
 * @group Toolbar Primitives
 */
export declare const SingleChoiceToggleGroup: <T extends string>({ value, onChange, className, items }: {
    items: {
        title: string;
        value: T;
        contents: default_2.ReactNode;
    }[];
    onChange: (value: T | '') => void;
    value: T | '';
    className?: string;
}) => default_2.JSX.Element;

/* Excluded from this release type: SingleToggleGroup */

/**
 * Holds the spellcheck value of the content editable element.
 * @group Core
 */
export declare const spellCheck$: NodeRef<boolean>;

/**
 * @group Image
 */
export declare interface SrcImageParameters extends BaseImageParameters {
    src: string;
}

/**
 * A toolbar component that lets the user toggle strikeThrough, superscript and subscript formatting.
 * @group Toolbar Components
 */
export declare const StrikeThroughSupSubToggles: default_2.FC<StrikeThroughSupSubTogglesProps>;

export declare interface StrikeThroughSupSubTogglesProps {
    options?: ('Strikethrough' | 'Sub' | 'Sup')[];
}

/**
 * An action that switches the link dialog from preview mode to edit mode.
 * @group Link Dialog
 */
export declare const switchFromPreviewToLinkEdit$: NodeRef<void>;

/* Excluded from this release type: SyntaxExtension */

export declare const syntaxExtensions$: NodeRef< Extension[]>;

/**
 * A Lexical node that represents a markdown table.
 * Use {@link "$createTableNode"} to construct one.
 * @group Table
 */
export declare class TableNode extends DecoratorNode<JSX.Element> {
    /* Excluded from this release type: __mdastNode */
    /* Excluded from this release type: focusEmitter */
    /* Excluded from this release type: getType */
    /* Excluded from this release type: clone */
    /* Excluded from this release type: importJSON */
    /* Excluded from this release type: importDOM */
    /* Excluded from this release type: exportJSON */
    /**
     * Returns the mdast node that this node is constructed from.
     */
    getMdastNode(): Mdast.Table;
    /**
     * Returns the number of rows in the table.
     */
    getRowCount(): number;
    /**
     * Returns the number of columns in the table.
     */
    getColCount(): number;
    /**
     * Constructs a new {@link TableNode} with the specified MDAST table node as the object to edit.
     * See {@link https://github.com/micromark/micromark-extension-gfm-table | micromark/micromark-extension-gfm-table} for more information on the MDAST table node.
     */
    constructor(mdastNode?: Mdast.Table, key?: NodeKey);
    /* Excluded from this release type: createDOM */
    /* Excluded from this release type: updateDOM */
    /* Excluded from this release type: updateCellContents */
    insertColumnAt(colIndex: number): void;
    deleteColumnAt(colIndex: number): void;
    insertRowAt(y: number): void;
    deleteRowAt(rowIndex: number): void;
    addRowToBottom(): void;
    addColumnToRight(): void;
    setColumnAlign(colIndex: number, align: Mdast.AlignType): void;
    /* Excluded from this release type: decorate */
    /**
     * Focuses the table cell at the specified coordinates.
     * Pass `undefined` to remove the focus.
     */
    select(coords?: [colIndex: number, rowIndex: number]): void;
    /* Excluded from this release type: isInline */
}

/**
 * A plugin that adds support for tables to the editor.
 * @group Table
 */
export declare const tablePlugin: (params?: Options_3 | undefined) => RealmPlugin;

/**
 * Calls callback with the first argument, and returns it.
 * @group Utils
 */
export declare function tap<T>(arg: T, proc: (arg: T) => unknown): T;

/**
 * A plugin that adds support for thematic breaks.
 * @group Thematic Break
 */
export declare const thematicBreakPlugin: (params?: unknown) => RealmPlugin;

/**
 * Takes a value and applies a function to it.
 * @group Utils
 */
export declare function thrush<I, K>(arg: I, proc: (arg: I) => K): K;

/* Excluded from this release type: ToggleSingleGroupWithItem */

export declare type ToMarkdownExtension = NonNullable<ToMarkdownOptions['extensions']>[number];

/* Excluded from this release type: toMarkdownExtensions$ */

/* Excluded from this release type: toMarkdownOptions$ */
export { ToMarkdownOptions }

export declare const toolbarClassName$: NodeRef<string>;

/**
 * The factory function that returns the contents of the toolbar.
 * @group Toolbar
 */
export declare const toolbarContents$: NodeRef<() => default_2.ReactNode>;

/**
 * A plugin that adds a toolbar to the editor.
 * @group Toolbar
 */
export declare const toolbarPlugin: (params?: {
    /**
     * Contents of the toolbar
     */
    toolbarContents: () => default_2.ReactNode;
    /**
     * The class name to apply to the toolbar element
     */
    toolbarClassName?: string | undefined;
    /**
     * Controls the position of the toolbar (top by default)
     */
    toolbarPosition?: "top" | "bottom" | undefined;
} | undefined) => RealmPlugin;

/* Excluded from this release type: ToolbarToggleItem */

/**
 * A styled wrapper around the radix-ui tooltip, that lets you display an instant tooltip on hover.
 * @group Toolbar Primitives
 */
export declare const TooltipWrap: default_2.ForwardRefExoticComponent<{
    title: string;
    children: ReactNode;
} & default_2.RefAttributes<HTMLButtonElement>>;

/* Excluded from this release type: topAreaChildren$ */

export declare const translation$: NodeRef<Translation>;

export declare type Translation = (key: string, defaultValue: string, interpolations?: Record<string, any>) => string;

/* Excluded from this release type: TYPE_NAME */

/**
 * A toolbar component that lets the user undo and redo changes in the editor.
 * @group Toolbar Components
 */
export declare const UndoRedo: default_2.FC;

/**
 * An error that gets thrown when the Markdown parsing encounters a node that has no corresponding {@link MdastImportVisitor}.
 * @group Markdown Processing
 */
export declare class UnrecognizedMarkdownConstructError extends Error {
    constructor(message: string);
}

/**
 * A signal that updates the current link with the published payload.
 * @group Link Dialog
 */
export declare const updateLink$: NodeRef<{
    url: string | undefined;
    title: string | undefined;
}>;

/**
 * Use this hook in your custom code block editors to modify the underlying node code, language, and meta.
 * @group Code Block
 */
export declare function useCodeBlockEditorContext(): CodeBlockEditorContextValue;

/**
 * Contains the currently registered lexical nodes.
 * @group Core
 */
export declare const usedLexicalNodes$: NodeRef< KlassConstructor<typeof LexicalNode>[]>;

/**
 * A hook that returns a function that removes the lexical node from the editor.
 * @group Custom Editor Primitives
 */
export declare function useLexicalNodeRemove(): () => void;

/**
 * A hook that returns a function that can be used to update the mdast node. Use this in your custom editor components.
 * @group Custom Editor Primitives
 */
export declare function useMdastNodeUpdater<T extends Mdast.RootContent>(): (node: Partial<T>) => void;

/**
 * A hook to get the current {@link NestedEditorsContext} value. Use this in your custom editor components.
 * @group Custom Editor Primitives
 */
export declare function useNestedEditorContext<T extends Mdast.RootContent>(): NestedEditorsContextValue<T>;

export declare function useTranslation(): Translation;

/* Excluded from this release type: uuidv4 */

/**
 * The current view mode of the editor when using the {@link diffSourcePlugin}.
 * @group Diff/Source
 */
export declare const viewMode$: NodeRef<ViewMode>;

/**
 * The possible view modes of the editor when using the {@link diffSourcePlugin}.
 * @group Diff/Source
 */
export declare type ViewMode = 'rich-text' | 'source' | 'diff';

/**
 * An emitter object that has a single subscription that will be executed.
 * The construct is used so that the lexical nodes can focus their React component editors.
 * @group Utils
 */
export declare interface VoidEmitter {
    /**
     * Subscribes to the emitter event
     */
    subscribe: (cb: () => void) => void;
}

/**
 * Creates a void emitter.
 * @group Utils
 */
export declare function voidEmitter(): {
    publish: () => void;
    subscribe: (cb: () => void) => void;
};


export * from "@mdxeditor/gurx";

export { }


declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}


declare module 'micromark-util-types' {
    interface TokenTypeMap {
        comment: 'comment';
        commentEnd: 'commentEnd';
        data: 'data';
    }
}

