---
sidebar_position: 2
hide_table_of_contents: true
---

# CSS

Import the React Easy Ease stylesheet into your **global** stylesheet for use throughout your project.

```css global.css"
/** IMPORT PACKAGE VARS */
@import url('@nahana/react-easy-ease/css');

a {
	color: #fff;
	transition: color 0.5 var(--RP_EaseInOutBack);
}
```
