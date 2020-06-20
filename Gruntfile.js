module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> - Version: <%= pkg.version %> - <%= pkg.repository.url %> - <%= pkg.author.name %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};