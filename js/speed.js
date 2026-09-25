import{state}from'./state.js';export function setSpeed(v){let c=state.clips.find(x=>x.id===state.selectedClipId);if(c)c.speed=Math.max(.5,Math.min(2,Number(v)));return c}
