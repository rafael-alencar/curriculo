angular
  .module('app')
  .service('ExperienciasService', function() {
  	this.experiencias = [
  	  {
  	  	empresa: 'VTI Soluções em Tecnologia da Informação',
  	  	cargo: 'Analista Desenvolvedor',
  	  	periodo: 'Jun.2012 - Ago.2016',
  	  	descricao: 
  	  	  '<p>Desenvolvimento e sustentação de projetos web com PHP5 utilizando o framework CakePHP e Zend Framework (ZF1 e ZF2) e múltiplos bancos de dados, entre eles PostgreSQL, MySQL e Oracle. Implementação em ambientes Windows e Linux com servidores web Apache HTTP usando a tecnologia Subversion para controle de versão e implantação (deploy) por integração contínua com Jenkins. Utilização das tecnologias JavaScript, HTML5, CSS3, Bootstrap e jQuery para implementação frontend, PHPUnit para construção e execução de testes unitários e Composer para gerenciamento de dependências.</p>'+
      	  '<p>Implementação da automatização de processos com a plataforma BPMS Intalio, utilizando JavaScript, Java e XML. Desenvolvimento de webservices SOAP e RESTful para integração de diferentes APIs dentro dos processos.</p>'+
      	  '<p>Evolução de sistema web responsável por gerenciar dados de ambientes e servidores de outros sistemas desenvolvido em Ruby para o cliente DETRAN-CE. Implementação de módulos adicionais utilizando Ruby on Rails, PostgreSQL, JavaScript, Bootstrap e controle de versão usando Git.</p>'+
      	  '<p>Desenvolvimento de relatórios para a plataforma ERP SAP® Business One utilizando Crystal Reports e consultas SQL.</p>'+
      	  '<p>Levantamento e análise de requisitos, prototipação de telas utilizando Enterprise Architect, modelagem de dados com MySQL Workbench, construção de documentos de arquitetura de projetos de software, elaboração e revisão de casos de teste e outros artefatos relacionados ao desenvolvimento e implementação de projetos, seguindo todos os padrões e normas do &quot;Capability Maturity Model Integration&quot; (CMMI) nível 3.</p>'
  	  },
  	  {
  	  	empresa: 'Sistema Ari de Sá - SAS',
  	  	cargo: 'Desenvolvedor',
  	  	periodo: 'Abr.2012 - Jun.2012',
  	  	descricao: 
  	  	  '<p>Manutenção e evolução dos sistemas internos e do portal web desenvolvidos em ASP com VBScript e banco de dados Microsoft SQL Server 2005, configurados em ambiente Windows Server e servidor web Microsoft IIS.</p>'+
      	  '<p>Desenvolvimento do sistema de banco de currículos da empresa utilizando as tecnologias PHP5, Zend Framework 1, Microsoft SQL Server 2005, JavaScript e jQuery. Implementação do projeto em ambiente Linux com servidor Apache HTTP usando controle de versão com Git.</p>'+
      	  '<p>Realização de atendimento, treinamento e suporte aos usuários dos sistemas.</p>'
  	  },
  	  {
  	  	empresa: 'Itarget Tecnologia',
  	  	cargo: 'Desenvolvedor',
  	  	periodo: 'Jul.2010 - Fev.2011',
  	  	descricao:
  	  	  '<p>Sustentação e evolução de ferramenta web de gerenciamento de instituições da área médica com foco na gestão de associados e controle financeiro desenvolvido em PHP5 utilizando Zend Framework 1 e banco de dados Firebird e PostgreSQL. Utilização da tecnologia jQuery (jQuery UI) para implementação frontend e Git para controle de versão do projeto.</p>'+
          '<p>Desenvolvimento de um módulo de almoxarifado para o sistema Central de Marcação e Regulação CMR, produto da empresa que tinha como principal cliente a Secretaria Municipal de Saúde de Fortaleza. Tecnologias utilizadas: PHP5, Zend Framework 1, PostgreSQL, jQuery e Git.</p>'
  	  },
  	  {
  	  	empresa: 'Totaldesk Tecnologia',
  	  	cargo: 'Desenvolvedor',
  	  	periodo: 'Out.2008 - Ago.2009',
  	  	descricao:
  	  	  '<p>Construção e manutenção de sistemas de gerenciamento de conteúdo (CMS) para websites utilizando PHP.</p>'+
          '<p>Análise e desenvolvimento de sistemas web com Yii Framework, CodeIgniter, Smarty Template Engine e MySQL. Utilização de tecnologias JavaScript, jQuery e Flash.</p>'+
          '<p>Levantamento de requisitos, implantação dos sistemas, treinamento e suporte aos clientes e usuários.</p>'
  	  }
  	];

  	this.listarExperiencias = function() {
  		return this.experiencias;
  	};
  });