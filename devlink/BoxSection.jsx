"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BoxSection.module.css";

export function BoxSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "hero-heading-center")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container-2")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "centered-heading",
            "margin-bottom-32px"
          )}
          tag="h1"
        >
          {"Title copy goes here"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-split")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "margin-bottom-24px")}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum. Proin viverra nulla sem, vel molestie lacus volutpat nec. Integer ut bibendum erat."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-primary")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Start for free"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-split")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "shadow-two")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
