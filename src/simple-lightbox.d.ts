declare module "simplelightbox" {
	interface SimpleLightbox {
		new (element: string, options?: SimpleLightboxOptions): SimpleLightbox;
		destroy(): void;
		refresh(): void;
	}
	interface SimpleLightboxOptions {
		captionPosition?: string;
		captionsData: string;
		captionDelay: number;
	}
	const SimpleLightbox: SimpleLightbox;
	export = SimpleLightbox;
}
