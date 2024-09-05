import { Navigation } from "./navigation"

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="relative">
		<Navigation/>
		<div  className="bg-squares  h-full absolute w-full opacity-[0.3]"></div>
		<div className="">
			{children}

		</div>

	</div>
}