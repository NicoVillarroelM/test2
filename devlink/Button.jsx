"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({ as: _Component = _Builtin.Link, url, text = "Click Me", ...props }) {
  return (
    <_Component
      className={_utils.cx(_styles, "uui-button", "is-button-large")}
      button={false}
      block="inline"
      options={{
        href: url,
      }}
      text={text}
      {...props}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
