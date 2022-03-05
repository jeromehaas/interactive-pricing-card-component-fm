// const browserSync = require("browser-sync");

// module.exports = function(grunt) {

// 	const config = {
		
// 		uglify: {
// 			build: {
//         src: 'src/js/hello-world.js',
// 				dest: 'build/js/<%= pkg.name %>.min.js'
// 			}
// 		},
	
// 		less: {
// 			development: {
//         options: {
//           compress: true,
//           yuicompress: true,
//           optimization: 2
//         },
//         files: {
//           "css/main.css": "src/less/central.less" 
//         }
//   	  }
// 		},
		
// 		watch: {
// 			css: {
// 				files: 'src/less/**/*.less',
// 				tasks: ['lessTask'],
// 				options: {
// 					livereload: {
// 						host: 'localhost',
// 						port: 3005,
// 					}
// 				},
// 			},
// 		},

// 	};

// 	grunt.initConfig(config);
// 	grunt.loadNpmTasks('grunt-contrib-uglify');
// 	grunt.loadNpmTasks('grunt-contrib-less');
// 	grunt.loadNpmTasks('grunt-contrib-watch');


// 	grunt.registerTask('watchTask', function() {
// 		grunt.task.run(['watch']);
// 	});

// 	grunt.registerTask('lessTask', function() {
// 		grunt.task.run(['less']);
// 	})
	
// 	grunt.registerTask('default', function() {
// 		grunt.log.writeln('----------------------------------');
// 		grunt.log.writeln('LESS');
// 		grunt.task.run(['lessTask']);
// 		grunt.log.writeln('----------------------------------');
// 		grunt.log.writeln('WATCH');
// 		grunt.task.run(['watchTask']);
		
// 	});

// };

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
		
		watch: {
			less: {
				files: 'src/less/**/*.less',
				tasks: ['lessTask'],
			},
			html: {
				files: 'index.html',
				tasks: ['htmlTask'],
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

	grunt.registerTask('watchTask', function() {
		grunt.task.run(['connect', 'watch']);
	});

	grunt.registerTask('lessTask', function() {
		grunt.log.writeln('----------------------------------');
		grunt.log.writeln('LESS');
		grunt.task.run(['less']);
	});
	
	grunt.registerTask('htmlTask', function() {
		grunt.log.writeln('----------------------------------');
		grunt.log.writeln('HTML');
	});
	
	grunt.registerTask('default', function() {
		grunt.log.writeln('----------------------------------');
		grunt.log.writeln('LESS');
		grunt.task.run(['lessTask']);
		grunt.log.writeln('----------------------------------');
		grunt.log.writeln('WATCH');
		grunt.task.run(['watchTask']);
		
	});

};