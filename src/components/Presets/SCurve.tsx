import styles from './presets.module.css'

export const SCurve = ({ width, height, curve }) => {
	const c1 = curve[0] * width
	const c2 = height - curve[1] * height
	const c3 = curve[2] * width
	const c4 = height - curve[3] * height
	const padding = 100
	const paddingSide = padding / 2

	return (
		<div className={styles.curveContainer}>
			<svg width={width + padding} height={height + padding}>
				<rect width="100%" height="100%" className={styles.rect} />
				<rect
					width={width}
					height={height}
					className={styles.rect}
					x={paddingSide}
					y={paddingSide}
				/>
				<line
					x1={width + paddingSide}
					y1={0 + paddingSide}
					x2={0 + paddingSide}
					y2={height + paddingSide}
					className={styles.linearLine}
					stroke-width="2"
				/>
				<line
					x1={paddingSide}
					y1={height + paddingSide}
					x2={c1 + paddingSide}
					y2={c2 + paddingSide}
					className={styles.handleLine}
				/>
				<line
					x1={width + paddingSide}
					y1={paddingSide}
					x2={c3 + paddingSide}
					y2={c4 + paddingSide}
					className={styles.handleLine}
				/>
				<circle
					cx={c1 + paddingSide}
					cy={c2 + paddingSide}
					r="5"
					className={styles.handleOne}
				/>
				<circle
					cx={c3 + paddingSide}
					cy={c4 + paddingSide}
					r="5"
					className={styles.handleTwo}
				/>

				<path
					className={styles.curve}
					d={`M ${paddingSide} ${height + paddingSide} C ${
						c1 + paddingSide
					} ${c2 + paddingSide} ${c3 + paddingSide} ${
						c4 + paddingSide
					} ${width + paddingSide} ${paddingSide}`}
					stroke-width="2"
					fill="none"
				/>
			</svg>
		</div>
	)
}
