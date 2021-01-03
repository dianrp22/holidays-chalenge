function diamond(num) {
    let counter = 1;
    for (let i = 0; i < num; i++) {
        let penampung = '';
        let spasi = '';
        for (let j = 0; j < counter; j++) {
            if (j === 0 || j === counter - 1) {
                penampung += '$';
            } else {
                penampung += ' ';
            }
        }
        for (let k = i; k < num - 1; k++) {
            spasi += ' ';
        }
        let gabungan = spasi + penampung;
        console.log(gabungan);
        counter += 2;
    }
    counter -= 4;
    for (let i = num - 1; i > 0; i--) {
        let penampung = '';
        let spasi = '';
        for (let j = 0; j < counter; j++) {
            if (j === 0 || j === counter - 1) {
                penampung += '$';
            } else {
                penampung += ' ';
            }
        }
        for (let k = i; k <= num - 1; k++) {
            spasi += ' ';
        }
        let gabungan = spasi + penampung;
        console.log(gabungan);
        counter -= 2;
    }
}

diamond(3);

//   $
//  $a$
// $aaa$
//  $a$
//   $
// 1 3 5 7
// 2 1 0
// 1 2