import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Factory, Hammer, Home, Mail, MapPin, Phone, Ruler, ShieldCheck, Trees, Wrench } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5524981257978?text=Olá,%20vim%20pelo%20site%20da%20Casal%20Arq%20%26%20Eng%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

const etapas = [
  { icon: MapPin, title: 'Terreno', text: 'Topografia, inventário arbóreo e análise técnica inicial.' },
  { icon: Ruler, title: 'Projeto', text: 'Arquitetônico, estrutural, terraplenagem e complementares.' },
  { icon: ClipboardCheck, title: 'Legalização', text: 'Prefeitura, cartório, documentação, licenças e autorizações.' },
  { icon: Building2, title: 'Infraestrutura', text: 'Terraplenagem, radier, contenções, calçamento e obra cinza.' },
  { icon: Factory, title: 'Construção', text: 'Steel Frame, pré-moldados, kits estruturais e soluções modulares.' },
];

const processo = [
  'Terreno & Viabilidade',
  'Projetos',
  'Regularização',
  'Infraestrutura & Obra Cinza',
  'Construção Industrializada',
  'Fechamentos & Instalações',
  'Gestão & Entrega',
];

const servicosTerreno = [
  'Topografia, locação e acompanhamento',
  'Inventário arbóreo e suporte ambiental',
  'Projeto arquitetônico residencial e comercial',
  'Projeto estrutural e projeto de terraplenagem',
  'Legalização junto à prefeitura e cartório',
];

const servicosExecucao = [
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

const image = (name: string) => `/images/${name}`;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#6f878b] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e1b879]/15 bg-[#0b1720]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="font-serif text-xl font-semibold tracking-[0.28em] text-[#e1b879]">CASAL</a>
          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#quem-somos" className="hover:text-[#e1b879]">Quem somos</a>
            <a href="#servicos" className="hover:text-[#e1b879]">Serviços</a>
            <a href="#processo" className="hover:text-[#e1b879]">Processo</a>
            <a href="#steel-frame" className="hover:text-[#e1b879]">Steel Frame</a>
            <a href="#contato" className="hover:text-[#e1b879]">Contato</a>
          </nav>
          <a href={whatsappUrl} target="_blank" className="rounded-full bg-[#e1c890] px-5 py-2 text-sm font-semibold text-[#0b1720] transition hover:bg-white">
            Orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#0b1720] pt-16">
        <img src={image('hero-steel-frame.png')} alt="Casa moderna em Steel Frame" className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1720]/98 via-[#0b1720]/76 to-[#0b1720]/28" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1720] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-[#e1c890]">Projetos • Infraestrutura • Steel Frame</p>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
              Obras organizadas, seguras e previsíveis do terreno à entrega final.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Arquitetura, engenharia, gestão de obras e construção industrializada em Steel Frame para projetos residenciais e comerciais.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e1c890] px-7 py-4 font-semibold text-[#0b1720] transition hover:bg-white">
                Solicitar orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0b1720]">
                Conhecer serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="relative bg-[#6f878b] px-6 py-24">
        <div className="pointer-events-none absolute left-6 top-8 h-28 w-28 rounded-tl-[2rem] border-l border-t border-[#e1b879]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#e1c890]">Casal Arq & Eng</p>
            <h2 className="font-serif text-5xl font-semibold text-[#f1d59d] md:text-7xl">Quem somos</h2>
            <div className="mt-5 h-px w-80 max-w-full bg-[#e1b879]" />
            <p className="mt-8 text-lg leading-8 text-white/90 md:text-xl md:leading-9">
              Somos uma empresa especializada em gestão integrada de obras e construção industrializada. Unimos arquitetura e engenharia para entregar obras com organização, previsibilidade e alto padrão.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Atuamos com gestão técnica para reduzir imprevistos, retrabalho e atrasos em obras residenciais e comerciais.
            </p>
            <div className="mt-8 grid gap-4">
              {['Obra completa ou contratação por serviços avulsos', 'Residencial e comercial, simples e alto padrão', 'Steel Frame, obra cinza e soluções modulares'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-base text-white/90 md:text-lg">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#e1c890] text-[#e1c890]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#e1b879]/70 bg-[#0b1720]/20 shadow-2xl">
            <img src={image('quem-somos-casal.png')} alt="Casal Arq & Eng" className="aspect-[4/3] w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#6f878b] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e1c890]">O que fazemos</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl font-semibold text-[#f1d59d] md:text-7xl">Obra completa ou serviços avulsos</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">Entregamos soluções integradas em engenharia, arquitetura e execução. Você pode contratar a obra completa, por fase ou apenas o serviço que precisar.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {etapas.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-[#737b73]/78 p-7 text-center shadow-xl ring-1 ring-white/10 transition hover:-translate-y-1">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 text-white"><Icon className="h-7 w-7" /></div>
                  <h3 className="font-serif text-2xl text-[#f1d59d]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-white/86">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="processo" className="bg-[#0b1720] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e1c890]">Nosso processo</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold text-[#f1d59d] md:text-7xl">Etapas definidas, prazos controlados.</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">Do início ao fim, alinhamos projeto, equipes e cronograma para uma entrega segura e previsível.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img src={image('processo-collage.png')} alt="Processo da obra Casal Arq & Eng" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {processo.map((item, index) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <span className="font-serif text-2xl text-[#e1c890]">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-2 text-sm leading-5 text-white/78">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#6f878b] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e1c890]">Serviços avulsos</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold text-[#f1d59d] md:text-7xl">Você escolhe: por etapa ou obra completa.</h2>
            <p className="mt-6 text-lg leading-8 text-white/78">Contrate somente a etapa que precisa ou centralize tudo em uma gestão completa.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#0b1720]/35 p-6 ring-1 ring-white/10">
              <h3 className="font-serif text-2xl text-[#f1d59d]">Terreno, Projetos e Regularização</h3>
              <div className="mt-5 grid gap-3">
                {servicosTerreno.map((servico) => (
                  <div key={servico} className="flex gap-3 text-white/90">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#e1c890]" />
                    <span>{servico}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#0b1720]/35 p-6 ring-1 ring-white/10">
              <h3 className="font-serif text-2xl text-[#f1d59d]">Execução, Materiais e Gestão</h3>
              <div className="mt-5 grid gap-3">
                {servicosExecucao.map((servico) => (
                  <div key={servico} className="flex gap-3 text-white/90">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#e1c890]" />
                    <span>{servico}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steel-frame" className="bg-[#0b1720] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[#e1b879]/40 shadow-2xl">
              <img src={image('steel-frame-estrutura.png')} alt="Estrutura Steel Frame" className="h-full min-h-[460px] w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e1c890]">Steel Frame</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold text-[#f1d59d] md:text-7xl">Performance construtiva: rapidez, qualidade e previsibilidade.</h2>
              <p className="mt-6 text-lg leading-8 text-white/75">Ideal para quem busca uma obra mais limpa, rápida e previsível, com alto desempenho térmico e acústico.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {vantagens.map((vantagem) => (
                  <div key={vantagem} className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
                    <ShieldCheck className="mb-4 h-6 w-6 text-[#e1c890]" />
                    <p className="font-medium text-white/90">{vantagem}</p>
                  </div>
                ))}
              </div>
              <a href={whatsappUrl} target="_blank" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#e1c890] px-7 py-4 font-semibold text-[#0b1720] transition hover:bg-white">
                Quero construir em Steel Frame <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img src={image('steel-frame-equipe.png')} alt="Equipe executando Steel Frame" className="h-full max-h-[620px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f2] px-6 py-24 text-[#0b1720]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Trees className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="font-serif text-3xl font-semibold">Terreno & Infraestrutura</h3>
            <p className="mt-4 leading-7 text-slate-600">Preparação técnica do terreno, topografia, inventário, terraplenagem, fundações, contenções e obra cinza.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Home className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="font-serif text-3xl font-semibold">Interiores</h3>
            <p className="mt-4 leading-7 text-slate-600">Projetos residenciais e comerciais com layout, modelagem 3D, imagens realistas, materiais e acabamentos.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Wrench className="mb-6 h-9 w-9 text-[#789095]" />
            <h3 className="font-serif text-3xl font-semibold">Kits & Materiais</h3>
            <p className="mt-4 leading-7 text-slate-600">Kits estruturais completos, aço, placas, isolamento, drywall, forros e suporte técnico para implantação.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#0b1720] px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#d8c89b] p-8 text-[#0b1720] shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.82fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em]">Contato</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold md:text-7xl">Solicite um orçamento para sua obra ou projeto.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-800">Fale com a Casal Arq & Eng para orçamentos de material, kits prontos, projetos ou gestão completa de obra.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1720] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0b1720]">
                  Falar pelo WhatsApp <ArrowRight className="h-5 w-5" />
                </a>
                <a href="mailto:thaisa.cosaquevite@gmail.com" className="inline-flex items-center justify-center rounded-full border border-[#0b1720]/20 px-7 py-4 font-semibold text-[#0b1720] transition hover:bg-white">
                  Enviar e-mail
                </a>
              </div>
            </div>
            <div className="grid content-center gap-4 text-lg">
              <a href="tel:+5524981257978" className="flex items-center gap-3 rounded-2xl bg-white/25 p-4"><Phone className="h-5 w-5" /> (24) 98125-7978</a>
              <a href="mailto:thaisa.cosaquevite@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white/25 p-4"><Mail className="h-5 w-5" /> thaisa.cosaquevite@gmail.com</a>
              <a href="https://instagram.com/arq.thaisacosaquevite" target="_blank" className="flex items-center gap-3 rounded-2xl bg-white/25 p-4"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0b1720] text-xs font-bold text-[#d8c89b]">IG</span> @arq.thaisacosaquevite</a>
              <p className="flex items-center gap-3 rounded-2xl bg-white/25 p-4"><MapPin className="h-5 w-5" /> Miguel Pereira/RJ</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b1720] px-6 py-8 text-center text-sm text-white/55">
        © 2026 Casal Arq & Eng. Arquitetura, Engenharia, Gestão e Construção Industrializada.
      </footer>

      <a href={whatsappUrl} target="_blank" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-2xl transition hover:scale-105">
        WhatsApp
      </a>
    </main>
  );
}
