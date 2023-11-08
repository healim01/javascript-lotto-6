import { Console } from "@woowacourse/mission-utils";

class LottoResult {
  #lottoList = [];
  #winningNumber = [];
  #bonusNumber;
  #resultList = [];
  #prizeList;
  #profit;

  constructor(lottoList, winningNumber, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#resultList = [0, 0, 0, 0, 0];
    this.#prizeList = [5000, 50000, 1500000, 30000000, 2000000000];
    this.#profit = 0;

    this.checkAll();
  }

  checkAll() {
    this.#lottoList.forEach((lotto) => {
      this.checkLotto(lotto);
    });

    this.getProfit();
    this.printResult();
  }

  checkLotto(lotto) {
    const matchedCount = this.getMatchedCount(lotto);
    const isBonusMatched = this.isBonusMatched(lotto);
    this.getResult(matchedCount, isBonusMatched);
  }

  getMatchedCount(lotto) {
    let matchCount = 0;

    lotto.forEach((number) => {
      if (this.#winningNumber.includes(number)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  isBonusMatched(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  getResult(matchCount, isBonusMatched) {
    if (matchCount == 3) {
      this.#resultList[0] += 1;
    } else if (matchCount == 4) {
      this.#resultList[1] += 1;
    } else if (matchCount == 5 && !isBonusMatched) {
      this.#resultList[2] += 1;
    } else if (matchCount == 5 && isBonusMatched) {
      this.#resultList[3] += 1;
    } else if (matchCount == 6) {
      this.#resultList[4] += 1;
    }
  }
}
export default LottoResult;