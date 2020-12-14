let hayvanlar = [
  "inek",
  "inek",
  "tavuk",
  "domuz",
  "inek",
  "tavuk",
  "tavuk",
  "domuz",
  "koyun",
];
let paca = 0;
for (i = 0; i < hayvanlar.length; i++) {
  //  her türlü paça versiyonu

  if (hayvanlar[i] === "tavuk") {
    paca = paca + 2;
  } else {
    paca = paca + 4;
  }

  //müslüman versiyonu
  /* if (hayvanlar[i] === "koyun") {
    paca = paca + 4;
  } else if (hayvanlar[i] === "inek") {
    paca = paca + 4;
  }*/
}
console.log(paca);
