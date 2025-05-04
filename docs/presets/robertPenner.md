---
sidebar_position: 1
hide_table_of_contents: true
---

import { PresetRow } from '../../src/components/Presets/PresetRow'
import { penner as values } from '../../src/components/Presets/presets/penner'

import styles from '../../src/components/Presets/presets.module.css'

# Robert Penner

Original cubic bezier function by [Robert Penner](http://robertpenner.com/easing/)

CSS interpretations by [Matthew Lein](https://matthewlein.com/tools/ceaser)

<div className={styles.container}>
    {values.presets.map(item => (
	    <PresetRow item={item} prefix={values.prefix} />
	))}
</div>
