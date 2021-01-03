function split(str) {
  let output = [];
  let penampungKata = '';
  let kata = [];
  let opt = ['+'];

  for (let i = 0; i < str.length; i++) {
      if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
          kata.push(penampungKata);
          opt.push(str[i]);
          penampungKata = '';
          i++;
      }
      if (str[i] !== ' ') {
          penampungKata += str[i];
      }
      if (i === str.length - 1) {
          kata.push(penampungKata);
      }
  }
  output.push(kata, opt);
  return output;
}


function convertWeight(summation, unitWeight) {
  //your code here
  let output = 0;
  let penampung = [];
  let satuan = ['ton', 'kwintal', '-', 'kg', 'ons', 'dag', 'g', 'dg', 'cg', 'mg'];

  let splitter = split(summation);
  let berat = splitter[0];
  

  let obj = {}

  for (let i = 0; i < berat.length; i++) {
      let angka = '';
      let penampungSatuan = '';
      for (let j = 0; j < berat[i].length; j++) {
          if (berat[i][j].toLowerCase() === berat[i][j].toUpperCase()) {
              angka += berat[i][j]
          } else {
              penampungSatuan += berat[i][j];
          }
      }
      if (obj[penampungSatuan] === undefined) {
          obj[penampungSatuan] = 0
      }
      obj[penampungSatuan] += (Number(angka));
  }

  for (let key in obj) {
      
      let pengali = 1;
      let keKanan = false;
      let startKanan = false;
      let start = false;
      for (let i = 0; i < satuan.length; i++) {
          if (satuan[i] === unitWeight) {
              if (startKanan) {
                  keKanan = true;
              }
          }
          if (key === satuan[i]) {
              startKanan = true;
          }
      }

      if (keKanan) {
          for (let i = 0; i < satuan.length; i++) {
              if (start) {
                  pengali *= 10;
              }
              if (key === satuan[i]) {
                  start = true;
              }
              if (satuan[i] === unitWeight) {
                  start = false;
              }
          }
      } else {
          for (let i = satuan.length - 1; i >= 0; i--) {
              if (start) {
                  pengali /= 10;
              }
              if (key === satuan[i]) {
                  start = true;
              }
              if (satuan[i] === unitWeight) {
                  start = false;
              }
          }
      }
      penampung.push(obj[key] * pengali);
  }
  for (let i = 0; i < penampung.length; i++) {
      output += penampung[i]
  }
  return output +" "+ unitWeight
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg