import { useCellValues } from "@mdxeditor/gurx";
import React__default from "react";
import styles from "../../styles/ui.module.css.js";
import { useCodeBlockEditorContext } from "../codeblock/CodeBlockNode.js";
import { useTranslation, readOnly$, iconComponentFor$ } from "../core/index.js";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import { lineNumbers, EditorView } from "@codemirror/view";
import { basicLight } from "cm6-theme-basic-light";
import { basicSetup } from "codemirror";
import { codeMirrorExtensions$, codeMirrorAutoLoadLanguageSupport$, codeBlockLanguages$ } from "./index.js";
import { useCodeMirrorRef } from "../sandpack/useCodeMirrorRef.js";
import { Select } from "../toolbar/primitives/select.js";
const COMMON_STATE_CONFIG_EXTENSIONS = [];
const EMPTY_VALUE = "__EMPTY_VALUE__";
const CodeMirrorEditor = ({ language, nodeKey, code, focusEmitter }) => {
  const t = useTranslation();
  const { parentEditor, lexicalNode } = useCodeBlockEditorContext();
  const [readOnly, codeMirrorExtensions, autoLoadLanguageSupport, iconComponentFor, codeBlockLanguages] = useCellValues(
    readOnly$,
    codeMirrorExtensions$,
    codeMirrorAutoLoadLanguageSupport$,
    iconComponentFor$,
    codeBlockLanguages$
  );
  const codeMirrorRef = useCodeMirrorRef(nodeKey, "codeblock", language, focusEmitter);
  const { setCode } = useCodeBlockEditorContext();
  const editorViewRef = React__default.useRef(null);
  const elRef = React__default.useRef(null);
  const setCodeRef = React__default.useRef(setCode);
  setCodeRef.current = setCode;
  codeMirrorRef.current = {
    getCodemirror: () => editorViewRef.current
  };
  React__default.useEffect(() => {
    void (async () => {
      const extensions = [
        ...codeMirrorExtensions,
        basicSetup,
        basicLight,
        lineNumbers(),
        EditorView.lineWrapping,
        EditorView.updateListener.of(({ state }) => {
          setCodeRef.current(state.doc.toString());
        })
      ];
      if (readOnly) {
        extensions.push(EditorState.readOnly.of(true));
      }
      if (language !== "" && autoLoadLanguageSupport) {
        const languageData = languages.find((l) => {
          return l.name === language || l.alias.includes(language) || l.extensions.includes(language);
        });
        if (languageData) {
          try {
            const languageSupport = await languageData.load();
            extensions.push(languageSupport.extension);
          } catch (e) {
            console.warn("failed to load language support for", language);
          }
        }
      }
      elRef.current.innerHTML = "";
      editorViewRef.current = new EditorView({
        parent: elRef.current,
        state: EditorState.create({ doc: code, extensions })
      });
    })();
    return () => {
      var _a;
      (_a = editorViewRef.current) == null ? void 0 : _a.destroy();
      editorViewRef.current = null;
    };
  }, [readOnly, language]);
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: styles.codeMirrorWrapper,
      onKeyDown: (e) => {
        e.stopPropagation();
      }
    },
    /* @__PURE__ */ React__default.createElement("div", { className: styles.codeMirrorToolbar }, /* @__PURE__ */ React__default.createElement(
      Select,
      {
        disabled: readOnly,
        value: language,
        onChange: (language2) => {
          parentEditor.update(() => {
            lexicalNode.setLanguage(language2 === EMPTY_VALUE ? "" : language2);
            setTimeout(() => {
              parentEditor.update(() => {
                lexicalNode.getLatest().select();
              });
            });
          });
        },
        triggerTitle: t("codeBlock.selectLanguage", "Select code block language"),
        placeholder: t("codeBlock.inlineLanguage", "Language"),
        items: Object.entries(codeBlockLanguages).map(([value, label]) => ({ value: value ? value : EMPTY_VALUE, label }))
      }
    ), /* @__PURE__ */ React__default.createElement(
      "button",
      {
        className: styles.iconButton,
        type: "button",
        disabled: readOnly,
        title: t("codeblock.delete", "Delete code block"),
        onClick: (e) => {
          e.preventDefault();
          parentEditor.update(() => {
            lexicalNode.remove();
          });
        }
      },
      iconComponentFor("delete_small")
    )),
    /* @__PURE__ */ React__default.createElement("div", { ref: elRef })
  );
};
export {
  COMMON_STATE_CONFIG_EXTENSIONS,
  CodeMirrorEditor
};
