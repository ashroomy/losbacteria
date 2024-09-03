import { Navigation } from "./navigation"

export function Layout({ children }: { children: React.ReactNode }) {
	return <div>
		<Navigation/>
		<div>
			{children}

		</div>

	</div>
}