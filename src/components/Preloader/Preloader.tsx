import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import './Preloader.css';

export function Preloader({onDone}:{onDone:()=>void}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const started=performance.now();
    const minimum=sessionStorage.getItem('portfolio-loaded')?280:650;
    const images=[...document.querySelectorAll<HTMLImageElement>('.hero-object img')];
    const assets=Promise.all([document.fonts.ready,...images.map(image=>image.decode?.().catch(()=>undefined))]);
    const timeout=new Promise<void>(resolve=>window.setTimeout(resolve,1600));
    Promise.race([assets,timeout])
      .then(()=>new Promise(resolve=>window.setTimeout(resolve,Math.max(0,minimum-(performance.now()-started)))))
      .then(()=>{
        sessionStorage.setItem('portfolio-loaded','1');
        gsap.to(ref.current,{yPercent:-100,duration:.55,ease:'power3.inOut',onComplete:onDone});
        gsap.to('.hero-composition',{opacity:1,duration:.55});
      });
  },[onDone]);
  return <div ref={ref} className="preloader" role="status" aria-label="Загрузка"><p>Алена Себякина</p><span/></div>;
}
