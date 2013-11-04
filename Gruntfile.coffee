module.exports = (grunt) ->

  grunt.initConfig
    pkg: this.file.readJSON 'package.json'

    watch:
      coffee:
        files: [ 'src/*.coffee' ]
        tasks: [ 'coffee' ]
        options:
          nospawn: true

    coffee:
      compile:
        files: 'js/jquery.fakeLiveLoading.js': [ 'coffee/*.coffee' ]

    uglify:
      options:
        banner: "/** \n<%= pkg.description %> \n<%= pkg.copyright %> \n<%= pkg.license %>\n**/\n"
      dist:
        src: ['js/*']
        dest: "jquery.fakeLiveLoading.js"

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'default', [ 'coffee', 'uglify', 'watch' ]
