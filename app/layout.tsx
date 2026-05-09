import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Casal Arq & Eng | Arquitetura, Engenharia e Steel Frame',
  description: 'Gestão integrada de obras, arquitetura, engenharia, Steel Frame, infraestrutura, regularização, kits estruturais e acompanhamento técnico em Miguel Pereira/RJ.',
  keywords: ['Casal Arq & Eng', 'arquitetura', 'engenharia', 'Steel Frame', 'construção industrializada', 'Miguel Pereira', 'RJ'],
  openGraph: {
    title: 'Casal Arq & Eng',
    description: 'Obras organizadas, seguras e previsíveis do terreno à entrega final.',
    url: 'https://casalarqeng.com.br',
    siteName: 'Casal Arq & Eng',
    locale: 'pt_BR',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
