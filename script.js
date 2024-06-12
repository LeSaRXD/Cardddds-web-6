let cursors;
window.addEventListener("load", () => {
	cursors = Array.from(document.getElementsByClassName("cursor"));
	for (const cursor of cursors) {
		cursor.pos = { x: 0, y: 0 };
	}
	u();
});

const lerp = (a, b, t) => a * (1 - t) + b * t;

let currPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
	currPos = {
		x: e.clientX,
		y: e.clientY,
	};
});

const u = () => {
	for (const [index, cursor] of cursors.entries()) {
		cursor.pos.x = lerp(cursor.pos.x, currPos.x, (index + 1) / 10);
		cursor.pos.y = lerp(cursor.pos.y, currPos.y, (index + 1) / 10);
		cursor.style.left = `${cursor.pos.x}px`;
		cursor.style.top = `${cursor.pos.y}px`;
	}
	setTimeout(u, 10);
};
