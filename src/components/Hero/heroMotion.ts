import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroMotion(root:HTMLElement,reduced:boolean){
  if(reduced)return()=>undefined;
  const objects=gsap.utils.toArray<HTMLElement>('.hero-object',root);
  const hero=root.querySelector<HTMLElement>('.hero__stage');
  const mm=gsap.matchMedia();
  mm.add('(min-width:768px)',()=>{
    const tl=gsap.timeline({scrollTrigger:{trigger:root,start:'top top',end:'+=135%',pin:hero,scrub:.8,anticipatePin:1,invalidateOnRefresh:true}});
    objects.forEach((el,i)=>{
      const isBadge=el.dataset.object==='badge';
      tl.to(el,{x:el.dataset.exitX,y:el.dataset.exitY,rotate:Number(el.dataset.exitRotate||0),opacity:isBadge?0:.15,scale:isBadge?.94:1,ease:'power2.in',duration:.72+i*.035},i*.13);
    });
  });
  mm.add('(max-width:767px)',()=>{
    const tl=gsap.timeline({scrollTrigger:{trigger:root,start:'top top',end:'bottom bottom',scrub:.65}});
    objects.forEach((el,i)=>{
      const isBadge=el.dataset.object==='badge';
      tl.to(el,{
        x:isBadge?'0vw':el.dataset.exitX,
        y:isBadge?'-38vh':el.dataset.exitY,
        rotate:Number(el.dataset.exitRotate||0),
        opacity:0,
        scale:isBadge?.92:1,
        ease:'power1.inOut',
        duration:.8,
      },i*.06);
    });
  });
  return()=>mm.revert();
}
