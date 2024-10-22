/** load */
gsap
  .timeline()
  .from(`.hero__left`, { duration: 1, opacity: 0, y: 100 })
  .from(`.hero__btn`, { duration: 0.5, y: -10 }, `-=0.5`)
  .from(`.hero__descr`, { duration: 0.7, opacity: 0 })
  .from(`.photos-wrap > img:nth-child(1)`, {
    duration: 0.4,
    opacity: 0,
    scale: 0.5,
  })
  .from(`.photos-wrap > img:nth-child(2)`, {
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
  })
  .from(`.photos-wrap > img:nth-child(3)`, {
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
  })
  .from(`.photos__author`, { duration: 1, opacity: 0 }, `<`);

/** click on burger button */
const menuElem = document.querySelector(`.menu`);

const tl = gsap
  .timeline({
    paused: true,
    onStart: () => menuElem.classList.add(`menu--open`),
    onReverseComplete: () => menuElem.classList.remove(`menu--open`),
  })
  .fromTo(
    `.menu`,
    { opacity: 0, overflow: `hidden` },
    { opacity: 1, duration: 1.5 }
  )
  .fromTo(
    `.menu__top`,
    { y: `-100%`, opacity: 0 },
    { y: 0, padding: `13px 0`, opacity: 1, duration: 0.5 },
    `0.2`
  )
  .fromTo(
    `.close`,
    { visibility: `hidden` },
    { visibility: `visible`, duration: 0.5 },
    `>`
  )
  .fromTo(
    `.menu__container`,
    { y: `50%` },
    { y: 0, backgroundColor: `#373737`, height: `90%`, duration: 0.5 },
    `0.5`
  )
  .fromTo(
    `.menu__nav`,
    { y: `15%`, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    `1`
  )
  .fromTo(
    `.social`,
    { y: `15%`, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  )
  .fromTo(
    `.menu__right`,
    { y: `5%`, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    `<`
  );

document.querySelector(`.burger`).onclick = () => tl.play();
document.querySelector(`.close`).onclick = () => tl.reverse();
