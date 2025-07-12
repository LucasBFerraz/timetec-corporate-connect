
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Headphones, Router, Settings, ArrowRight, Check } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Phone,
      title: "Centrais PABX",
      subtitle: "Digitais e IP",
      description: "Centrais telefônicas modernas com recursos avançados para empresas de todos os portes.",
      features: ["Configuração de ramais", "Call center", "Gravação de chamadas", "Relatórios detalhados", "Interface web"],
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Router,
      title: "Telefones IP",
      subtitle: "Tecnologia VoIP",
      description: "Telefones corporativos com qualidade HD e recursos profissionais integrados.",
      features: ["Qualidade HD", "Viva-voz duplex", "Display colorido", "Suporte SIP"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Headphones,
      title: "Headsets Profissionais",
      subtitle: "Conforto e Qualidade",
      description: "Headsets ergonômicos para call centers e atendimento com cancelamento de ruído.",
      features: ["Cancelamento de ruído", "Design ergonômico", "Conexão USB/RJ", "Durabilidade"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Settings,
      title: "Suporte",
      subtitle: "Soluções Completas",
      description: "Suporte técnico especializado para sua empresa.",
      features: ["Instalação completa", "Treinamento", "Manutenção"],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-timetec-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-timetec-red/10 text-timetec-red px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossas Soluções
          </div>
          
          <h2 className="text-4xl font-bold text-timetec-gray mb-6">
            Equipamentos e Serviços
            <span className="text-timetec-red"> Profissionais</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos e serviços em telecomunicações 
            para atender todas as necessidades de comunicação da sua empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover-lift shadow-sm border border-gray-100 group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-timetec-gray mb-2">{solution.title}</h3>
              <p className="text-sm text-timetec-red font-medium mb-4">{solution.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* <Button variant="outline" className="w-full group-hover:bg-timetec-red group-hover:text-white group-hover:border-timetec-red transition-all duration-300">
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="timetec-gradient text-lg px-8 py-4">
            Ver Todos os Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
