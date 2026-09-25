export function createBrushState(){return{mode:'erase',size:30,strokes:[],undo:[]}}export function addStroke(s,x){s.strokes.push(x);s.undo=[]}export function restoreMode(s){s.mode='restore'}
