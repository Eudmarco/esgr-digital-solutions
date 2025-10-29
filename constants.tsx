import React from 'react';
import type { Service, WhyUsPoint, LegalDoc, LegalDocKey } from './types';

export const SERVICES_DATA: Service[] = [
  {
    icon: 'developer_mode',
    title: 'Desenvolvimento de Sistemas',
    description: 'Criamos sistemas e sites personalizados para atender às necessidades específicas do seu negócio, garantindo performance e escalabilidade.',
    detailedDescription: 'Nossa abordagem de desenvolvimento de sistemas é focada em criar soluções robustas, seguras e escaláveis. Analisamos profundamente seus processos de negócio para construir uma ferramenta que não apenas resolve seus desafios atuais, mas também está preparada para o crescimento futuro.',
    benefits: ['Otimização de processos internos', 'Plataforma 100% personalizada', 'Integração com outros sistemas', 'Segurança e escalabilidade garantidas']
  },
  {
    icon: 'smart_toy',
    title: 'Agente de IA',
    description: 'Automatize processos e melhore a experiência do cliente com nossos agentes de Inteligência Artificial personalizados.',
    detailedDescription: 'Implementamos agentes de IA para automatizar tarefas repetitivas, analisar grandes volumes de dados e oferecer atendimento ao cliente 24/7. Nossas soluções de IA são projetadas para aprender e se adaptar, gerando eficiência e insights valiosos para o seu negócio.',
    benefits: ['Automação de atendimento ao cliente', 'Análise de dados avançada', 'Redução de custos operacionais', 'Tomada de decisão mais inteligente']
  },
  {
    icon: 'trending_up',
    title: 'SEO Orgânico com IA',
    description: 'Aumente sua visibilidade nos motores de busca com estratégias de SEO potencializadas por Inteligência Artificial.',
    detailedDescription: 'Utilizamos Inteligência Artificial para realizar uma análise de mercado contínua, identificar as melhores palavras-chave e otimizar seu site 24/7. Nossa metodologia garante que seu negócio se destaque no Google, atraindo tráfego qualificado de forma consistente.',
    benefits: ['Monitoramento e otimização 24/7', 'Melhor posicionamento no Google', 'Atração de tráfego qualificado', 'Geração de leads sem custo por clique']
  },
  {
    icon: 'ads_click',
    title: 'Tráfego Pago',
    description: 'Gerenciamos suas campanhas de tráfego pago (Google & Meta Ads) para maximizar o ROI e alcançar seu público-alvo.',
    detailedDescription: 'Criamos e gerenciamos campanhas de alta performance no Google Ads e Meta Ads. Nossa equipe especializada utiliza análise de dados para otimizar seus anúncios, segmentar o público certo e garantir que cada real investido traga o máximo de retorno.',
    benefits: ['Maximizaçāo do Retorno sobre Investimento (ROI)', 'Segmentação precisa do público-alvo', 'Geração de leads e vendas imediatas', 'Relatórios de performance detalhados']
  },
  {
    icon: 'groups',
    title: 'Social Media',
    description: 'Construímos e gerenciamos sua presença nas redes sociais, criando conteúdo relevante e engajando sua audiência.',
    detailedDescription: 'Desenvolvemos uma estratégia de conteúdo completa para suas redes sociais. Desde o planejamento e criação de posts até a interação com o público e análise de métricas, nosso objetivo é construir uma comunidade engajada em torno da sua marca.',
    benefits: ['Aumento do engajamento com a marca', 'Construção de comunidade online', 'Criação de conteúdo estratégico', 'Fortalecimento da presença digital']
  },
  {
    icon: 'videocam',
    title: 'Vídeos Institucionais',
    description: 'Produzimos vídeos de alta qualidade para apresentar sua empresa, produtos e serviços de forma profissional e impactante.',
    detailedDescription: 'Cativamos sua audiência com produções audiovisuais de alta qualidade. Criamos vídeos que comunicam a essência da sua marca, contam sua história e destacam seus diferenciais, gerando conexão e confiança com seu público.',
    benefits: ['Comunicação de alto impacto', 'Aumento da credibilidade da marca', 'Material versátil para marketing', 'Conexão emocional com o público']
  }
];

export const WHATSAPP_LINK_FLOAT = "https://wa.me/5519988901665?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

export const WHY_US_DATA: WhyUsPoint[] = [
    {
        icon: 'code_blocks',
        title: 'Soluções Sob Medida',
        description: 'Não usamos templates. Cada projeto é único, desenvolvido do zero para atender perfeitamente às suas necessidades e objetivos.',
        detailedDescription: 'Nossa filosofia é que a tecnologia deve se adaptar ao seu negócio, e não o contrário. Iniciamos cada projeto com um workshop de imersão para entender profundamente seus desafios e metas. A partir daí, projetamos e desenvolvemos uma solução totalmente personalizada, garantindo que cada funcionalidade agregue valor real à sua operação.',
        keyPoints: ['Workshop de Imersão e Diagnóstico', 'Arquitetura de Software Escalável', 'Desenvolvimento Ágil e Interativo', 'Foco na Experiência do Usuário (UX)']
    },
    {
        icon: 'auto_awesome',
        title: 'Inovação com IA',
        description: 'Integramos Inteligência Artificial em nossas soluções para otimizar processos, gerar insights e entregar resultados superiores.',
        detailedDescription: 'Vamos além do convencional, aplicando Inteligência Artificial para transformar dados em vantagem competitiva. Seja automatizando o atendimento, otimizando campanhas de marketing com IA ou analisando padrões de mercado, nossas soluções inteligentes capacitam sua empresa a tomar decisões mais rápidas e estratégicas.',
        keyPoints: ['Automação Inteligente de Processos', 'Análise Preditiva e Insights de Dados', 'Personalização da Experiência do Cliente', 'Vantagem Competitiva Sustentável']
    },
    {
        icon: 'query_stats',
        title: 'Foco em Resultados',
        description: 'Nossa metodologia é orientada a dados. Monitoramos e otimizamos constantemente para garantir o melhor retorno sobre seu investimento.',
        detailedDescription: 'Para nós, o sucesso de um projeto é medido pelo impacto que ele gera no seu negócio. Definimos Key Performance Indicators (KPIs) claros desde o início e utilizamos ferramentas de análise para monitorar o progresso. Oferecemos relatórios transparentes e trabalhamos em um ciclo de otimização contínua para maximizar seus resultados.',
        keyPoints: ['Definição de KPIs Estratégicos', 'Monitoramento de Performance em Tempo Real', 'Relatórios Transparentes e Personalizados', 'Otimização Contínua para Maximizar o ROI']
    }
];

export const LEGAL_DOCS: Record<LegalDocKey, LegalDoc> = {
    terms: {
        title: 'Termos de Uso',
        content: (
            <div className="space-y-4">
                <p>Bem-vindo à ESGR. Ao acessar nosso site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
                <p>O uso deste site é para fins informativos. É proibido o uso de qualquer informação ou material deste site para fins comerciais sem consentimento prévio por escrito.</p>
            </div>
        )
    },
    privacy: {
        title: 'Política de Privacidade',
        content: (
            <div className="space-y-4">
                <p>Sua privacidade é importante para nós. É política da ESGR respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site ESGR, e outros sites que possuímos e operamos.</p>
                <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
            </div>
        )
    },
    cookies: {
        title: 'Política de Cookies',
        content: (
            <div className="space-y-4">
                <p>Utilizamos cookies para melhorar a experiência do usuário. Um cookie é um pequeno arquivo de texto que um site armazena no seu computador ou dispositivo móvel quando você visita o site.</p>
                <p>Usamos cookies de sessão (que expiram depois de fechar o navegador) e cookies persistentes (que permanecem no seu dispositivo por um período de tempo definido ou até que você os exclua).</p>
            </div>
        )
    },
    lgpd: {
        title: 'Termo LGPD',
        content: (
            <div className="space-y-4">
                <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), informamos que os dados pessoais coletados através dos formulários em nosso site são utilizados exclusivamente para fins de contato e envio de informações sobre nossos serviços.</p>
                <p>Garantimos a segurança e confidencialidade dos seus dados e não os compartilhamos com terceiros sem o seu consentimento explícito.</p>
            </div>
        )
    }
};