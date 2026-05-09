import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Factory, Hammer, Home, Mail, MapPin, Phone, Ruler, ShieldCheck, Trees, Wrench } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5524981257978?text=Olá,%20vim%20pelo%20site%20da%20Casal%20Arq%20%26%20Eng%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

const etapas = [
  { icon: MapPin, title: 'Terreno & Viabilidade', text: 'Topografia, inventário arbóreo e análise técnica inicial.' },
  { icon: Ruler, title: 'Projetos', text: 'Arquitetônico, estrutural, terraplenagem e complementares.' },
  { icon: ClipboardCheck, title: 'Regularização', text: 'Suporte com prefeitura, cartório, documentação e licenças.' },
  { icon: Building2, title: 'Infraestrutura & Obra Cinza', text: 'Terraplenagem, radier, contenções, calçamento e preparação técnica.' },
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
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Unimos arquitetura, engenharia e gestão integrada para entregar obras residenciais e comerciais com organização, padrão técnico e construção industrializada.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8c89b] px-7 py-4 font-semibold text-slate-950 transition hover:bg-white">
                Solicitar orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-950">
                Conhecer serviços
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Gestão completa', 'Do estudo do terreno à entrega das chaves.'],
                ['Serviços avulsos', 'Contrate por etapa ou por necessidade.'],
                ['Steel Frame', 'Rapidez, precisão e obra mais limpa.'],
                ['Alto padrão', 'Controle técnico e qualidade de execução.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-slate-950/60 p-6">
                  <CheckCircle2 className="mb-5 h-7 w-7 text-[#d8c89b]" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#789095]">O que fazemos</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Soluções integradas em arquitetura, engenharia e execução.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Você pode contratar a obra completa, por fase ou apenas o serviço que precisar.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {etapas.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#789095]/15 text-[#456166]"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="processo" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8c89b]">Serviços avulsos</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Contrate o processo completo ou apenas uma etapa.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">Atendemos projetos residenciais e comerciais, simples ou alto padrão, com acompanhamento técnico conforme a necessidade da obra.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {servicos.map((servico) => (
              <div key={servico} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#d8c89b]" />
                <span>{servico}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steel-frame" className="bg-[#eef2f2] px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#789095] p-8 text-white md:p-12">
            <Factory className="mb-8 h-12 w-12 text-[#d8c89b]" />
            <h2 className="text-3xl font-semibold md:text-5xl">Steel Frame com planejamento, controle e padrão técnico.</h2>
            <p className="mt-6 text-lg leading-8 text-white/80">Executamos obras em Steel Frame com preparação, estrutura, fechamentos, instalações, acabamentos e entrega final.</p>
          </div>
          <div className="grid content-center gap-4 sm:grid-cols-2">
            {vantagens.map((vantagem) => (
              <div key={vantagem} className="rounded-3xl bg-white p-6 shadow-sm">
                <ShieldCheck className="mb-4 h-6 w-6 text-[#789095]" />
                <p className="font-medium">{vantagem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8">
            <Trees className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="text-2xl font-semibold">Terreno & Infraestrutura</h3>
            <p className="mt-4 leading-7 text-slate-600">Preparação técnica do terreno, topografia, inventário, terraplenagem, fundações, contenções e obra cinza.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <Home className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="text-2xl font-semibold">Interiores</h3>
            <p className="mt-4 leading-7 text-slate-600">Projetos residenciais e comerciais com layout, modelagem 3D, imagens realistas, materiais e acabamentos.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <Wrench className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="text-2xl font-semibold">Kits & Materiais</h3>
            <p className="mt-4 leading-7 text-slate-600">Kits estruturais completos, aço, placas, isolamento, drywall, forros e suporte técnico para implantação.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#d8c89b] p-8 text-slate-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Contato</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Vamos planejar sua obra com segurança e previsibilidade?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-800">Entre em contato para orçamentos de material, kits prontos, projetos ou gestão completa de obra.</p>
              <a href={whatsappUrl} target="_blank" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-950">
                Falar pelo WhatsApp <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="grid content-center gap-4 text-lg">
              <a href="tel:+5524981257978" className="flex items-center gap-3"><Phone className="h-5 w-5" /> (24) 98125-7978</a>
              <a href="mailto:thaisa.cosaquevite@gmail.com" className="flex items-center gap-3"><Mail className="h-5 w-5" /> thaisa.cosaquevite@gmail.com</a>
              <a href="https://instagram.com/arq.thaisacosaquevite" target="_blank" className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-950 text-xs font-bold text-[#d8c89b]">IG</span> @arq.thaisacosaquevite</a>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Miguel Pereira/RJ</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/55">
        © 2026 Casal Arq & Eng. Arquitetura, Engenharia, Gestão e Construção Industrializada.
      </footer>

      <a href={whatsappUrl} target="_blank" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-2xl transition hover:scale-105">
        WhatsApp
      </a>
    </main>
  );
}
