// 연결 리스트 구현
// LInit, LInsert, LFirst, LNext, LRemove, LCount
const LIST_LENGTH = 100

export class LinkedList {
  constructor() {
    this.init()
  }

  // List 초기화
  init() {
    this.length = 0
    this.position = -1
    this.list = new Array(LIST_LENGTH)
  }

  // List 데이터 저장
  insert(value) {
    if (this.length >= LIST_LENGTH) {
      console.error('저장이 불가능합니다.')
      return false
    }

    this.list[this.length] = value
    this.length++
  }

  // 현재 position 이 가르키는 위치의 data 삭제
  remove() {
    if (this.position < 0) {
      console.error('삭제가 불가능합니다.')
      return false
    }

    const removeData = this.list[this.position]

    for (let i = this.position; i < (this.length - 1); i++) {
      this.list[i] = this.list[i + 1]
    }

    this.length--
    this.position--

    return removeData
  }

  first() {
    if (this.length === 0) {
      return false
    }

    this.position = 0
    return true
  }

  next() {
    if (this.position >= this.length - 1) {
      return false
    }

    this.position++
    return true
  }

  getData() {
    return this.list[this.position]
  }

  count() {
    return this.length
  }

  update(value) {
    if (this.position < 0) {
      console.error('업데이트가 불가능합니다.')
      return false
    }
    this.list[this.position] = value
  }
}