
import React from 'react';
import { Shield, Zap, Users, DollarSign, Wrench, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Equipamentos de marcas reconhecidas mundialmente com garantia estendida e suporte técnico especializado.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Equipe técnica qualificada disponível 24/7 para instalação, configuração e manutenção dos equipamentos.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Integração Completa",
      description: "Soluções que se integram perfeitamente à infraestrutura existente da sua empresa, sem complicações.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: DollarSign,
      title: "Economia Garantida",
      description: "Redução significativa nos custos de comunicação com tecnologia VoIP e tarifação inteligente.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Escalabilidade",
      description: "Soluções que crescem junto com sua empresa, desde pequenas equipes até grandes corporações.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Implementação Rápida",
      description: "Instalação e configuração ágil com mínima interrupção das atividades da sua empresa.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-timetec-red/10 text-timetec-red px-4 py-2 rounded-full text-sm font-medium mb-6">
            Por que escolher a Timetec?
          </div>
          
          <h2 className="text-4xl font-bold text-timetec-gray mb-6">
            Benefícios que fazem a
            <span className="text-timetec-red"> Diferença</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que fornecedores de equipamentos, somos parceiros estratégicos 
            no desenvolvimento da comunicação empresarial da sua organização.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-100 rounded-xl p-8 hover-lift transition-all duration-300 group-hover:border-timetec-red/20 group-hover:shadow-lg">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-timetec-gray mb-4 group-hover:text-timetec-red transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 py-12 bg-timetec-gray-light rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-timetec-gray mb-4">Certificações e Qualidade</h3>
            <p className="text-gray-600">Trabalhamos apenas com marcas certificadas e reconhecidas no mercado</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['ISO 9001', 'ANATEL', 'Intelbras', 'Yealink', 'Grandstream'].map((cert, index) => (
              <div key={index} className="text-lg font-semibold text-timetec-gray bg-white px-6 py-3 rounded-lg shadow-sm">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
