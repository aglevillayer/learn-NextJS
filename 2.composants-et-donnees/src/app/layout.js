import "./globals.css";
import SwitchThemeBtn from "@/components/SwitchThemeBtn";
import { DarkModeProvider } from "@/context/DarkModeContext"; // on aurait pu faire le context ici directement parce qu'on ne l'utilise pas ailleurs

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-20 dark:bg-slate-900 dark:text-slate-100">
        <DarkModeProvider>
          <SwitchThemeBtn/> {/* là notre bouton aura accès au context puisqu'il est entouré du provider. Il faut maintenant l'utiliser dans notre composant bouton en important le context DarkMode */}
          {children}
        </DarkModeProvider> 
      </body>
    </html>
  );
}
