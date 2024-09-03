import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import kiffoRegular from './assets/Kiffo-BT-Regular.woff'
import bacteriaFont from './assets/BacteriaBT.woff2'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {rel:'', href:kiffoRegular},
  {rel:'', href:bacteriaFont}
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
