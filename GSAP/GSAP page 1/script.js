var tl = gsap.timeline();

tl.from(".logo", {
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("a", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});

tl.from("h1", {
  opacity: 0,
  duration: 1,
  scale: 0.4,
});
