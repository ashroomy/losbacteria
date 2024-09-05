import { Navigation } from "./navigation"

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="relative">
		<Navigation/>
		{/* <div  className="bg-squares  h-screen max-h-screen absolute w-full opacity-[0.3] z-0"></div> */}
		<div className="z-1">
			{children}

		</div>

	</div>
}