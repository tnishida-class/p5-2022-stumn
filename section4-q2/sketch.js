// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  let nums = [];
  let num;
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }
  scores.sort(function(a, b) {
    return (a > b) ? -1 : 1;
  });

  for(let i = 0; i<scores.length; i++){
    num = scores[i]*10;
    num = Math.round(num);
    num = num / 10;
    nums.push(num);
  }
    
  // print(scores)

  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total += scores[i];
  }
 
  let rates = [];
  for(let i = 0; i < scores.length; i++){
    rates.push(scores[i]/total);
  }

  let kaisi = -PI/2;
  let syuryo = -PI/2;
  let centerX = width/2;
  let centerY = height/2;

  for(let i = 0; i < scores.length; i++){
    syuryo += rates[i] * 2 * PI;
    arc(width/2,height/2,350,350,kaisi,syuryo,PIE);
    let x = centerX + 150*(cos(kaisi)+cos(syuryo))/2-10;
    let y = centerY + 150*(sin(kaisi)+sin(syuryo))/2;
    text(nums[i],x,y);
    kaisi += rates[i] * 2 * PI;
  }
  // print(nums)
}