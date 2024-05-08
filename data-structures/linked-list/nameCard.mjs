/**
 * 문제 03-2 리스트의 활용
 *
 * 1. 총 3명의 전화번호 정보를, 앞서 구현한 리스트에 저장한다.
 * 2. 특정 이름을 대상으로 탐색을 진행하여, 그 사람의 정보를 출력한다.
 * 3. 특정 이름을 대상으로 탐색을 진행하여, 그 사람의 전화번호 정보를 변경한다.
 * 4. 특정 이름을 대상으로 탐색을 진행하여, 그 사람의 정보를 삭제한다.
 * 5. 끝으로 남아있는 모든 사람의 전화번호 정보를 출력한다.
 *
 * 더불어 저장하는 형태는 NameCard 구조체 변수의 주소 값이어야 하며,
 * 위에서 언급하는 특정 이름은 임의로 지정하되 서로 다른 이름으로 지정하기로 하자.
 *
 * namecard = {
 *   name: string
 *   phone: string
 * }
 *
 * makeNameCard
 * showNameCardInfo
 * nameCompare
 * changePhoneNum
 */

import {LinkedList} from './linkedList.mjs'

class NameCard {
  constructor(name, phone) {
    this.name = name
    this.phone = phone
  }
}

export class CardList {
  constructor() {
    this.list = new LinkedList()
  }

  makeNameCard(name, phone) {
    const nameCard = new NameCard(name, phone)
    this.list.insert(nameCard)
  }

  getNameCardInfo() {
    const {name, phone} = this.list.getData()
    return {name, phone}
  }

  showNameCardInfo() {
    const {name, phone} = this.getNameCardInfo()
    console.log(`${name}: ${phone}`)
  }

  nameCompare(findName) {
    const {name, phone} = this.list.getData()
    return name === findName
  }

  changePhoneNum(name, phone) {
    if (this.list.first()) {
      if (this.nameCompare(name)) {
        const nameCard = new NameCard(name, phone)
        this.list.update(nameCard)
      }

      while(this.list.next()) {
        if (this.nameCompare(name)) {
          const nameCard = new NameCard(name, phone)
          this.list.update(nameCard)
        }
      }
    }
  }

  find(name) {
    if (this.list.first()) {
      if (this.nameCompare(name)) {
        this.showNameCardInfo()
      }

      while(this.list.next()) {
        if (this.nameCompare(name)) {
          this.showNameCardInfo()
        }
      }
    }
  }

  remove(name) {
    if (this.list.first()) {
      if (this.nameCompare(name)) {
        this.list.remove()
      }

      while(this.list.next()) {
        if (this.nameCompare(name)) {
          this.list.remove()
        }
      }
    }
  }

  showList() {
    if (this.list.first()) {
      this.showNameCardInfo()

      while(this.list.next()) {
        this.showNameCardInfo()
      }
    }
  }
}