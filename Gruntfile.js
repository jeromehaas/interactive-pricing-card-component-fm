module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
        src: 'src/js/hello-world.js',
				dest: 'build/js/<%= pkg.name %>.min.js'
			}
		},
		less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "src/less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['src/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
	})

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('test', ['uglify']);

grunt.registerTask('print', function() {
	const done = this.async();
	setTimeout(() => {
		const success = 'success';
		done(success);
	}, 1000);
})


	grunt.registerTask('default', () => {
		grunt.log.writeln('--------');
		grunt.log.writeln('LESS TASK');
		grunt.task.run(['less']);
		grunt.task.run(['print']);
		grunt.log.writeln('--------');
		grunt.log.writeln('WATCH TASK');
		grunt.task.run(['watch']);
		grunt.task.run(['test']);
	});

};