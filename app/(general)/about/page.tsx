import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Esta es la página que habla sobre la empresa',
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}