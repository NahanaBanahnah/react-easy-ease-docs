import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export const InstallTab = () => {
	return (
		<Tabs>
			<TabItem value="npm" label="npm" default>
				<CodeBlock language="bash">{`npm i @nahana/react-easy-ease`}</CodeBlock>
			</TabItem>
			<TabItem value="pnpm" label="pnpm">
				<CodeBlock language="bash">{`pnpm add @nahana/react-easy-ease`}</CodeBlock>
			</TabItem>
			<TabItem value="Yarn" label="Yarn">
				<CodeBlock language="bash">{`yarn add @nahana/react-easy-ease`}</CodeBlock>
			</TabItem>
		</Tabs>
	)
}

// <>
// 	<div>asdfasdfds</div>

// </>
