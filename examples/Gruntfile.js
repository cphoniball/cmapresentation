module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			styles: {
				files: ['client/sass/*.sass', 'client/sass/modules/*.sass'],
				tasks: ['sass']
			}
		},
		sass: {
			dist: {
				files: {
					'client/css/main.css': 'client/sass/main.sass'
				}
			}
		}
	}); 

	// automatically load all grunt plugins
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); 

	grunt.registerTask('default', ['watch']); 
};
