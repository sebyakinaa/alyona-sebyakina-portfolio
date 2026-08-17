import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createProjectMotion(root:HTMLElement,reduced:boolean){
  if(reduced)return()=>undefined;
  const mm=gsap.matchMedia();
  mm.add('(min-width:768px)',()=>{
    gsap.from(root.querySelectorAll('.project__copy > *'),{
      opacity:0,
      duration:.6,
      stagger:.08,
      ease:'power2.out',
      scrollTrigger:{trigger:root,start:'top 82%',once:true}
    });
    gsap.from(root.querySelectorAll('.gallery__card'),{
      opacity:0,
      scale:.985,
      duration:.7,
      stagger:.055,
      ease:'power2.out',
      scrollTrigger:{trigger:root.querySelector('.gallery'),start:'top 88%',once:true}
    });
  });
  mm.add('(max-width:767px)',()=>{
    gsap.from(root.querySelectorAll('.gallery__card'),{
      opacity:0,
      scale:.99,
      duration:.55,
      stagger:.035,
      ease:'power2.out',
      scrollTrigger:{trigger:root.querySelector('.gallery'),start:'top 92%',once:true}
    });
  });
  return()=>mm.revert();
}
