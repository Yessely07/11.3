// src/app/layout.tsx//
import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="bg-blue-900 text-white text-center py-4">
            <h1 className="text-2xl">Sistema Web con React</h1>
          </header>
          <div className="flex flex-1">
            <aside className="bg-blue-800 text-white w-1/4 p-4">
              <ul>
                <li className="py-2"><a href="/" className="text-pink-500">Home</a></li>
                <li className="py-2"><a href="/products">Products</a></li>
                <li className="py-2"><a href="/services">Services</a></li>
                <li className="py-2"><a href="/contact">Contact</a></li>
                <li className="py-2"><a href="/other">Other</a></li>
              </ul>
              <div className="mt-4">
              <img src="/images/imagen.jpg" alt="Description of Image" className="w-full h-auto" />
              </div>
            </aside>
            <main className="bg-gray-100 w-3/4 p-4">
              {children}
            </main>
          </div>
          <footer className="bg-black text-white text-center py-4">
            <p>&copy; Derechos Reservados</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
