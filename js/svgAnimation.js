  const duration = 7;
  const duration1 = 6;
  const duration2 = 5;
  const duration3 = 4;
  const range = 100;
  const range1 = 300;
  const range2 = 200;

  // Animate the circles
  gsap.to("#circle1", {
    duration: duration,
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 3,
    repeat: -1,
    yoyo: true
  });

  gsap.to("#circle2", {
    duration: duration1,
    x: Math.random() * range1 - range / 2,
    y: Math.random() * range1 - range / 1.3,
    repeat: -1,
    yoyo: true
  });

  // Animate the rectangles
  gsap.to("rect1", {
    duration: duration2,
    x: Math.random() * range2 - range / 3,
    y: Math.random() * range2 - range / 5,
    repeat: -1,
    yoyo: true
  });

  gsap.to("#rect2", {
    duration: duration3,
    x: Math.random() * range - range / 4,
    y: Math.random() * range - range / 2,
    repeat: -1,
    yoyo: true
  });

  gsap.to("#arrow1", {
    duration: duration2,
    x: Math.random() * range - range / 3,

    repeat: -1,
    yoyo: true
  });

  gsap.to("#arrow2", {
    duration: duration2,
    x: Math.random() * range - range / 3,
    repeat: -1,
    yoyo: true
  });

  // Animate the waves
  gsap.to("#wave1", {
    duration: duration2,
    x: Math.random() * range - range / 2.4,
    y: Math.random() * range - range / 1.1,
    repeat: -1,
    yoyo: true
  });

  gsap.to("#wave2", {
    duration: duration,
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 3,
    repeat: -1,
    yoyo: true
  });

  // Animate the complex shape
  gsap.to(".complexShape", {
    duration: duration3,
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 2,
    repeat: -1,
    yoyo: true
  });
