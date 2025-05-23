import { $getNodeByKey, $createParagraphNode } from "lexical";
import React__default from "react";
import { useCodeBlockEditorContext } from "../codeblock/CodeBlockNode.js";
import { activeEditor$, editorInFocus$ } from "../core/index.js";
import { useCellValue, usePublisher } from "@mdxeditor/gurx";
function useCodeMirrorRef(nodeKey, editorType, language, focusEmitter) {
  const activeEditor = useCellValue(activeEditor$);
  const setEditorInFocus = usePublisher(editorInFocus$);
  const codeMirrorRef = React__default.useRef(null);
  const { lexicalNode } = useCodeBlockEditorContext();
  const atBottom = React__default.useRef(false);
  const atTop = React__default.useRef(false);
  const onFocusHandler = React__default.useCallback(() => {
    setEditorInFocus({
      editorType,
      rootNode: lexicalNode
    });
  }, [editorType, lexicalNode, setEditorInFocus]);
  const onKeyDownHandler = React__default.useCallback(
    (e) => {
      var _a, _b, _c, _d, _e, _f;
      if (e.key === "ArrowDown") {
        const state = (_b = (_a = codeMirrorRef.current) == null ? void 0 : _a.getCodemirror()) == null ? void 0 : _b.state;
        if (state) {
          const docLength = state.doc.length;
          const selectionEnd = state.selection.ranges[0].to;
          if (docLength === selectionEnd) {
            if (!atBottom.current) {
              atBottom.current = true;
            } else {
              activeEditor == null ? void 0 : activeEditor.update(() => {
                var _a2, _b2;
                const node = $getNodeByKey(nodeKey);
                const nextSibling = node.getNextSibling();
                if (nextSibling) {
                  (_b2 = (_a2 = codeMirrorRef.current) == null ? void 0 : _a2.getCodemirror()) == null ? void 0 : _b2.contentDOM.blur();
                  node.selectNext();
                } else {
                  node.insertAfter($createParagraphNode());
                }
              });
              atBottom.current = false;
            }
          }
        }
      } else if (e.key === "ArrowUp") {
        const state = (_d = (_c = codeMirrorRef.current) == null ? void 0 : _c.getCodemirror()) == null ? void 0 : _d.state;
        if (state) {
          const selectionStart = state.selection.ranges[0].from;
          if (selectionStart === 0) {
            if (!atTop.current) {
              atTop.current = true;
            } else {
              activeEditor == null ? void 0 : activeEditor.update(() => {
                var _a2, _b2;
                const node = $getNodeByKey(nodeKey);
                const previousSibling = node.getPreviousSibling();
                if (previousSibling) {
                  (_b2 = (_a2 = codeMirrorRef.current) == null ? void 0 : _a2.getCodemirror()) == null ? void 0 : _b2.contentDOM.blur();
                  node.selectPrevious();
                }
              });
              atTop.current = false;
            }
          }
        }
      } else if (e.key === "Enter") {
        e.stopPropagation();
      } else if (e.key === "Backspace" || e.key === "Delete") {
        const state = (_f = (_e = codeMirrorRef.current) == null ? void 0 : _e.getCodemirror()) == null ? void 0 : _f.state;
        const docLength = state == null ? void 0 : state.doc.length;
        if (docLength === 0) {
          activeEditor == null ? void 0 : activeEditor.update(() => {
            const node = $getNodeByKey(nodeKey);
            node.remove();
          });
        }
      }
    },
    [activeEditor, nodeKey]
  );
  React__default.useEffect(() => {
    const codeMirror = codeMirrorRef.current;
    setTimeout(() => {
      var _a, _b;
      (_a = codeMirror == null ? void 0 : codeMirror.getCodemirror()) == null ? void 0 : _a.contentDOM.addEventListener("focus", onFocusHandler);
      (_b = codeMirror == null ? void 0 : codeMirror.getCodemirror()) == null ? void 0 : _b.contentDOM.addEventListener("keydown", onKeyDownHandler);
    }, 300);
    return () => {
      var _a, _b;
      (_a = codeMirror == null ? void 0 : codeMirror.getCodemirror()) == null ? void 0 : _a.contentDOM.removeEventListener("focus", onFocusHandler);
      (_b = codeMirror == null ? void 0 : codeMirror.getCodemirror()) == null ? void 0 : _b.contentDOM.removeEventListener("keydown", onKeyDownHandler);
    };
  }, [codeMirrorRef, onFocusHandler, onKeyDownHandler, language]);
  React__default.useEffect(() => {
    focusEmitter.subscribe(() => {
      var _a, _b;
      (_b = (_a = codeMirrorRef.current) == null ? void 0 : _a.getCodemirror()) == null ? void 0 : _b.focus();
      onFocusHandler();
    });
  }, [focusEmitter, codeMirrorRef, nodeKey, onFocusHandler]);
  return codeMirrorRef;
}
export {
  useCodeMirrorRef
};
