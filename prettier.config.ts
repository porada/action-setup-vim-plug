import { defineConfig } from '@standard-config/prettier';

export default defineConfig({
	overrides: [
		{
			files: '*.md',
			options: {
				tabWidth: 2,
			},
		},
	],
});
