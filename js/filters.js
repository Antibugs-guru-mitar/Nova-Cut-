export const filters=['none','bw','sepia','vintage','warm','cool','bright','blur'];export function applyFilter(x){let v=document.querySelector('#previewVideo');v.className=x==='none'?'':'filter-'+x}
