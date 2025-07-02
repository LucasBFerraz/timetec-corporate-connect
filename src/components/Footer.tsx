
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contato' }
  ];

  const products = [
    { name: 'Centrais PABX', href: '#' },
    { name: 'Telefones IP', href: '#' },
    { name: 'Headsets', href: '#' },
    { name: 'Acessórios', href: '#' },
    { name: 'Suporte Técnico', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-timetec-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Timetec <span className="text-timetec-red">Telecom</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em soluções de telecomunicações corporativas há mais de 15 anos. 
              Tecnologia, qualidade e suporte que sua empresa precisa.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-timetec-red transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-timetec-red transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Produtos e Serviços</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href}
                    className="text-gray-300 hover:text-timetec-red transition-colors duration-300"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-timetec-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(21) 98866-5393</p>
                  <p className="text-sm text-gray-400">Comercial</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-timetec-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(21) 98866-5393</p>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-timetec-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contato@timetectelecom.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-timetec-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">São Paulo - SP</p>
                  <p className="text-sm text-gray-400">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-timetec-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg. a Sex.: 8h às 18h</p>
                  <p className="text-sm text-gray-400">Horário de atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2024 Timetec Telecom. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-timetec-red transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-timetec-red transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
