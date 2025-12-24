import Link from "next/link";

const steps = [
  {
    title: "Preparação do Prompt",
    description:
      "Defina o conceito central do vídeo (tema, estilo visual, duração). Escreva um prompt cinematográfico com detalhes sobre cenário, personagens, movimentos de câmera e tom da iluminação."
  },
  {
    title: "Configuração no Design Arena",
    description:
      "Abra o módulo Arena, selecione o modelo `Sora 2` em Model Picker e ajuste o aspect ratio conforme o destino do vídeo (ex: 9:16 para Reels). Configure duração e seed caso precise de consistência entre gerações."
  },
  {
    title: "Entrada Multimodal",
    description:
      "Opcionalmente faça upload de imagens de referência, roteiros ou áudios base de narração. O Arena converte tudo em condicionamento multimodal que potencializa o Sora 2."
  },
  {
    title: "Refinamento Iterativo",
    description:
      "Use o painel de variações para refinar enquadramentos, ajuste a trilha via Audio Bed e aplique filtros de pós-produção (grade LUT, nitidez). Salve versões intermediárias no Library."
  },
  {
    title: "Exportação e QA",
    description:
      "Exporte em ProRes ou H.264, revise playback e sincronize com som final. Se necessário, rode uma nova renderização com `consistency lock` para evitar flicker entre takes."
  }
];

const proTips = [
  "Combine comandos de câmera (`pan right, dolly-in, parallax background`) para movimentos fluidos.",
  "Use descrições de luz inspiradas em cinematografia (ex: `volumetric rim light, dusk ambience`).",
  "Garanta coerência temporal ativando `motion stabilization` quando precisar de storytelling contínuo.",
  "Para vídeos longos, crie cenas curtas e una no editor interno do Arena com transições automatizadas."
];

const resources = [
  {
    label: "Template de Prompt Avançado",
    href: "https://promptfolder.com/templates/sora2-cinematic"
  },
  {
    label: "Guia de Cinemática no Arena",
    href: "https://designarena.ai/docs/cinematic-suite"
  },
  {
    label: "Casos de Uso Profesionais",
    href: "https://designarena.ai/blog/sora2-case-studies"
  }
];

export default function Home() {
  return (
    <main className="layout gradient-bg">
      <div className="card">
        <div className="badge">Fluxo recomendado com Sora 2</div>
        <h1 className="title">Vídeos com Sora 2 no Design Arena</h1>
        <p className="subtitle">
          Workflow completo para gerar narrativas visuais cinematográficas,
          aproveitando os recursos multimodais e o pipeline de pós do Arena.
        </p>

        <div className="grid">
          <section className="section">
            <h2>Passo a passo essencial</h2>
            <div className="step-grid">
              {steps.map((step) => (
                <div className="step" key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Dicas Pro</h2>
            <div className="step-grid">
              {proTips.map((tip) => (
                <div className="step" key={tip}>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Recursos e aprofundamento</h2>
            <div className="resources">
              {resources.map((resource) => (
                <Link
                  key={resource.label}
                  href={resource.href}
                  className="resource-link"
                  target="_blank"
                >
                  <span>{resource.label}</span>
                  <span aria-hidden>↗</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="footer">
          Ajuste prompts, seeds e pós conforme o projeto. Teste combinações e
          salve presets no Arena para acelerar produções futuras.
        </div>
      </div>
    </main>
  );
}
