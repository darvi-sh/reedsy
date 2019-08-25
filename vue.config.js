module.exports = {
	devServer: {
		port: 3000
	},
	css: {
		loaderOptions: {
			sass: {
				data: `
					@import '@/styles/_reset.scss';
					@import '@/styles/_globals.scss';
					@import '@/styles/_variables.scss';
				`
			}
		}
	}
};
