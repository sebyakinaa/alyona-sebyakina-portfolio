import {useEffect} from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export function useLenis(disabled:boolean){
  useEffect(()=>{
    if(disabled)return;

    const isMobile=matchMedia('(max-width: 767px)').matches;
    const lenis=new Lenis({
      smoothWheel:true,
      lerp:.16,
      wheelMultiplier:.95,
      anchors:{duration:.7,offset:isMobile?-64:0},
      stopInertiaOnNavigate:true,
    });
    const raf=(time:number)=>lenis.raf(time*1000);

    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return()=>{
      lenis.off('scroll',ScrollTrigger.update);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  },[disabled]);
}
