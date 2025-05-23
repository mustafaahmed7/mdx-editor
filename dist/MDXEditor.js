import { useCellValue, usePublisher, useCellValues, useRealm } from "@mdxeditor/gurx";
import React__default from "react";
import { RealmWithPlugins } from "./RealmWithPlugins.js";
import { corePlugin, rootEditor$, useTranslation, contentEditableRef$, contentEditableClassName$, spellCheck$, composerChildren$, topAreaChildren$, editorWrappers$, placeholder$, bottomAreaChildren$, editorRootElementRef$, viewMode$, markdownSourceEditorValue$, markdown$, setMarkdown$, insertMarkdown$ } from "./plugins/core/index.js";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import classNames from "classnames";
import { lexicalTheme } from "./styles/lexicalTheme.js";
import styles from "./styles/ui.module.css.js";
import { noop } from "./utils/fp.js";
import { createLexicalComposerContext, LexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { defaultSvgIcons } from "./defaultSvgIcons.js";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
const LexicalProvider = ({ children }) => {
  const rootEditor = useCellValue(rootEditor$);
  const composerContextValue = React__default.useMemo(() => {
    return [rootEditor, createLexicalComposerContext(null, lexicalTheme)];
  }, [rootEditor]);
  return /* @__PURE__ */ React__default.createElement(LexicalComposerContext.Provider, { value: composerContextValue }, children);
};
const RichTextEditor = () => {
  const t = useTranslation();
  const setContentEditableRef = usePublisher(contentEditableRef$);
  const onRef = (_contentEditableRef) => {
    setContentEditableRef({ current: _contentEditableRef });
  };
  const [contentEditableClassName, spellCheck, composerChildren, topAreaChildren, editorWrappers, placeholder, bottomAreaChildren] = useCellValues(
    contentEditableClassName$,
    spellCheck$,
    composerChildren$,
    topAreaChildren$,
    editorWrappers$,
    placeholder$,
    bottomAreaChildren$
  );
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, topAreaChildren.map((Child, index) => /* @__PURE__ */ React__default.createElement(Child, { key: index })), /* @__PURE__ */ React__default.createElement(RenderRecursiveWrappers, { wrappers: editorWrappers }, /* @__PURE__ */ React__default.createElement("div", { className: classNames(styles.rootContentEditableWrapper, "mdxeditor-root-contenteditable") }, /* @__PURE__ */ React__default.createElement(
    RichTextPlugin,
    {
      contentEditable: /* @__PURE__ */ React__default.createElement("div", { ref: onRef }, /* @__PURE__ */ React__default.createElement(
        ContentEditable,
        {
          className: classNames(styles.contentEditable, contentEditableClassName),
          ariaLabel: t("contentArea.editableMarkdown", "editable markdown"),
          spellCheck
        }
      )),
      placeholder: /* @__PURE__ */ React__default.createElement("div", { className: classNames(styles.contentEditable, styles.placeholder, contentEditableClassName) }, /* @__PURE__ */ React__default.createElement("p", null, placeholder)),
      ErrorBoundary: LexicalErrorBoundary
    }
  ))), composerChildren.map((Child, index) => /* @__PURE__ */ React__default.createElement(Child, { key: index })), bottomAreaChildren.map((Child, index) => /* @__PURE__ */ React__default.createElement(Child, { key: index })));
};
const DEFAULT_MARKDOWN_OPTIONS = {
  listItemIndent: "one"
};
const defaultIconComponentFor = (name) => {
  return defaultSvgIcons[name];
};
function defaultTranslation(key, defaultValue, interpolations = {}) {
  let value = defaultValue;
  for (const [k, v] of Object.entries(interpolations)) {
    value = value.replaceAll(`{{${k}}}`, String(v));
  }
  return value;
}
const RenderRecursiveWrappers = ({ wrappers, children }) => {
  if (wrappers.length === 0) {
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children);
  }
  const Wrapper = wrappers[0];
  return /* @__PURE__ */ React__default.createElement(Wrapper, null, /* @__PURE__ */ React__default.createElement(RenderRecursiveWrappers, { wrappers: wrappers.slice(1) }, children));
};
const EditorRootElement = ({ children, className, overlayContainer }) => {
  const editorRootElementRef = React__default.useRef(null);
  const setEditorRootElementRef = usePublisher(editorRootElementRef$);
  React__default.useEffect(() => {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add(
      "mdxeditor-popup-container",
      styles.editorRoot,
      styles.popupContainer,
      ...(className ?? "").trim().split(" ").filter(Boolean)
    );
    const container = overlayContainer ?? document.body;
    container.appendChild(popupContainer);
    editorRootElementRef.current = popupContainer;
    setEditorRootElementRef(editorRootElementRef);
    return () => {
      popupContainer.remove();
    };
  }, [className, editorRootElementRef, overlayContainer, setEditorRootElementRef]);
  return /* @__PURE__ */ React__default.createElement("div", { className: classNames("mdxeditor", styles.editorRoot, styles.editorWrapper, className) }, children);
};
const Methods = ({ mdxRef }) => {
  const realm = useRealm();
  React__default.useImperativeHandle(
    mdxRef,
    () => {
      return {
        getMarkdown: () => {
          if (realm.getValue(viewMode$) === "source") {
            return realm.getValue(markdownSourceEditorValue$);
          }
          return realm.getValue(markdown$);
        },
        setMarkdown: (markdown) => {
          realm.pub(setMarkdown$, markdown);
        },
        insertMarkdown: (markdown) => {
          realm.pub(insertMarkdown$, markdown);
        },
        focus: (callbackFn, opts) => {
          var _a;
          (_a = realm.getValue(rootEditor$)) == null ? void 0 : _a.focus(callbackFn, opts);
        }
      };
    },
    [realm]
  );
  return null;
};
const MDXEditor = React__default.forwardRef((props, ref) => {
  return /* @__PURE__ */ React__default.createElement(
    RealmWithPlugins,
    {
      plugins: [
        corePlugin({
          contentEditableClassName: props.contentEditableClassName ?? "",
          spellCheck: props.spellCheck ?? true,
          initialMarkdown: props.markdown,
          onChange: props.onChange ?? noop,
          onBlur: props.onBlur ?? noop,
          toMarkdownOptions: props.toMarkdownOptions ?? DEFAULT_MARKDOWN_OPTIONS,
          autoFocus: props.autoFocus ?? false,
          placeholder: props.placeholder ?? "",
          readOnly: Boolean(props.readOnly),
          iconComponentFor: props.iconComponentFor ?? defaultIconComponentFor,
          suppressHtmlProcessing: props.suppressHtmlProcessing ?? false,
          onError: props.onError ?? noop,
          translation: props.translation ?? defaultTranslation,
          trim: props.trim ?? true,
          lexicalTheme: props.lexicalTheme
        }),
        ...props.plugins ?? []
      ]
    },
    /* @__PURE__ */ React__default.createElement(EditorRootElement, { className: props.className, overlayContainer: props.overlayContainer }, /* @__PURE__ */ React__default.createElement(LexicalProvider, null, /* @__PURE__ */ React__default.createElement(RichTextEditor, null))),
    /* @__PURE__ */ React__default.createElement(Methods, { mdxRef: ref })
  );
});
export {
  MDXEditor
};
