---
sidebar_position: 3
hide_table_of_contents: true
---

import { PresetRow } from '../../src/components/Presets/PresetRow'
import { andrewEmbury as values } from '../../src/components/Presets/presets/andrewEmbury'

import styles from '../../src/components/Presets/presets.module.css'

# Andrew Embury

### Andrew Embury's extravaganza animation presets

Homepage: [yellowlab.tv](https://www.yellowlab.tv/)

Instagram: [@yellowlabtv](https://www.instagram.com/yellowlabtv/)

<div className={styles.container}>
    {values.presets.map(item => (
	    <PresetRow item={item} prefix={values.prefix} />
	))}
</div>
