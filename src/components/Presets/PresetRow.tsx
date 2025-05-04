import CodeBlock from '@theme/CodeBlock'
import { camelCase, upperFirst } from 'lodash'
import { easeOut, motion } from 'motion/react'

import { SCurve } from './SCurve'
import styles from './presets.module.css'
import { useState } from 'react'

export const PresetRow = ({ item, prefix }) => {
	const [isHover, setIsHover] = useState<boolean>(false)
	let name = item.name.toLowerCase().replaceAll('_', ' ')
	let variable = upperFirst(camelCase(item.name))

	const initial = {
		left: '0%',
	}
	const animate = {
		left: isHover ? 'calc(100% - 24px)' : '0%',
	}
	const transition = {
		repeat: isHover ? Infinity : 0,
		duration: isHover ? 2 : 0.25,
		repeatType: 'mirror' as const,
	}

	const containerVariant = {
		initial: {
			y: 0,
			boxShadow: '0 0px 0px rgba(0,0,0,0.12), 0 0px 0px rgba(0,0,0,0.24)',
			borderColor: `rgba(37, 194, 160, 0)`,
		},
		whileHover: {
			y: -2,
			boxShadow:
				'0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12)',
			borderColor: `rgba(37, 194, 160, .5)`,
			transition: {
				duration: 0.25,
				ease: easeOut,
			},
		},
	}

	return (
		<>
			<motion.div
				className={styles.rowContainer}
				initial="initial"
				whileHover="whileHover"
				variants={containerVariant}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<SCurve width={200} height={200} curve={item.curve} />
				<div className={styles.info}>
					<h3>{name}</h3>
					<h5>React</h5>
					<CodeBlock language="javascript">{`import { ${prefix}_${variable} } from '@nahana/react-easy-ease'`}</CodeBlock>
					<h5>CSS</h5>
					<CodeBlock language="css">{`var(--${prefix}_${variable})`}</CodeBlock>
					<h5>React Easy Ease</h5>
					<div className={styles.animationRow}>
						<motion.div
							initial={initial}
							animate={animate}
							transition={{ ...transition, ease: item.curve }}
							className={[styles.ball, styles.easy].join(' ')}
						></motion.div>
					</div>
					<div className={styles.animationRow}>
						<motion.div
							initial={initial}
							animate={animate}
							transition={{ ...transition, ease: 'linear' }}
							className={[styles.ball, styles.linear].join(' ')}
						></motion.div>
					</div>
					<h5>Linear</h5>
					<h6>Mouseover To Preview</h6>
					<motion.button
						className={styles.button}
						initial={{
							background: '#4fddbf',
						}}
						animate={{
							background: isHover ? '#e4adad' : '#4fddbf',
						}}
						onClick={() => setIsHover(p => !p)}
					>
						{isHover ? 'Stop' : 'Run'} Preview
					</motion.button>
				</div>
			</motion.div>
		</>
	)
}
