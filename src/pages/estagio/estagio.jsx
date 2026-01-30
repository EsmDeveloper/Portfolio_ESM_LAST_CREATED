import React, { useState } from 'react';
import { Code, Folder, Award, Users, AlertCircle, CheckCircle, ExternalLink, ChevronDown, Github, Figma } from 'lucide-react';
import "./estagio.css";
// NO estagio.jsx - caminho RELATIVO CORRETO:
import avaliacao from "./assets/images/avaliacao.jpg";
import expancao from "./assets/images/expancao.jpg";
import carro from "./assets/images/carro.png";
import esm from "./assets/images/esm.png";

export default function PortfolioEstagio() {
  const [activeSection, setActiveSection] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Algoritmo de Auto Avaliação',
      description: 'Desenvolvimento de site para auto avaliação dos estagiários',
      link: 'https://auto-avaliacao.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: avaliacao
    },
    {
      id: 2,
      title: 'Sistema de Expanção TICNES IA',
      description: 'Plataforma web para gestão de viabilidade e expansão de redes TICNES',
      link: 'https://expansao-ticnes.vercel.app/',
      tags: ['React', 'CSS'],
      image: expancao
    },
    {
      id: 3,
      title: 'UI/UX Design - Aplicação de Carros',
      description: 'Design de interface analise de carros',
      link: 'https://hemi-legacy-showcase.lovable.app/',
      tags: ['UI/UX', 'Figma', 'Design'],
      image: carro
    },
    {
      id: 4,
      title: 'Link da Área de Anotações Notion',
      description: 'Acesso à área de anotações do Notion com todos os detalhes do estágio, e pesquisas realizadas.',
      link: 'https://www.notion.so/Est-gio-Ticnes-LDA-2ae044b8e51c807a84e8db9050ed57d5?source=copy_link',
      tags: ['Notes', 'books', 'focus'],
      image: esm
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'Figma', icon: Figma },
    { name: 'Git / GitHub', icon: Github },
     { name: 'ChatGPT', icon: Code },
    { name: 'HTML, CSS, JavaScript', icon: Code },
  { name: 'React', icon: Code },
    { name: 'Notion', icon: Folder },
    { name: 'Linkedin', icon: Users },
  ];

 const aprendizagens = [
  'Sem desculpas: assumir responsabilidade total pelo próprio crescimento',
  'Entendimento de que a idade muitas vezes é usada como desculpa, mas não define capacidade',
  'Importância da disciplina diária e consistência no aprendizado',
  'Desenvolvimento de mentalidade profissional desde cedo',
  'Valor da comunicação clara dentro de uma equipa',
  'Aprender a ouvir críticas e transformar feedback em melhoria',
  'Adaptação rápida a novos desafios e contextos de trabalho'
];

const dificuldades = [
  'Dificuldade inicial no trabalho em equipa',
  'Ajustes ao novo ambiente profissional',
  'Adaptação a diferentes personalidades dentro da equipa',
  'Insegurança inicial ao expor ideias',
  'Gestão emocional diante de pressão e responsabilidades',
  'Manter foco e produtividade em ambientes novos'
];


  // Dados para as 12 seções de estágio
  const estagioData = [
    {
  id: 1,
  data: "08/11/2025",
  hora: "09:00 - 13:00",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Apresentação do centro de estágio, equipa, objetivos, dinâmica de trabalho e introdução à cultura organizacional da empresa."
},
{
  id: 2,
  data: "15/11/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Aprendizagem de fundamentos profissionais.Nota: CEO da TICNES IA fez parte do primeiro grupo que utilizou a Internet, importância do perfil profissional completo, documentação de processos e crescimento empresarial. Apresentação do contrato com a Clínica Sagrada Esperança. Atribuição de tarefas: algoritmo de expansão da TICNES, definição de missão/visão/valores, 3 referências de cursos de Prompt Engineering, fluxograma do sistema de expansão e passo a passo para criação de sites corporativos com Cloudflare."
},

   {
  id: 3,
  data: "22/11/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Apresentação do site da Cloudflare (concluída). Conclusão do curso gratuito do GitHub com certificado e do curso de planeamento de engenharia dos melhores sites (com certificado). Ênfase na importância da presença online profissional e explicação de que a base da empresa (Ticnes) é a cibersegurança. Enunciado da apresentação final do estágio 2025. Atribuição de tarefas: pesquisa sobre violação de privacidade do Tribunal Supremo e Ministério da Justiça (2023) — não encontrada; padronização das tarefas de programação com implementação, uso obrigatório de fluxogramas e pseudocódigo em JavaScript e Python. Apresentação da visão do Ticnes Lab e discussão sobre IAs de correção automática de provas."
},

    {
  id: 4,
  data: "29/11/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Definição do algoritmo de responsabilização em autoavaliação (acessibilidade, envolvimento nas redes sociais da empresa e avaliação final de 0 a 10: mau, suficiente, bom e muito bom). Questionamento sobre contacto com o diretor-geral(Quantas vezes você teve a oportunidade para falar com o diretor geral?). Orientações sobre front-end da empresa. Pesquisa de mecanismos para identificar imagens geradas por IA, criação de imagens com IA, estudo de computação forense e ferramentas de segurança da informação. Acesso ao site do Ministério da Imigração e preenchimento de formulário online (Feito!). Implementação inicial do algoritmo de autoavaliação em Python."
},

    {
  id: 5,
  data: "06/12/2025",
  hora: "09:30 - 13:30",
  presenca: "Ausente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Ausência justificada por motivos familiares. Não compareci às atividades do estágio neste dia."
},

    {
  id: 6,
  data: "13/12/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Visão do uso de IA para dinamizar processos e criar/recuperar versões antigas do site Ticnes Store. Pontos sobre inovação e implementação do algoritmo de autoavaliação. Ordem de manter diário de atividades de trabalho (já possuía diário digital - Notion). Frases do engenheiro: 'escrevam muito, escrevam da vossa maneira' e 'pôr em pé a plataforma Ticnes como algo crucial'. Ênfase na utilização do e-mail. Desafio resolvido: calcular partilhas necessárias para 1.500 visualizações com 10 pessoas usando árvore binária → 11 níveis de partilha no total."
},

    {
  id: 7,
  data: "20/12/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Visão sobre a importância de contribuir ativamente para a empresa, manter interação e agregar valor. Discussão sobre o site da Ticnes Store e organização da estrutura do projeto TICNES Store entre os estagiários, sem implementação no GitHub."
},

    {
  id: 8,
  data: "27/12/2025",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Tarefa de criar uma lista de 10 pessoas ensinadas a ler códigos QR (meus quatro irmãos, três tias e três colegas na escola) e elaborar relatório sobre elas (link disponível no Notion). Orientação para incluir o app feito com IA na versão da TICNES e criar a autoavaliação em formato de tabelas — optei por método diferente, relatando o processo e erros cometidos no projeto de autoavaliação."
},

   {
  id: 9,
  data: "03/01/2026",
  hora: "09:30 - 13:30",
  presenca: "Ausente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Ausência justificada por motivos familiares. Não compareci às atividades do estágio neste dia."
},
{
  id: 10,
  data: "10/01/2026",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Apresentação do desenvolvimento do projeto pessoal: organização de todas as tarefas do estágio e inclusão de uma aba com projetos no site da TICNES. Frases e orientações do engenheiro: 'Ninguém sabe tudo em todas as horas do dia'; 'Chegar cedo ou à hora certa é chegar antes da hora'; 'Seguir em frente é continuar a produzir'; conhecer o próprio corpo; fazer mais, querer mais para maior impacto, menos distrações, menos televisão, menos açúcar e menos sal; a vida não acaba nas melhores notas; o profissional deve inspirar confiança.Pergunta reflexiva: 'O que é o sucesso?'. Visão sobre TICs em todas as escolas e recomendação de enviar prompts detalhados para melhores resultados com IA."
},

    {
  id: 11,
  data: "17/01/2026",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Palestra intuitiva de autoconhecimento e conhecimento da empresa com o CEO."
},

    {
  id: 12,
  data: "24/01/2026",
  hora: "09:30 - 13:30",
  presenca: "Presente",
  local: "Sede da TICNES IA - Luanda",
  descricao: "Preparação e orientação para a sessão seguinte. Ênfase na importância de ProtonMail, validação forte do input do usuário nos projetos, uso do inglês como essencial na programação, e recomendação de testar prompts em inglês e português. Reflexão sobre começar pequeno sem limitar o alcance das ideias e estimular pensamento crítico e inovação."
},

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Apresentação dos Trabalhos
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Documentação completa das atividades e projetos desenvolvidos durante o estágio
            </p>
          </div>
        </div>
      </div>

      {/* Introdução */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-2 text-indigo-300">ESTÁGIO PROFISSIONAL</h2>
            <p className="text-slate-400 mb-6">Registro Detalhado das Atividades Realizadas</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-sm mb-2">Empresa/Instituição</div>
                <div className="text-lg font-semibold text-slate-100">TICNES IA</div>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-sm mb-2">Período</div>
                <div className="text-lg font-semibold text-slate-100">Nov 2025 - Jan 2026</div>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-sm mb-2">Área de Atuação</div>
                <div className="text-lg font-semibold text-indigo-400">Tecnologia da Informação </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Seções de Estágio */}
      {estagioData.map((estagio) => (
        <section key={estagio.id} className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl">
              {/* Cabeçalho da Seção */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-200">
                    Estágio <span className="text-indigo-300">#{estagio.id.toString().padStart(2, '0')}</span>
                  </h2>
                  <p className="text-slate-400 text-sm">Dia de trabalho detalhado</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    estagio.presenca === 'Presente' 
                      ? 'bg-green-900/30 text-green-400 border border-green-800' 
                      : 'bg-red-900/30 text-red-400 border border-red-800'
                  }`}>
                    {estagio.presenca}
                  </span>
                </div>
              </div>

              {/* Grid com informações do estágio */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-xs mb-1">Data</div>
                  <div className="text-base font-semibold text-slate-100">{estagio.data}</div>
                </div>
                
                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-xs mb-1">Horário</div>
                  <div className="text-base font-semibold text-slate-100">{estagio.hora}</div>
                </div>
                
                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-xs mb-1">Local</div>
                  <div className="text-base font-semibold text-slate-100">{estagio.local}</div>
                </div>
                
                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-xs mb-1">Duração</div>
                  <div className="text-base font-semibold text-indigo-400">5 horas</div>
                </div>
              </div>

              {/* Descrição detalhada */}
              <div className="mt-4">
                <div className="text-slate-400 text-sm mb-2">Descrição das Atividades</div>
                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <p className="text-slate-200">{estagio.descricao}</p>
                </div>
              </div>

              {/* Rodapé da seção */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="text-slate-500 text-sm">
                  Registro #{estagio.id.toString().padStart(3, '0')}
                </div>
                <div className="text-slate-500 text-sm">
                  Supervisor: Eng. Jorge Clemente
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Seção de Resumo Final */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/70 to-indigo-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-200">RESUMO DO ESTÁGIO</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-1">12</div>
                <div className="text-slate-400 text-sm">Dias de Estágio</div>
              </div>
              
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">10</div>
                <div className="text-slate-400 text-sm">Presenças</div>
              </div>
              
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">~60</div>
                <div className="text-slate-400 text-sm">Horas Cumpridas</div>
              </div>
              
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">4</div>
                <div className="text-slate-400 text-sm">Projetos</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Conclusão</h3>
              <p className="text-slate-300">
                O estágio foi concluído com sucesso, atingindo todos os objetivos propostos. 
                Foram desenvolvidas competências técnicas em redes, desenvolvimento web, suporte técnico 
                e segurança da informação, além de habilidades profissionais como trabalho em equipe, 
                comunicação e resolução de problemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
            Ferramentas Utilizadas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
                >
                  <Icon className="w-10 h-10 mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  <div className="font-medium text-slate-200">{tool.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trabalhos Realizados */}
      <section className="container mx-auto px-4 py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-pink-300">
      Trabalhos e dinâmicas Realizadas
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { 
          icon: Folder, 
          text: 'Valores da empresa TICNES IA, Encontrados na internet', 
          link: 'https://www.notion.so/Miss-o-Vis-o-e-Valores-1-2b7044b8e51c80209822c0abf0d4fcb5?source=copy_link',
          external: true
        },
        { 
          icon: Folder, 
          text: 'Referências de Cursos Gratuitos em Prompt Engineering', 
          link: 'https://www.notion.so/Refer-ncias-de-Cursos-Gratuitos-em-Prompt-Engineering-2b7044b8e51c80758e45f5aba3d2e306?source=copy_link',
          external: true
        },
        { 
          icon: Folder, 
          text: 'Pesquisas de entidades', 
          link: 'https://github.com/seuuser/api-pesquisa',
          external: true
        },
        { 
          icon: Folder, 
          text: 'Fluxograma do Sistema de Expansão TICNES IA', 
          link: 'https://www.notion.so/Fluxograma-1-2b7044b8e51c801c9638fefb5a235be5?source=copy_link',
          external: true
        },
        { 
          icon: Folder, 
          text: 'Como criar um website corporativo na plataforma Cloudflare', 
          link: 'https://www.notion.so/Como-criar-um-website-corporativo-na-plataforma-Cloudflare-2b9044b8e51c80b78d43cfd3554fc639?source=copy_link',
          external: true
        },
        { 
          icon: Folder, 
          text: 'TICNES Tasks e Anotações do Estágio', 
          link: 'https://www.notion.so/Ticnes-Tasks-2be044b8e51c805a9548c55e12c5e82e?source=copy_link',
          external: true
        },
         {
          icon: Folder, 
          text: 'Algoritmo de Responsabilização e Autoavaliação com validação de entrada', 
          link: 'https://www.notion.so/New-task-2c1044b8e51c80b79b6ee945f0b7d8f2?source=copy_link',
          external: true
        },
         { 
          icon: Folder, 
          text: 'Internautas que se disponibilizaram a aprender acerca do QR Code', 
          link: 'https://www.notion.so/Internautas-que-se-disponibilizaram-a-aprender-acerca-do-QR_Code-2eb044b8e51c801c95c6dda055a8cb19?source=copy_link',
          external: true
        },
        {
          icon: Github, 
          text: 'Meu Repositório no GitHub com os Projetos Desenvolvidos Durante o Estágio', 
          link: 'https://github.com/EsmDeveloper',
          external: true  
        }

      ].map((item, idx) => {
        const Icon = item.icon;
        
        // Se tiver link, renderiza como <a>, senão como <div>
        if (item.link) {
          return (
            <a
              key={idx}
              href={item.link}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-pink-500/30 hover:bg-slate-800/50 transition-all group cursor-pointer no-underline"
            >
              <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                <Icon className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex-1">
                <p className="text-slate-200 group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </div>
            </a>
          );
        }
        
        // Versão sem link (mantém o original)
        return (
          <div 
            key={idx}
            className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-pink-500/30 transition-all"
          >
            <div className="p-3 bg-pink-500/10 rounded-lg">
              <Icon className="w-6 h-6 text-pink-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-200">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Projectos Desenvolvidos */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-indigo-300">
            Projectos Desenvolvidos
          </h2>
          <p className="text-center text-slate-400 mb-12">Clique para visualizar</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="aspect-video overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-indigo-300 transition-colors">
                    🔗 {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition-colors"
                  >
                    Ver Projecto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aprendizagens e Dificuldades */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Aprendizagens */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-green-300">Aprendizagens</h2>
            </div>
            <ul className="space-y-3">
              {aprendizagens.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dificuldades */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-700/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-bold text-orange-300">Dificuldades</h2>
            </div>
            <ul className="space-y-3">
              {dificuldades.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusão Final */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">Conclusão Geral</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Durante este estágio, adquiri experiência prática valiosa no desenvolvimento web, 
                trabalhando com tecnologias modernas e metodologias profissionais.
              </p>
              <p>
                A importância deste período formativo foi fundamental para consolidar conhecimentos 
                teóricos e desenvolver competências técnicas essenciais para a carreira profissional.
              </p>
              <p className="text-indigo-400 font-semibold mt-6">
                Esta experiência representa um marco importante no meu percurso como desenvolvedor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}