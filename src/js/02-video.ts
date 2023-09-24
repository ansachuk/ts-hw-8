import Player from "@vimeo/player";
import throttle from "lodash.throttle";

type VimeoTimeUpdateData = {
	seconds: number;
	percent: number;
	duration: number;
};

const vimeoIframe = document.querySelector<HTMLDivElement>("#vimeo-player");

if (vimeoIframe) {
	const player = new Player(vimeoIframe);

	const savedTime = localStorage.getItem("videoplayer-current-time");

	const recordCurrentTime = (data: VimeoTimeUpdateData): void => {
		const currentTime = data.seconds;
		localStorage.setItem("videoplayer-current-time", currentTime.toString());
	};

	if (savedTime) {
		player.setCurrentTime(Number(savedTime));
	}

	player.on("timeupdate", throttle(recordCurrentTime, 1000));
}
