---
sidebar_position: 1
hide_table_of_contents: true
---

# Motion

Import **a curve preset** to pass to Motion's **ease** prop.

```jsx "
import { motion } from 'motion/react'

/** IMPORT EASE PRESET  */
import { RP_EaseInOutBack } from 'react-easy-ease'

export const Animate = () => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 10, opacity: 1 }}
			transition={{
				duration: 0.5,
				ease: RP_EaseInOutBack,
			}}
		>
			I ZOOM IN
		</motion.div>
	)
}
```
