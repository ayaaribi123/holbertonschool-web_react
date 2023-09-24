const path = require('path');

module.exports = {
	  entry: './src/index.js', // Entry point of your application
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, 'dist'), // Output directory
		    },
	  module: {
		      rules: [
			            {
					            test: /\.js$/, // Apply the loader to all .js files
					            exclude: /node_modules/, // Exclude node_modules
					            use: {
							              loader: 'babel-loader', // Use Babel for transpilation
							              options: {
									                  presets: ['@babel/preset-env'],
									                },
							            },
					          },
			          ],
		    },
};

