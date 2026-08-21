export type HeroObject={id:string;src:string;mobileSrc:string;alt:string;depth:number;className:string;exit:{x:string;y:string;rotate?:number}};
const asset=(file:string,extension='webp')=>import.meta.env.BASE_URL+'assets-optimized/hero/'+file+'.'+extension;
const mobileAsset=(file:string)=>import.meta.env.BASE_URL+'assets-mobile/hero/'+file+'.webp';
export const heroObjects:HeroObject[]=[
{id:'lightning',src:asset('lightning'),mobileSrc:mobileAsset('lightning'),alt:'',depth:1,className:'hero-object--lightning',exit:{x:'-55vw',y:'-50vh',rotate:-3}},
{id:'lime-left',src:asset('lime-left'),mobileSrc:mobileAsset('lime-left'),alt:'',depth:.8,className:'hero-object--lime-left',exit:{x:'-62vw',y:'12vh',rotate:0}},
{id:'badge',src:asset('badge'),mobileSrc:asset('badge-extended'),alt:'Бейдж Алены Себякиной, продуктового дизайнера',depth:.22,className:'hero-object--badge',exit:{x:'0vw',y:'-10vh',rotate:0}},
{id:'portfolio',src:asset('portfolio-case'),mobileSrc:mobileAsset('portfolio-case'),alt:'',depth:.7,className:'hero-object--portfolio',exit:{x:'58vw',y:'-42vh',rotate:0}},
{id:'sparkle',src:asset('sparkle'),mobileSrc:mobileAsset('sparkle'),alt:'',depth:.55,className:'hero-object--sparkle',exit:{x:'48vw',y:'-40vh',rotate:4}},
{id:'lime-right',src:asset('lime-right'),mobileSrc:mobileAsset('lime-right'),alt:'',depth:.9,className:'hero-object--lime-right',exit:{x:'72vw',y:'0vh',rotate:0}},
{id:'cursor',src:asset('cursor'),mobileSrc:mobileAsset('cursor'),alt:'',depth:.65,className:'hero-object--cursor',exit:{x:'-48vw',y:'50vh',rotate:0}},
{id:'paperclip',src:asset('paperclip'),mobileSrc:mobileAsset('paperclip'),alt:'',depth:.45,className:'hero-object--paperclip',exit:{x:'0vw',y:'55vh',rotate:0}}];
