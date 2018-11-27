/**
 * 課題1: 数値が格納されている配列を引数で受け取り、一番大きい数値を削除した配列を返す関数を作成する
 *   - 関数名は「removeMaxNumberFromArray」とする
 *   - removeMaxNumberFromArray関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「numbers」とする
 *     - 「numbers」の内容は[10, 500, 234, 965, 221] とする
 *   - removeMaxNumberFromArray関数の戻り値は、第1引数で渡した配列の中から一番大きい数値を削除した新しい配列が返る
 *     - 戻り値は、「returnedNumbers」という変数に代入する
 *   - numbersとreturnedNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - removeMaxNumberFromArray関数の戻り値は[10, 500, 234, 221]である
 *     - removeMaxNumberFromArray関数を実行した後の配列numbersの内容は [10, 500, 234, 965, 221] のままである
 */

const removeMaxNumberFromArray = (_numbers) => {
    //ひとまず配列の先頭の値を最大値とする
    let maxNumber = _numbers[0];
    //配列の最大値を算出
    _numbers.forEach((element) => {
        maxNumber = Math.max(maxNumber, element)
    });
    //最大値を削除した配列を返す
    return _numbers.filter((element) => {
        return maxNumber != element;
    });
};

//実行結果の確認
const numbers = [10, 500, 234, 965, 221];
console.log('入力：', numbers);
console.log('出力：', removeMaxNumberFromArray(numbers));
console.log('実行後の入力：', numbers);

/**
 * 課題2: 数値が格納されている配列を引数で受け取り、小さい順に並べ替える
 *   - 関数名は「sortNumbers」とする
 *   - sortNumbers関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「beforeSortNumbers」とする
 *     - 「beforeSortNumbers」の内容は [1000, 10, 500, 234, 965, 221, 102] とする
 *   - sortNumbers関数の戻り値は、第1引数で渡した配列内の数値を小さい順に並べた配列となる
 *     - 戻り値は、「afterSortNumbers」という変数に代入する
 *   - beforeSortNumbersとafterSortNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - sortNumbers関数の戻り値は[10, 102, 221, 234, 500, 965, 1000]である
 *     - sortNumbers関数を実行した後のbeforeSortNumbersの内容は [1000, 10, 500, 234, 965, 221, 102] のままである
 *   - その他
 *     - 「Array.prototype.sort()」を使う
 *       - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

const sortNumbers = (_numbers) => {
    //戻り値用の配列
    let outputArray = [];
    //引数の配列の要素数
    const numbersLength = _numbers.length;

    for(let i = 0; i < numbersLength; i++){
        //ひとまず配列の先頭の値を最小値とする
        let minNumber = _numbers[0];
        //配列の最小値を算出
        _numbers.forEach((element) => {
            minNumber = Math.min(minNumber, element)
        });
        //_numbersの最小値を削除した配列を_numbersに再代入
        _numbers = _numbers.filter((element) => {
            return minNumber != element;
        });
        //戻り値用の配列の最後尾に最小値を代入
        outputArray.push(minNumber);
    }
    return outputArray;
};

/**
 * 上記はsort()を使用するヒントを見ずに実装してしまったので、
 * 以下ではsort()を使用して実装してみました。
 */

const sortNumbers2 = (_numbers) =>{
    let returnNumbers = _numbers.slice();

    returnNumbers.sort((a, b) => {
        return a - b;
    });

    return returnNumbers;
};

//実行結果の確認
const beforeSortNumbers = [1000, 10, 500, 234, 965, 221, 102];

console.log('入力：', beforeSortNumbers);
console.log('出力：', sortNumbers(beforeSortNumbers));
console.log('実行後の入力：', beforeSortNumbers); 

console.log('入力：', beforeSortNumbers);
console.log('出力：', sortNumbers2(beforeSortNumbers));
console.log('実行後の入力：', beforeSortNumbers);


/**
 * 以下は動作確認
 */

const test1 = (_numbers) =>{
    _numbers.push(1); 
};

const test2 = (_numbers) =>{
    _numbers.push(1); 
    return _numbers;
};

const testNumbers = [];

console.log('入力：', testNumbers);
test1(testNumbers);
console.log('実行後の入力：', testNumbers); //1が追加される

console.log('入力：', testNumbers);
console.log('出力：', test2(testNumbers));
console.log('実行後の入力：', testNumbers); //1が追加される