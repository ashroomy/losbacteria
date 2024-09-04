import { Navigation } from "./navigation"

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="">
		<Navigation/>
		<div className="bg-squares bg-opacity-5">
			{children}

		</div>

	</div>
}