const obstacles = [{x:125,y:147,w:130,h:105},{x:625,y:115,w:160,h:125},{x:185,y:365,w:140,h:100},{x:650,y:360,w:140,h:105}];
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
export function nextPosition(position, dx, dy) {
  const next = { x: clamp(position.x + dx, 38, 922), y: clamp(position.y + dy, 50, 555) };
  if (obstacles.some(b => next.x>b.x-10 && next.x<b.x+b.w+10 && next.y>b.y-5 && next.y<b.y+b.h+15)) return position;
  if(next.x>815 && next.y>365) return position;
  return next;
}
