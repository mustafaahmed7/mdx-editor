import "./styles/globals.css.js";
export * from "@mdxeditor/gurx";
import { MDXEditor } from "./MDXEditor.js";
import { defaultSvgIcons } from "./defaultSvgIcons.js";
import { MarkdownParseError, UnrecognizedMarkdownConstructError, importMarkdownToLexical, importMdastTreeToLexical } from "./importMarkdownToLexical.js";
import { exportLexicalTreeToMdast, exportMarkdownFromLexical } from "./exportMarkdownFromLexical.js";
import { Appender, NESTED_EDITOR_UPDATED_COMMAND, activeEditor$, activeEditorSubscriptions$, activePlugins$, addActivePlugin$, addBottomAreaChild$, addComposerChild$, addEditorWrapper$, addExportVisitor$, addImportVisitor$, addLexicalNode$, addMdastExtension$, addNestedEditorChild$, addSyntaxExtension$, addToMarkdownExtension$, addTopAreaChild$, applyBlockType$, applyFormat$, autoFocus$, bottomAreaChildren$, codeBlockEditorDescriptors$, composerChildren$, contentEditableClassName$, contentEditableRef$, convertSelectionToNode$, corePlugin, createActiveEditorSubscription$, createRootEditorSubscription$, currentBlockType$, currentFormat$, currentSelection$, directiveDescriptors$, editorInFocus$, editorRootElementRef$, editorWrappers$, exportVisitors$, historyState$, iconComponentFor$, importVisitors$, inFocus$, initialMarkdown$, initialMarkdownNormalize$, insertDecoratorNode$, insertMarkdown$, jsxComponentDescriptors$, jsxIsAvailable$, lexicalTheme$, markdown$, markdownErrorSignal$, markdownProcessingError$, markdownSourceEditorValue$, mdastExtensions$, muteChange$, nestedEditorChildren$, onBlur$, placeholder$, readOnly$, rootEditor$, rootEditorSubscriptions$, setMarkdown$, spellCheck$, syntaxExtensions$, toMarkdownExtensions$, toMarkdownOptions$, topAreaChildren$, translation$, useTranslation, usedLexicalNodes$, viewMode$ } from "./plugins/core/index.js";
import { ALL_HEADING_LEVELS, allowedHeadingLevels$, headingsPlugin } from "./plugins/headings/index.js";
import { insertThematicBreak$, thematicBreakPlugin } from "./plugins/thematic-break/index.js";
import { applyListType$, currentListType$, listsPlugin } from "./plugins/lists/index.js";
import { insertTable$, tablePlugin } from "./plugins/table/index.js";
import { disableAutoLink$, linkPlugin } from "./plugins/link/index.js";
import { INSERT_IMAGE_COMMAND, closeImageDialog$, disableImageResize$, disableImageSettingsButton$, editImageToolbarComponent$, imageAutocompleteSuggestions$, imageDialogState$, imagePlugin, imagePreviewHandler$, imageUploadHandler$, insertImage$, openEditImageDialog$, openNewImageDialog$, saveImage$ } from "./plugins/image/index.js";
import { frontmatterDialogOpen$, frontmatterPlugin, hasFrontmatter$, insertFrontmatter$, removeFrontmatter$ } from "./plugins/frontmatter/index.js";
import { quotePlugin } from "./plugins/quote/index.js";
import { maxLengthPlugin } from "./plugins/maxlength/index.js";
import { insertJsx$, isMdastJsxNode, jsxPlugin } from "./plugins/jsx/index.js";
import { GenericJsxEditor } from "./jsx-editors/GenericJsxEditor.js";
import { insertSandpack$, sandpackConfig$, sandpackPlugin } from "./plugins/sandpack/index.js";
import { SandpackEditor } from "./plugins/sandpack/SandpackEditor.js";
import { codeBlockLanguages$, codeMirrorAutoLoadLanguageSupport$, codeMirrorExtensions$, codeMirrorPlugin, insertCodeMirror$ } from "./plugins/codemirror/index.js";
import { COMMON_STATE_CONFIG_EXTENSIONS, CodeMirrorEditor } from "./plugins/codemirror/CodeMirrorEditor.js";
import { appendCodeBlockEditorDescriptor$, codeBlockPlugin, defaultCodeBlockLanguage$, insertCodeBlock$ } from "./plugins/codeblock/index.js";
import { directivesPlugin, insertDirective$ } from "./plugins/directives/index.js";
import { ADMONITION_TYPES, AdmonitionDirectiveDescriptor } from "./directive-editors/AdmonitionDirectiveDescriptor.js";
import { GenericDirectiveEditor } from "./directive-editors/GenericDirectiveEditor.js";
import { applyLinkChanges$, cancelLinkEdit$, linkAutocompleteSuggestions$, linkDialogPlugin, linkDialogState$, onClickLinkCallback$, onReadOnlyClickLinkCallback$, onWindowChange$, openLinkEditDialog$, removeLink$, switchFromPreviewToLinkEdit$, updateLink$ } from "./plugins/link-dialog/index.js";
import { toolbarClassName$, toolbarContents$, toolbarPlugin } from "./plugins/toolbar/index.js";
import { cmExtensions$, diffMarkdown$, diffSourcePlugin, readOnlyDiff$ } from "./plugins/diff-source/index.js";
import { markdownShortcutPlugin } from "./plugins/markdown-shortcut/index.js";
import { BlockTypeSelect } from "./plugins/toolbar/components/BlockTypeSelect.js";
import { BoldItalicUnderlineToggles, StrikeThroughSupSubToggles } from "./plugins/toolbar/components/BoldItalicUnderlineToggles.js";
import { ChangeAdmonitionType, admonitionLabelsMap } from "./plugins/toolbar/components/ChangeAdmonitionType.js";
import { ChangeCodeMirrorLanguage } from "./plugins/toolbar/components/ChangeCodeMirrorLanguage.js";
import { CodeToggle } from "./plugins/toolbar/components/CodeToggle.js";
import { CreateLink } from "./plugins/toolbar/components/CreateLink.js";
import { DiffSourceToggleWrapper } from "./plugins/toolbar/components/DiffSourceToggleWrapper.js";
import { InsertAdmonition } from "./plugins/toolbar/components/InsertAdmonition.js";
import { InsertCodeBlock } from "./plugins/toolbar/components/InsertCodeBlock.js";
import { InsertFrontmatter } from "./plugins/toolbar/components/InsertFrontmatter.js";
import { InsertImage } from "./plugins/toolbar/components/InsertImage.js";
import { InsertSandpack } from "./plugins/toolbar/components/InsertSandpack.js";
import { InsertTable } from "./plugins/toolbar/components/InsertTable.js";
import { InsertThematicBreak } from "./plugins/toolbar/components/InsertThematicBreak.js";
import { ListsToggle } from "./plugins/toolbar/components/ListsToggle.js";
import { ShowSandpackInfo } from "./plugins/toolbar/components/ShowSandpackInfo.js";
import { UndoRedo } from "./plugins/toolbar/components/UndoRedo.js";
import { KitchenSinkToolbar } from "./plugins/toolbar/components/KitchenSinkToolbar.js";
import { Button, ButtonOrDropdownButton, ButtonWithTooltip, ConditionalContents, MultipleChoiceToggleGroup, Root, Separator, SingleChoiceToggleGroup, SingleToggleGroup, ToggleSingleGroupWithItem, ToolbarToggleItem } from "./plugins/toolbar/primitives/toolbar.js";
import { DialogButton } from "./plugins/toolbar/primitives/DialogButton.js";
import { TooltipWrap } from "./plugins/toolbar/primitives/TooltipWrap.js";
import { Select, SelectButtonTrigger, SelectContent, SelectItem, SelectTrigger } from "./plugins/toolbar/primitives/select.js";
import { NestedEditorsContext, NestedLexicalEditor, useLexicalNodeRemove, useMdastNodeUpdater, useNestedEditorContext } from "./plugins/core/NestedLexicalEditor.js";
import { PropertyPopover } from "./plugins/core/PropertyPopover.js";
import { CAN_USE_DOM, IS_APPLE, controlOrMeta } from "./utils/detectMac.js";
import { always, call, compose, curry1to0, curry2to1, joinProc, noop, prop, tap, thrush } from "./utils/fp.js";
import { isPartOftheEditorUI } from "./utils/isPartOftheEditorUI.js";
import { fromWithinEditorRead, getSelectedNode, getSelectionRectangle, getStateAsMarkdown } from "./utils/lexicalHelpers.js";
import { makeHslTransparent } from "./utils/makeHslTransparent.js";
import { uuidv4 } from "./utils/uuid4.js";
import { voidEmitter } from "./utils/voidEmitter.js";
import { RealmWithPlugins, realmPlugin } from "./RealmWithPlugins.js";
import { DEFAULT_FORMAT, IS_BOLD, IS_CODE, IS_HIGHLIGHT, IS_ITALIC, IS_STRIKETHROUGH, IS_SUBSCRIPT, IS_SUPERSCRIPT, IS_UNDERLINE } from "./FormatConstants.js";
import { lexicalTheme } from "./styles/lexicalTheme.js";
import { htmlTags, isMdastHTMLNode } from "./plugins/core/MdastHTMLNode.js";
import { $createGenericHTMLNode, $isGenericHTMLNode, GenericHTMLNode, TYPE_NAME } from "./plugins/core/GenericHTMLNode.js";
import { $convertTableElement, $createTableNode, $isTableNode, TableNode } from "./plugins/table/TableNode.js";
import { $createImageNode, $isImageNode, ImageNode } from "./plugins/image/ImageNode.js";
import { $createFrontmatterNode, $isFrontmatterNode, FrontmatterNode } from "./plugins/frontmatter/FrontmatterNode.js";
import { $convertPreElement, $createCodeBlockNode, $isCodeBlockNode, CodeBlockNode, useCodeBlockEditorContext } from "./plugins/codeblock/CodeBlockNode.js";
import { $createDirectiveNode, $isDirectiveNode, DirectiveNode } from "./plugins/directives/DirectiveNode.js";
export {
  $convertPreElement,
  $convertTableElement,
  $createCodeBlockNode,
  $createDirectiveNode,
  $createFrontmatterNode,
  $createGenericHTMLNode,
  $createImageNode,
  $createTableNode,
  $isCodeBlockNode,
  $isDirectiveNode,
  $isFrontmatterNode,
  $isGenericHTMLNode,
  $isImageNode,
  $isTableNode,
  ADMONITION_TYPES,
  ALL_HEADING_LEVELS,
  AdmonitionDirectiveDescriptor,
  Appender,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  Button,
  ButtonOrDropdownButton,
  ButtonWithTooltip,
  CAN_USE_DOM,
  COMMON_STATE_CONFIG_EXTENSIONS,
  ChangeAdmonitionType,
  ChangeCodeMirrorLanguage,
  CodeBlockNode,
  CodeMirrorEditor,
  CodeToggle,
  ConditionalContents,
  CreateLink,
  DEFAULT_FORMAT,
  DialogButton,
  DiffSourceToggleWrapper,
  DirectiveNode,
  FrontmatterNode,
  GenericDirectiveEditor,
  GenericHTMLNode,
  GenericJsxEditor,
  INSERT_IMAGE_COMMAND,
  IS_APPLE,
  IS_BOLD,
  IS_CODE,
  IS_HIGHLIGHT,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
  ImageNode,
  InsertAdmonition,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  KitchenSinkToolbar,
  ListsToggle,
  MDXEditor,
  MarkdownParseError,
  MultipleChoiceToggleGroup,
  NESTED_EDITOR_UPDATED_COMMAND,
  NestedEditorsContext,
  NestedLexicalEditor,
  PropertyPopover,
  RealmWithPlugins,
  Root,
  SandpackEditor,
  Select,
  SelectButtonTrigger,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Separator,
  ShowSandpackInfo,
  SingleChoiceToggleGroup,
  SingleToggleGroup,
  StrikeThroughSupSubToggles,
  TYPE_NAME,
  TableNode,
  ToggleSingleGroupWithItem,
  ToolbarToggleItem,
  TooltipWrap,
  UndoRedo,
  UnrecognizedMarkdownConstructError,
  activeEditor$,
  activeEditorSubscriptions$,
  activePlugins$,
  addActivePlugin$,
  addBottomAreaChild$,
  addComposerChild$,
  addEditorWrapper$,
  addExportVisitor$,
  addImportVisitor$,
  addLexicalNode$,
  addMdastExtension$,
  addNestedEditorChild$,
  addSyntaxExtension$,
  addToMarkdownExtension$,
  addTopAreaChild$,
  admonitionLabelsMap,
  allowedHeadingLevels$,
  always,
  appendCodeBlockEditorDescriptor$,
  applyBlockType$,
  applyFormat$,
  applyLinkChanges$,
  applyListType$,
  autoFocus$,
  bottomAreaChildren$,
  call,
  cancelLinkEdit$,
  closeImageDialog$,
  cmExtensions$,
  codeBlockEditorDescriptors$,
  codeBlockLanguages$,
  codeBlockPlugin,
  codeMirrorAutoLoadLanguageSupport$,
  codeMirrorExtensions$,
  codeMirrorPlugin,
  compose,
  composerChildren$,
  contentEditableClassName$,
  contentEditableRef$,
  controlOrMeta,
  convertSelectionToNode$,
  corePlugin,
  createActiveEditorSubscription$,
  createRootEditorSubscription$,
  currentBlockType$,
  currentFormat$,
  currentListType$,
  currentSelection$,
  curry1to0,
  curry2to1,
  defaultCodeBlockLanguage$,
  defaultSvgIcons,
  diffMarkdown$,
  diffSourcePlugin,
  directiveDescriptors$,
  directivesPlugin,
  disableAutoLink$,
  disableImageResize$,
  disableImageSettingsButton$,
  editImageToolbarComponent$,
  editorInFocus$,
  editorRootElementRef$,
  editorWrappers$,
  exportLexicalTreeToMdast,
  exportMarkdownFromLexical,
  exportVisitors$,
  fromWithinEditorRead,
  frontmatterDialogOpen$,
  frontmatterPlugin,
  getSelectedNode,
  getSelectionRectangle,
  getStateAsMarkdown,
  hasFrontmatter$,
  headingsPlugin,
  historyState$,
  htmlTags,
  iconComponentFor$,
  imageAutocompleteSuggestions$,
  imageDialogState$,
  imagePlugin,
  imagePreviewHandler$,
  imageUploadHandler$,
  importMarkdownToLexical,
  importMdastTreeToLexical,
  importVisitors$,
  inFocus$,
  initialMarkdown$,
  initialMarkdownNormalize$,
  insertCodeBlock$,
  insertCodeMirror$,
  insertDecoratorNode$,
  insertDirective$,
  insertFrontmatter$,
  insertImage$,
  insertJsx$,
  insertMarkdown$,
  insertSandpack$,
  insertTable$,
  insertThematicBreak$,
  isMdastHTMLNode,
  isMdastJsxNode,
  isPartOftheEditorUI,
  joinProc,
  jsxComponentDescriptors$,
  jsxIsAvailable$,
  jsxPlugin,
  lexicalTheme,
  lexicalTheme$,
  linkAutocompleteSuggestions$,
  linkDialogPlugin,
  linkDialogState$,
  linkPlugin,
  listsPlugin,
  makeHslTransparent,
  markdown$,
  markdownErrorSignal$,
  markdownProcessingError$,
  markdownShortcutPlugin,
  markdownSourceEditorValue$,
  maxLengthPlugin,
  mdastExtensions$,
  muteChange$,
  nestedEditorChildren$,
  noop,
  onBlur$,
  onClickLinkCallback$,
  onReadOnlyClickLinkCallback$,
  onWindowChange$,
  openEditImageDialog$,
  openLinkEditDialog$,
  openNewImageDialog$,
  placeholder$,
  prop,
  quotePlugin,
  readOnly$,
  readOnlyDiff$,
  realmPlugin,
  removeFrontmatter$,
  removeLink$,
  rootEditor$,
  rootEditorSubscriptions$,
  sandpackConfig$,
  sandpackPlugin,
  saveImage$,
  setMarkdown$,
  spellCheck$,
  switchFromPreviewToLinkEdit$,
  syntaxExtensions$,
  tablePlugin,
  tap,
  thematicBreakPlugin,
  thrush,
  toMarkdownExtensions$,
  toMarkdownOptions$,
  toolbarClassName$,
  toolbarContents$,
  toolbarPlugin,
  topAreaChildren$,
  translation$,
  updateLink$,
  useCodeBlockEditorContext,
  useLexicalNodeRemove,
  useMdastNodeUpdater,
  useNestedEditorContext,
  useTranslation,
  usedLexicalNodes$,
  uuidv4,
  viewMode$,
  voidEmitter
};
