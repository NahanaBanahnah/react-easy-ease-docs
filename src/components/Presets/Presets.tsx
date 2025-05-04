import React from 'react'

import { penner as values } from './presets/penner'

import styles from './presets.module.css'
import { PresetRow } from './PresetRow'

export const Presets = () => {
	return (
		<>
			<div className={styles.container}>
				{values.presets.map(item => (
					<PresetRow item={item} prefix={values.prefix} />
				))}
			</div>
		</>
	)
}
