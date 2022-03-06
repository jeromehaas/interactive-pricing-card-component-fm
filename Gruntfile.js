module.exports = function(grunt) {

  const config = {

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "src/less/central.less"
        }
      }
    },

    copy: {
      main: {
        files: [{
            expand: true,
            cwd: 'src/assets',
            src: '**',
            dest: 'assets/'
          },
          {
            expand: true,
            cwd: 'src/js',
            src: '**',
            dest: 'js/'
          },
        ]
      }
    },

    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['lessTask'],
      },
      html: {
        files: 'index.html',
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['copyTask']
      },
      options: {
        livereload: {
          host: 'localhost',
          port: 35729,
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 3005,
          base: '.',
          hostname: 'localhost',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    },

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('watchTask', function() {
    grunt.task.run(['connect', 'watch']);
  });

  grunt.registerTask('lessTask', function() {
    const done = this.async();
    grunt.task.run(['less']);
    done();
  });

  grunt.registerTask('copyTask', function() {
    const done = this.async()
    grunt.task.run(['copy:main']);
    done();
  });

  grunt.registerTask('default', function() {
    grunt.task.run(['copyTask']);
    grunt.task.run(['lessTask']);
    grunt.task.run(['watchTask']);
  });

};