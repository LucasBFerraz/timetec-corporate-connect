
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-white via-timetec-gray-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-timetec-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-timetec-red/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-timetec-red/10 text-timetec-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Soluções Empresariais em Telecomunicações
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-timetec-gray mb-6 leading-tight">
              Tecnologia e 
              <span className="text-timetec-red"> Eficiência</span>
              <br />
              em Comunicação Empresarial
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Equipamos sua empresa com as melhores soluções em telefonia corporativa. 
              Centrais PABX, telefones IP, headsets e acessórios de alta qualidade para 
              empresas que valorizam comunicação eficiente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => window.location.href = '#contato'}
                size="lg" 
                className="timetec-gradient text-lg px-8 py-4 hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-timetec-red text-timetec-red hover:bg-timetec-red hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                (21) 98866-5393
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-timetec-red mr-2" />
                <span className="font-medium">+15 anos de experiência</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">500+ empresas atendidas</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 timetec-gradient rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Phone, title: "PABX Digital", desc: "Centrais modernas" },
                    { icon: Zap, title: "Telefones IP", desc: "Tecnologia avançada" },
                    { icon: Shield, title: "Suporte", desc: "Atendimento técnico" },
                    { icon: ArrowRight, title: "Instalação", desc: "Equipe especializada" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 hover-lift rounded-lg bg-gray-50">
                      <item.icon className="h-8 w-8 text-timetec-red mx-auto mb-3" />
                      <h3 className="font-semibold text-timetec-gray mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
