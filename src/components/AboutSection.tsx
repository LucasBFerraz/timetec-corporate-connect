
import React from 'react';
import { Award, Users, Wrench, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: "+15", label: "Anos de Experiência", color: "text-timetec-red" },
    { icon: Users, number: "500+", label: "Empresas Atendidas", color: "text-blue-600" },
    { icon: Wrench, number: "1000+", label: "Projetos Realizados", color: "text-green-600" },
    { icon: TrendingUp, number: "98%", label: "Satisfação dos Clientes", color: "text-purple-600" }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-timetec-red/10 text-timetec-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Sobre a Timetec Telecom
            </div>
            
            <h2 className="text-4xl font-bold text-timetec-gray mb-6">
              Especialistas em 
              <span className="text-timetec-red"> Soluções Corporativas</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                A <strong className="text-timetec-gray">Timetec Telecom</strong> é uma empresa especializada 
                em soluções de telecomunicações para o mercado corporativo, com mais de 15 anos de experiência 
                no fornecimento de equipamentos e serviços de alta qualidade.
              </p>
              
              <p>
                Nossa expertise abrange desde pequenas empresas até grandes corporações, oferecendo 
                <strong className="text-timetec-gray"> centrais PABX digitais, telefones IP, headsets profissionais 
                e acessórios de telefonia</strong> das principais marcas do mercado.
              </p>
              
              <p>
                Nosso diferencial está na <strong className="text-timetec-gray">consultoria técnica personalizada</strong>, 
                suporte especializado e soluções que realmente atendem às necessidades de comunicação de cada cliente.
              </p>
            </div>
            
            <div className="bg-timetec-gray-light p-6 rounded-xl border-l-4 border-timetec-red">
              <h3 className="font-semibold text-timetec-gray mb-2">Nossa Missão</h3>
              <p className="text-gray-600">
                Fornecer soluções em telecomunicações que aumentem a produtividade e 
                eficiência da comunicação empresarial, com tecnologia de ponta e suporte excepcional.
              </p>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover-lift shadow-sm">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-timetec-gray mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
