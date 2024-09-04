import { Navigation } from "./navigation"

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="relative">
		<Navigation/>
		<div  className="bg-squares bg-opacity-5 h-full absolute w-full opacity-[0.5]"></div>
		<div>
			{children}

		</div>

	</div>
}