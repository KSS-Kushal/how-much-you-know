 "use client"
import { ThemeProvider } from "@material-tailwind/react";
 
export default function CustomLayout({ children }) {
  return (
    <ThemeProvider children={children}></ThemeProvider>
  );
}