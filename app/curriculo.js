angular
  .module('app')
  .component('curriculo', {
  	templateUrl: 'app/curriculo.html'
  })
  .component('perfil', {
    templateUrl: 'app/perfil.html'
  })
  .component('resumo', {
    templateUrl: 'app/resumo.html',
    controller: function() {
      this.tecnologias = [
        'PHP, Ruby, Java, ASP',
        'JavaScript, jQuery, HTML, CSS, Bootstrap',
        'CakePHP, Zend Framework, Yii Framework, Smarty Template Engine, Symfony, Ruby on Rails, CodeIgniter, PHPUnit, VRaptor, Hibernate',
        'Orientação a objetos, design patterns, arquitetura MVC, testes unitários',
        'AJAX, RESTful, SOAP, JSON, XML',
        'MySQL, PostgreSQL, Firebird, Microsoft SQL Server, Oracle',
        'Composer, Git, Subversion (SVN), Apache HTTP, Tomcat, Microsoft IIS',
        'Scrum, JIRA, Kanban'
      ];
    }
  })
  .component('experiencias', {
    templateUrl: 'app/experiencias.html',
    controller: function(ExperienciasService) {
      var curriculoCtrl = this;
      curriculoCtrl.experiencias = ExperienciasService.listarExperiencias();
    }
  })
  .component('idiomas', {
  	templateUrl: 'app/idiomas.html'
  })
  .component('formacao', {
  	templateUrl: 'app/formacao.html'
  })
  .component('projetos', {
    templateUrl: 'app/projetos.html'
  });