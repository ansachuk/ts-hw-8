import { defineConfig } from "vite";

export default defineConfig({
	base: "/ts-hw-8/",
	appType: "mpa",
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				gallert: "./src/pages/01-gallery.html",
				video: "./src/pages/02-video.html",
				feedback: "./src/pages/03-feedback.html",
			},
		},
	},
});
