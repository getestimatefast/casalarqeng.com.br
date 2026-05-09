import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Factory, Hammer, Home, Mail, MapPin, Phone, Ruler, ShieldCheck, Trees, Wrench } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5524981257978?text=Olá,%20vim%20pelo%20site%20da%20Casal%20Arq%20%26%20Eng%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

const etapas = [
  { icon: MapPin, title: 'Terreno & Viabilidade', text: 'Topografia, inventário arbóreo e análise técnica inicial.' },
  { icon: Ruler, title: 'Projetos', text: 'Arquitetônico, estrutural, terraplenagem e complementares.' },
  { icon: ClipboardCheck, title: 'Regularização', text: 'Suporte com prefeitura, cartório, documentação e licenças.' },
  { icon: Building2, title: 'Infraestrutura', text: 'Terraplenagem, radier, contenções, calçamento e obra cinza.' },
  { icon: Factory, title: 'Construção Industrializada', text: 'Steel Frame, pré-moldados, kits estruturais e soluções modulares.' },
  { icon: Hammer, title: 'Gestão & Entrega', text: 'Acompanhamento técnico, qualidade, cronograma e entrega final.' },
];

const servicos = [
  'Topografia, locação e acompanhamento',
  'Inventário arbóreo e suporte ambiental',
  'Projeto arquitetônico residencial e comercial',
  'Projeto estrutural e projeto de terraplenagem',
  'Legalização junto à prefeitura e cartório',
  'Terraplenagem, radier, contenções e calçamento',
  'Execução em Steel Frame do radier à entrega',
  'Fornecimento de material Steel Frame',
  'Kits estruturais completos',
  'Acompanhamento técnico e gerenciamento de obra',
];

const vantagens = [
  'Obra mais rápida e organizada',
  'Menos entulho e retrabalho',
  'Alto desempenho térmico e acústico',
  'Planejamento técnico por etapa',
  'Controle de qualidade na execução',
  'Mais previsibilidade de prazo e entrega',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-lg font-semibold tracking-[0.2em]">CASAL ARQ & ENG</a>
          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#processo" className="hover:text-white">Processo</a>
            <a href="#steel-frame" className="hover:text-white">Steel Frame</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
          <a href={whatsappUrl} target="_blank" className="rounded-full bg-[#d8c89b] px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white">
            Orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(216,200,155,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(120,144,149,0.28),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#d8c89b]">Projetos • Infraestrutura • Steel Frame</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Obras organizadas, seguras e previsíveis do terreno à entrega final.
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
