
module.exports = function(grunt) {
  require('grunt-task-loader')(grunt);

  grunt.initConfig({

    bdd: {
      options: {
        node: true,
        validthis: true,
      },
      files: {
        src: ['test/bdd/**/*.js'],
      },
    },

  });

};
