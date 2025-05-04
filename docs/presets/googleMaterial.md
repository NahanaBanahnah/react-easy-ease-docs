---
sidebar_position: 2
hide_table_of_contents: true
---

import { PresetRow } from '../../src/components/Presets/PresetRow'
import { google as values } from '../../src/components/Presets/presets/google'

import styles from '../../src/components/Presets/presets.module.css'

# Google Material

Google [Material 3 Easeing](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs)

<div className={styles.container}>
    {values.presets.map(item => (
	    <PresetRow item={item} prefix={values.prefix} />
	))}
</div>
