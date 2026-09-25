export async function exportProject(cb=()=>{}){cb(10,'Preparing project…');await new Promise(r=>setTimeout(r,300));cb(100,'Native export engine required for production MP4.')} 
