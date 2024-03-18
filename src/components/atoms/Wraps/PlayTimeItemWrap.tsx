import { CSSProperties } from "react";
import PlayTimeItems_inActive from "../Boxes/PlayTimeItems_inActive";

const PlayTimeItemWrap = () => {
	const styles: CSSProperties = {
		display: "flex",
		justifyContent: "space-between",
		margin: "50px 0 120px",
		width: "960px",
		fontFamily: "Pretendard, sans-serif",
	};
	return (
		<div style={styles}>
			<PlayTimeItems_inActive
				title="1시간플레이 시"
				content="무작위 온전한 챔피언"
				src="/champion_box.272994c01aab85b1aeee.png"
			/>
			<PlayTimeItems_inActive
				title="3시간플레이 시"
				content="무작위 온전한 스킨"
				src="/skin_box.98fe29ac75807e883fd9.png"
			/>
			<PlayTimeItems_inActive
				title="5시간플레이 시"
				content="신화정수 10개"
				src="/mythic_essence.2cfb7419fdb8e83a1b77.png"
			/>
		</div>
	);
};
export default PlayTimeItemWrap;
