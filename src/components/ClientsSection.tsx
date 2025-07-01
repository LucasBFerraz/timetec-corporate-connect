
import React from 'react';
import { Building2, Factory, Hospital, Briefcase, Store, Users } from 'lucide-react';

const ClientsSection = () => {
  const segments = [
    {
      icon: Building2,
      title: "Escritórios e Consultorias",
      description: "Soluções para empresas de serviços que precisam de comunicação eficiente",
      count: "150+"
    },
    {
      icon: Factory,
      title: "Indústrias",
      description: "Sistemas robustos para ambientes industriais e de produção",
      count: "80+"
    },
    {
      icon: Hospital,
      title: "Hospitais e Clínicas",
      description: "Comunicação crítica para unidades de saúde",
      count: "45+"
    },
    {
      icon: Briefcase,
      title: "Advocacias",
      description: "Confidencialidade e qualidade para escritórios de advocacia",
      count: "120+"
    },
    {
      icon: Store,
      title: "Varejo e Comércio",
      description: "Soluções para redes de lojas e centros comerciais",
      count: "90+"
    },
    {
      icon: Users,
      title: "Call Centers",
      description: "Equipamentos profissionais para centrais de atendimento",
      count: "25+"
    }
  ];

  return (
    <section className="py-20 bg-timetec-gray text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossos Clientes
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Atendemos Empresas de
            <span className="text-timetec-red"> Todos os Segmentos</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa experiência abrange diversos setores da economia, sempre com soluções 
            personalizadas para cada tipo de negócio e suas necessidades específicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {segments.map((segment, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-timetec-red/20 group-hover:bg-timetec-red/30 transition-colors duration-300">
                    <segment.icon className="h-8 w-8 text-timetec-red" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{segment.count}</div>
                    <div className="text-sm text-gray-400">clientes</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-timetec-red transition-colors duration-300">
                  {segment.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-timetec-red mb-6">"</div>
            <blockquote className="text-2xl font-medium text-white mb-8 leading-relaxed">
              A Timetec Telecom transformou nossa comunicação interna. O sistema PABX instalado 
              atendeu perfeitamente nossas necessidades e o suporte técnico é excepcional.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-timetec-red rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Carlos Mendes</div>
                <div className="text-gray-400">Diretor de TI - TechCorp Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
