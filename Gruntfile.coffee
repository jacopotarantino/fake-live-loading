module.exports = (grunt) ->

  grunt.initConfig
    pkg: this.file.readJSON 'package.json'

    watch:
      coffee:
        files: [ 'coffee/*.coffee' ]
        tasks: [ 'coffee', 'uglify' ]
        options:
          nospawn: true

    coffee:
      compile:
        files: 'jquery.fakeLiveLoading.js': [ 'coffee/*.coffee' ]

    uglify:
      options:
        banner: "/** \n<%= pkg.description %> \n<%= pkg.copyright %> \n<%= pkg.license %>\n**/\n"
      dist:
        src: ['jquery.fakeLiveLoading.js']
        dest: "jquery.fakeLiveLoading.min.js"

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'develop', [ 'coffee', 'uglify', 'watch' ]
  grunt.registerTask 'default', [ 'coffee', 'uglify' ]
