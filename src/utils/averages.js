export const WeightAverage = (data) => {
  let weights = [];
  weights = data.map((cat) => {
    weights =
      (parseInt(cat.weight.metric.charAt(0)) +
        parseInt(cat.weight.metric.slice(4))) /
      2;
    return weights;
  });
  let AVGWeight = weights.reduce((a, b) => a + b) / weights.length;
  return AVGWeight;
};

export const LifespanAverage = (data) => {
  let lifespans = [];
  lifespans = data.map((cat) => {
    if (cat.life_span.length > 6) {
      lifespans =
        (parseInt(cat.life_span.slice(0, 2)) +
          parseInt(cat.life_span.slice(5))) /
        2;
    } else {
      lifespans =
        (parseInt(cat.life_span.charAt(0)) + parseInt(cat.life_span.slice(4))) /
        2;
    }
    return lifespans;
  });
  let AVGLifespan = lifespans.reduce((a, b) => a + b) / lifespans.length;
  return AVGLifespan;
};
