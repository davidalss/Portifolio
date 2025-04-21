import "./globals.css"
import "@/public/style.css"
import tabLogo from "@/public/tabLogo.png"

export const metadata = {
    title: "David Alisson",
    description: "David Alisson Portfolio",
    icons: {
        icon: tabLogo.src,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
