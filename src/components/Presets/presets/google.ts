export const google = {
	author: 'Google Material',
	prefix: 'GM',
	url: 'https://m3.material.io/styles/motion/easing-and-duration/tokens-specs',
	presets: [
		{
			name: 'EMPHASIZED_DECELERATE',
			curve: [0.05, 0.7, 0.1, 1.0],
		},
		{
			name: 'EMPHASIZED_ACCELERATE',
			curve: [0.3, 0.0, 0.8, 0.15],
		},
		{
			name: 'STANDARD',
			curve: [0.2, 0.0, 0, 1.0],
		},
		{
			name: 'STANDARD_DECELERATE',
			curve: [0, 0, 0, 1],
		},
		{
			name: 'STANDARD_ACCELERATE',
			curve: [0.3, 0, 1, 1],
		},
	],
}
